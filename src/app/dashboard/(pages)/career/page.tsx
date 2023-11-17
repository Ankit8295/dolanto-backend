import Career from "@/components/career/Career";
import { getJobsData } from "@/lib/query";
import React from "react";

export default async function page() {
  const data = await getJobsData();
  return <Career jobs={data.data} />;
}
