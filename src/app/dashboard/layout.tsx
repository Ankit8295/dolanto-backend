import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-white flex items-start">
      <div className="w-1/6 flex items-center gap-5 flex-col bg-[#001942] text-white h-full py-10">
        <Link href={"/dashboard/homepage"}>HomePage</Link>
        <Link href={"/dashboard/about-us"}>About Us</Link>
        <Link href={"/dashboard/career"}>Careers</Link>
      </div>
      <div className="w-5/6 h-full">{children}</div>
    </div>
  );
}
