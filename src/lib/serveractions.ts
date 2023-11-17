"use server";
import { v4 as uuidv4 } from "uuid";
import { revalidateTag } from "next/cache";
import { generateUploadLink } from "./s3";
import dbConn from "@/database/dbConnect";
import { JobType } from "@/components/career/JobForm";

export async function updateHomePageData(data: FormData) {
  const image = data.get("image") as File;
  const prevImageUrl = data.get("prevImageUrl") as string;
  const card_id = data.get("card_id");
  const title = data.get("title") as string;
  const description = data.get("description") as string;

  try {
    if (image.size > 0) {
      const s3url = await generateUploadLink(prevImageUrl.split(".com/")[1]);
      if (s3url) {
        const contentType = image.type || "application/octet-stream";
        const response = await fetch(s3url, {
          method: "PUT",
          headers: {
            "Content-Type": contentType,
          },
          body: image,
        });
        if (response.status === 200) {
          const imageLinkForDb = s3url.split("?")[0];
          const newPost = await dbConn.query(
            `UPDATE homepagedetails SET image_url = $2, title = $3, description = $4 WHERE id = $1`,
            [Number(card_id), imageLinkForDb, title, description]
          );
          revalidateTag("homepagecards");
          return "Data updated successfully";
        }
        return "Error";
      }
    } else {
      const newPost = await dbConn.query(
        `UPDATE homepagedetails SET title = $2, description = $3 WHERE id = $1`,
        [Number(card_id), title, description]
      );
      revalidateTag("homepagecards");
      return "Success";
    }

    return "Something went wrong";
  } catch (err) {
    console.log(err);
  }
}
export async function createNewJob(data: JobType) {
  const id = uuidv4();
  const title = data.title;
  const description = data.description;
  const department = data.department;
  const tags = data.tags;
  const tasks = data.tasks;
  const terms = data.terms;
  const expectations = data.expectations;

  const newJob = await dbConn.query(
    `INSERT INTO jobs (id, title, description, department, tags, tasks, terms, expectations) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [id, title, description, department, tags, tasks, terms, expectations]
  );
  if (newJob.rowCount) {
    revalidateTag("jobs");
    return JSON.stringify({ status: 200, data: "Job Added Successfully" });
  }
  return "Error";
}
export async function updateJob(data: JobType) {
  const id = data.id;
  const title = data.title;
  const description = data.description;
  const department = data.department;
  const tags = data.tags;
  const tasks = data.tasks;
  const terms = data.terms;
  const expectations = data.expectations;

  const newJob = await dbConn.query(
    `UPDATE jobs SET title = $2, description = $3, department = $4, tags = $5, tasks = $6, terms = $7, expectations = $8 WHERE id = $1`,
    [id, title, description, department, tags, tasks, terms, expectations]
  );
  if (newJob.rowCount) {
    revalidateTag("jobs");
    return JSON.stringify({ status: 200, data: "Job Updated Successfully" });
  }
  return "Error";
}
export async function deleteJob(id: string) {
  const deleteJob = await dbConn.query(
    `DELETE FROM jobs WHERE id = $1 RETURNING *`,
    [id]
  );
  if (deleteJob.rowCount) {
    revalidateTag("jobs");
    return JSON.stringify({ status: 200, data: "Job Deleted Successfully" });
  }
  return "Error";
}
