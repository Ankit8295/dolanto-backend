"use client";
import { createData, getData } from "@/lib/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { FormEvent, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CardSchema,
  cardSchema,
} from "@/components/forms/schema/HomePageSchema";
import FormInput from "@/components/forms/compnents/formInput";

export default function Page() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { mutate } = useMutation({ mutationFn: createData });
  const { data } = useQuery({
    queryKey: ["homepageData"],
    queryFn: () => getData(),
    refetchOnMount: true,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CardSchema>({
    resolver: zodResolver(cardSchema),
  });

  const submitForm: SubmitHandler<CardSchema> = async (data) => {
    const finalData = {
      card_id: "A",
      cardData: data,
    };
    mutate(finalData);
  };

  return (
    <div className="w-1/3 border-r h-full flex items-center p-5 overflow-y-scroll     ">
      <form
        className="border border-[#001942]  w-full text-black flex flex-col gap-10 p-10 rounded-3xl "
        onSubmit={handleSubmit(submitForm)}
      >
        <FormInput
          type="text"
          register={register}
          registerValue={`title`}
          registerReq={true}
          placeholder="Title"
          // error={errors.password?.message}
        />
        <FormInput
          type="text"
          register={register}
          registerValue={`description`}
          registerReq={true}
          placeholder="Description"
          // error={errors.password?.message}
        />
        <FormInput
          type="text"
          register={register}
          registerValue={`image`}
          registerReq={true}
          placeholder="imagestr"
          // error={errors.password?.message}
        />
        {/* <input
          type="file"
          accept="image/*"
          {...register(`image`, {
            required: true,
          })}
        /> */}
        <button type="submit" className="text-white p-2 bg-[#001942]">
          Save
        </button>
      </form>
    </div>
  );
}
