"use client";
import { createData } from "@/lib/query";
import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useRef } from "react";

export default function Page() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { mutate } = useMutation({ mutationFn: createData });
  function submitForm(e: FormEvent) {
    e.preventDefault();
    const data = {
      title: nameRef?.current?.value,
    };
    mutate(data);
  }
  return (
    <div className="w-1/3 bg-red-50 h-full flex items-center p-5">
      <form
        className="border border-[#001942]  w-full text-black flex flex-col gap-2 p-10 rounded-3xl"
        onSubmit={submitForm}
      >
        <input ref={nameRef} type="text" placeholder="title" />
        <button type="submit" className="text-white p-2 bg-[#001942]">
          Save
        </button>
      </form>
    </div>
  );
}
