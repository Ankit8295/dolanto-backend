import dbConn from "@/database/dbConnect";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const allData = await dbConn.query(`SELECT * FROM jobs ORDER BY id`);

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
