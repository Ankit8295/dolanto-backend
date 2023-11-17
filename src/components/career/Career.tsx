"use client";
import React, { useState } from "react";
import JobForm from "./JobForm";
import { deleteJob } from "@/lib/serveractions";

type Props = {
  jobs: {
    id: string;
    title: string;
    description: string;
    department: string;
    tags: string[];
    tasks: string[];
    terms: string[];
    expectations: string[];
  }[];
};

export default function Career({ jobs }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  function modalHandler() {
    setOpen(true);
  }
  return (
    <div className="w-full max-h-screen h-screen p-5 flex flex-col gap-5">
      <div className="w-full sticky top-0  flex justify-between items-center">
        <p className="text-xl font-semibold">Active Jobs</p>
        <button
          onClick={modalHandler}
          className="border border-blue-800 rounded-xl p-2"
        >
          Add New Job
        </button>
      </div>
      <div className="w-full flex-col flex gap-4 overscroll-y-auto">
        {jobs.map((job) => (
          <details
            key={job.id}
            className="w-full border shadow flex flex-col gap-3 max-sm:gap-3 bg-lightBLue px-2 py-3 rounded-3xl"
          >
            <summary className="relative flex gap-3 items-center justify-between  p-2 max-sm:p-1">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center max-sm:mt-2">
                  <h2 className="font-medium cursor-pointer text-2xl max-sm:text-base ">
                    {job.title}
                  </h2>
                </div>
                <span className="max-sm:text-sm">{job.description}</span>
                <div className="flex gap-5 max-lg:gap-3 py-1 max-sm:p-0  max-sm: flex-wrap">
                  {job.tags.map((tag) => (
                    <span key={tag} className="bg-white rounded-xl p-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="max-sm:text-xs absolute top-[2%] right-[2%]">
                {job.department}
              </span>
              <button
                className="border p-2 border-black"
                onClick={() => deleteJob(job.id)}
              >
                Delete Job
              </button>
            </summary>
            <div className="w-full px-3 pb-10 grid-cols-[1fr_1fr_1fr_100px] max-lg:grid-cols-1 max-lg:grid-rows-[auto] max-lg:justify-items-center gap-10 grid">
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start  w-full ">
                  Task
                </h2>
                <ol className="w-full list-disc pl-5 font-light tracking-wide  flex flex-col gap-2  max-md:w-full">
                  {job.tasks.map((task, i: number) => (
                    <li key={i}>{task}</li>
                  ))}
                </ol>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start  w-full">
                  Terms
                </h2>
                <ol className="w-full list-disc pl-5 font-light tracking-wide  flex flex-col gap-2  max-md:w-full">
                  {job.terms.map((term, i: number) => (
                    <li key={i}>{term}</li>
                  ))}
                </ol>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start w-full ">
                  Expectations
                </h2>
                <ol className="w-full list-disc pl-5 font-light tracking-wide  flex flex-col gap-2  max-md:w-full">
                  {job.expectations.map((expectation, i: number) => (
                    <li key={i}>{expectation}</li>
                  ))}
                </ol>
              </div>
            </div>
          </details>
        ))}
      </div>
      {open && <Modal closeHandler={() => setOpen(false)} />}
    </div>
  );
}

export const Modal = ({ closeHandler }: { closeHandler: () => void }) => {
  return (
    <div className="w-screen h-screen fixed left-0 top-0  bg-white/10  flex justify-center items-center">
      <div className="w-1/2  relative bg-white  h-[80%] shadow-md border flex flex-col gap-2 overflow-y-scroll">
        <div className="w-full flex items-center justify-end p-2">
          <button
            onClick={closeHandler}
            className="px-2 py-1 border   border-blue-600 rounded-md "
          >
            Close
          </button>
        </div>
        <div className="w-full h-full ">
          <JobForm />
        </div>
      </div>
    </div>
  );
};
