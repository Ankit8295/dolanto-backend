import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-white flex items-start">
      <div className="w-1/6 flex items-center gap-5 flex-col bg-[#001942] text-white h-full py-10">
        <Link href={"/dashboard/homepage"}>HomePage</Link>
        <Link href={"/dashboard/about-us"}>About Us</Link>
      </div>
      <div className="grow  h-full">{children}</div>
    </div>
  );
}
