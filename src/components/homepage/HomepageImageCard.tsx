/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type Props = {
  cardData: {
    title: string;
    description: string;
    image_url: string;
  };
};

export default function HomepageImageCard({ cardData }: Props) {
  return (
    <div className="w-full flex justify-start">
      <div className="w-[80%] rounded-3xl  flex flex-col p-5 gap-1 border bg-blue-700 text-white">
        <img
          src={cardData.image_url}
          alt={"image"}
          loading="lazy"
          width={500}
          height={200}
        />
        <h2 className="font-medium text-xl ">{cardData.title}</h2>
        <span className="text-sm ">{cardData.description}</span>
      </div>
    </div>
  );
}
