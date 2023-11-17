const url = process.env.NEXT_URL;

export async function getHomepageData() {
  const res = await fetch(`${process.env.NEXT_URL}/api/get-homepage`, {
    cache: "no-store",
    next: {
      tags: ["homepagecards"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getJobsData() {
  const res = await fetch(`${process.env.NEXT_URL}/api/get-jobs`, {
    next: {
      tags: ["jobs"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
