"use client";
import { createData } from "@/lib/query";
import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HomePageFormSchema,
  homePageFormSchema,
} from "@/components/forms/schema/HomePageSchema";
import FormInput from "@/components/forms/compnents/formInput";

export default function Page() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { mutate } = useMutation({ mutationFn: createData });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HomePageFormSchema>({
    resolver: zodResolver(homePageFormSchema),
  });

  const submitForm: SubmitHandler<HomePageFormSchema> = async (data) => {
    console.log(data);
    // mutate(data);
  };

  return (
    <div className="w-1/3 border-r h-full flex items-center p-5">
      <form
        className="border border-[#001942]  w-full text-black flex flex-col gap-10 p-10 rounded-3xl"
        onSubmit={handleSubmit(submitForm)}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <FormInput
              type="text"
              register={register}
              registerValue={`data.${index}.title`}
              registerReq={true}
              placeholder="Title"
              // error={errors.password?.message}
            />
            <FormInput
              type="text"
              register={register}
              registerValue={`data.${index}.description`}
              registerReq={true}
              placeholder="Description"
              // error={errors.password?.message}
            />
            <input
              type="file"
              accept="image/*"
              {...register(`data.${index}.image`, {
                required: true,
              })}
            />
          </div>
        ))}
        <button type="submit" className="text-white p-2 bg-[#001942]">
          Save
        </button>
      </form>
    </div>
  );
}
