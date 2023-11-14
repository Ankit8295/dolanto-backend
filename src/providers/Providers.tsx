"use client";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryProvider } from "./QueryProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryProvider>
  );
}
