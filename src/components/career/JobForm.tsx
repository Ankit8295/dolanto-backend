"use client";
import { createNewJob } from "@/lib/serveractions";
import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

export type JobType = {
  id: string;
  title: string;
  description: string;
  department: string;
  tags: string[];
  tasks: string[];
  terms: string[];
  expectations: string[];
};

export default function JobForm() {
  const { register, control, handleSubmit } = useForm<JobType>();
  const {
    fields: tagsField,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray<any>({
    name: "tags",
    control,
    rules: { minLength: 1, required: true },
  });
  const {
    fields: tasksFields,
    append: appendTask,
    remove: removeTask,
  } = useFieldArray<any>({
    name: "tasks",
    control,
    rules: { minLength: 1, required: true },
  });
  const {
    fields: termsFields,
    append: appendTerms,
    remove: removeTerms,
  } = useFieldArray<any>({
    name: "terms",
    control,
    rules: { minLength: 1, required: true },
  });
  const {
    fields: expectationsFields,
    append: appendExpectation,
    remove: removeExpectation,
  } = useFieldArray<any>({
    name: "expectations",
    control,
    rules: { minLength: 1, required: true },
  });
  const submitForm: SubmitHandler<JobType> = (data) => {
    // const jobFormData = new FormData();
    // jobFormData.set("title", data.title);
    // jobFormData.set("description", data.description);
    // jobFormData.set("department", data.department);
    // jobFormData.set("tags", JSON.stringify(data.tags));
    // jobFormData.set("tasks", JSON.stringify(data.tasks));
    // jobFormData.set("terms", JSON.stringify(data.terms));
    // jobFormData.set("expectations", JSON.stringify(data.expectations));
    createNewJob(data).then((data) => console.log(JSON.parse(data)));
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full px-5 flex flex-col gap-3 h-full "
    >
      <input
        className="border border-black p-1"
        type="text"
        {...register("title")}
        placeholder="Job Title"
      />
      <input
        className="border border-black p-1"
        type="text"
        {...register("description")}
        placeholder="Description"
      />
      <input
        className="border border-black p-1"
        type="text"
        {...register("department")}
        placeholder="Department"
      />
      <button onClick={() => appendTag("")}>Add more tags</button>
      {tagsField.map((field, index) => (
        <input
          key={field.id}
          className="border border-black p-1"
          type="text"
          {...register(`tags.${index}`)}
        />
      ))}
      <button onClick={() => appendTask("")}>Add more Tasks</button>
      {tasksFields.map((field, index) => (
        <input
          key={field.id}
          className="border border-black p-1"
          type="text"
          {...register(`tasks.${index}`)}
        />
      ))}
      <button onClick={() => appendTerms("")}>Add more terms</button>
      {termsFields.map((field, index) => (
        <input
          key={field.id}
          className="border border-black p-1"
          type="text"
          {...register(`terms.${index}`)}
        />
      ))}
      <button onClick={() => appendExpectation("")}>
        Add more Expectations
      </button>
      {expectationsFields.map((field, index) => (
        <input
          key={field.id}
          className="border border-black p-1"
          type="text"
          {...register(`expectations.${index}`)}
        />
      ))}

      <button type="submit" className="border p-2 my-5 border-black">
        Save
      </button>
    </form>
  );
}
