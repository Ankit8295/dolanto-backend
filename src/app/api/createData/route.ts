import dbConn from "@/database/dbConnect";
import { NextResponse } from "next/server";

interface RequestBody {
  card_id: string;
  cardData: any;
}

export async function PATCH(request: Request) {
  const { cardData, card_id } = (await request.json()) as RequestBody;
  try {
    const newPost = await dbConn.query(
      `UPDATE homepageCards SET cardData = $1 WHERE card_id = $2`,
      [cardData, card_id]
    );
    return NextResponse.json({
      status: 200,
      data: newPost,
    });
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
