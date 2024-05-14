"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");
  const router = useRouter();

  return (
    <>
      <Input
        placeholder="Search by city or town"
        className="py-6 pr-24"
        type="text"
        name="city"
        id="city"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (!text) return;
          if (e.key === "Enter") {
            router.push("/trip-duration");
          }
        }}
      />
      <div className="absolute right-2 flex top-[0.3rem] gap-1">
        <Button size="icon" variant="ghost" className="p-1">
          <Mic size={20} />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={() => {
            router.push("/trip-duration");
          }}
          disabled={!text}
        >
          <Send size={20} />
        </Button>
      </div>
    </>
  );
}
