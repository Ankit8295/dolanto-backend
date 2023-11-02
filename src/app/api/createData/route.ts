import dbConn from "@/database/dbConnect";
import { NextResponse } from "next/server";

interface RequestBody {
  title: string;
}

export async function POST(request: Request) {
  const { title } = (await request.json()) as RequestBody;

  try {
    const newPost = await dbConn.query(
      "INSERT INTO homepage (title) VALUES($1)",
      [title]
    );
    console.log(newPost);
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
