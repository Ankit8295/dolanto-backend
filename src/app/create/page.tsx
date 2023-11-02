"use client";
import { createData } from "@/lib/query";
import { useMutation } from "@tanstack/react-query";
import { func } from "prop-types";
import React, { useRef } from "react";

export default function Page() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const { mutate, data } = useMutation({ mutationFn: createData });
  function submitForm() {
    const data = {
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      image: imageRef?.current?.value,
    };
    mutate(data);
  }
  return (
    <div className="w-full ">
      <form className=" text-black flex flex-col gap-2" onSubmit={submitForm}>
        <input ref={nameRef} type="text" placeholder="name" />
        <input ref={emailRef} type="text" placeholder="email" />
        <input ref={imageRef} type="text" placeholder="image" />
        <button type="submit" className="bg-white text-black p-2">
          Save
        </button>
      </form>
    </div>
  );
}
