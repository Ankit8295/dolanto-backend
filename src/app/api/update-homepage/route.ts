import dbConn from "@/database/dbConnect";
import { generateUploadLink } from "@/lib/s3";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const homeCardsFormData = await request.formData();
  const image = homeCardsFormData.get("image") as File;
  const card_id = homeCardsFormData.get("card_id") as string;
  const title = homeCardsFormData.get("title") as string;
  const description = homeCardsFormData.get("description") as string;

  try {
    const s3url = await generateUploadLink(card_id);
    if (s3url) {
      const contentType = image.type || "application/octet-stream";
      const response = await fetch(s3url, {
        method: "PUT",
        headers: {
          "Content-Type": contentType,
        },
        body: image,
      });
      if (response.status === 200) {
        const imageLinkForDb = s3url.split("?")[0];
        const cardDetails = { title, description, image: imageLinkForDb };
        const newPost = await dbConn.query(
          `UPDATE homepageCards SET cardData = $1 WHERE card_id = $2`,
          [cardDetails, card_id]
        );

        return NextResponse.json({
          status: 200,
          data: newPost,
        });
      } else {
        return NextResponse.json({
          status: response.status,
          reason: "Failed to update image",
        });
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      reason: "something went wrong",
    });
  }
}

// const newPost = await dbConn.query(
//   "INSERT INTO homepageCards(id, day, card_id, cardDATA) VALUES($1, $2, $3, $4)",
//   [6, Date.now(), card_id, cardData]
// );
