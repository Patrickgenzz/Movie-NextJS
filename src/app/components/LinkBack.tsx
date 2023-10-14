"use client";
import { useRouter } from "next/navigation";

const LinkBack = () => {
  const router = useRouter();
  return (
    <button className="mt-2 sm:mt-0 sm:ml-auto cursor-pointer underline hover:text-indigo-400" onClick={() => router.back()}>
      Previous Page
    </button>
  );
};

export default LinkBack;
