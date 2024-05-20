"use client";

import { Separator } from "@/components/ui/separator";
import { CircleXIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();

  const msg = searchParams.get("message");

  return (
    <div className="w-full h-full p-2 md:4 lg:p-8 flex items-center justify-center">
      <div className="max-w-lg bg-white dark:bg-black shadow rounded-lg border p-2 md:4 lg:p-8 w-full">
        <div className="text-lg font-semibold flex gap-2 uppercase items-center">
          <CircleXIcon className="w-5 h-5 text-red-500" />
          Error
        </div>
        <Separator className="my-2" />
        <div className="line-clamp-3">{msg || "Something went wrong"}</div>
      </div>
    </div>
  );
}
