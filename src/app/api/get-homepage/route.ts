import dbConn from "@/database/dbConnect";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const allData = await dbConn.query(
      `SELECT json_build_object(` +
        `\'id\', id, ` +
        `\'day\', day, ` +
        `\'card_id\', card_id, ` +
        `\'cardData\', cardData) AS result ` +
        `FROM homepageCards ORDER BY card_id`,
      []
    );

    return NextResponse.json({
      status: 200,
      data: allData.rows,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      reason: "something went wrong",
    });
  }
}
