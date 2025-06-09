"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen max-h-screen flex justify-center items-center flex-col">
      <h1 className="text-secondary text-[3em] m-0">404</h1>
      <h2 className="text-secondary text-[1em] m-0">Page not Found</h2>
      <Link href="/" className="cursor-pointer bg-transparent text-secondary border-2 border-secondary mt-[10px] text-[1em] p-[5px] transition-all duration-200 ease-in-out hover:bg-secondary hover:text-primary">
        Back to Home
      </Link>
    </div>
  );
}
