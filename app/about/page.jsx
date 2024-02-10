"use client";
import { usePathname } from "next/navigation";
import React from "react";

function page() {
  const path = usePathname();
  return (
    <div>
      <h1 className={path == "/about" ? "text-red-900" : "text-blue-500"}>
        {path}
      </h1>
    </div>
  );
}

export default page;
