import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
  const post = await prisma.post.findMany({});
  if (post) {
    return NextResponse.json({
      status: 200,
      data: post,
    });
  }
  return NextResponse.json({
    status: 500,
    reason: "something went wrong",
  });
}
