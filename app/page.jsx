"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul className="flex justify-center items-center gap-x-10 text-5xl text-red-400 ">
        <li>
          <Link href="/about"> About</Link>
        </li>
        <li>
          <Link href="/about/12"> About/12</Link>
        </li>
        <li>
          <Link href="/test"> Test</Link>
        </li>
      </ul>
    </div>
  );
}
