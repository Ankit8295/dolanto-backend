import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

interface RequestBody {
  name: string;
  email: string;
  image: string;
}

export async function POST(request: Request) {
  const { email, image, name } = (await request.json()) as RequestBody;

  const post = await prisma.post.create({
    data: {
      name,
      email,
      image,
    },
  });

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
