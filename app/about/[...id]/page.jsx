"use client";
import { usePathname } from "next/navigation";
import React from "react";

function page( {params} ) {
  const path = usePathname();
  return (
    <div>
      <h1>
        [path] : {path}
      </h1>
      <h1>
        [params] : {params.id}
      </h1>
    </div>
  );
}

export default page;