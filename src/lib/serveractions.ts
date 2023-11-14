"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { generateUploadLink } from "./s3";
import dbConn from "@/database/dbConnect";

export async function updateHomePageData(data: FormData) {
  const image = data.get("image") as File;
  const prevImageUrl = data.get("prevImageUrl") as string;
  const card_id = data.get("card_id") as string;
  const title = data.get("title") as string;
  const description = data.get("description") as string;

  try {
    if (image.size > 0) {
      const s3url = await generateUploadLink(prevImageUrl.split(".com/")[1]);
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
          revalidatePath("/dashboard/homepage");
          revalidateTag("homepagecards");
          return "Success";
        }
        return "Error";
      }
    } else {
      const cardDetails = { title, description, image: prevImageUrl };
      const newPost = await dbConn.query(
        `UPDATE homepageCards SET cardData = $1 WHERE card_id = $2`,
        [cardDetails, card_id]
      );
      revalidatePath("/dashboard/homepage");
      revalidateTag("homepagecards");
      return "Success";
    }

    return console.log("Something went wrong");
  } catch (err) {
    console.log(err);
  }
}
