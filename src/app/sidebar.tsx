import {
  Archive,
  ChevronDown,
  Ellipsis,
  Home,
  Info,
  PlusCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="border-r hidden h-full text-sm p-4 md:flex flex-col justify-between gap-2 w-[24rem] lg:w-[32rem]">
      <div className="grid gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:bg-brand-hover transition h-fit bg-brand rounded w-full px-4 py-2 font-semibold"
        >
          <PlusCircle className="h-4 w-4" />
          New plan
        </Link>

        <div className="font-bold text-lg mt-2">Your plans</div>

        <button className="flex items-center hover:border-brand dark:hover:border-foreground hover:text-brand-hover dark:hover:text-foreground text-foreground/70 font-semibold transition gap-2 justify-between border rounded px-4 py-1">
          <div className="flex items-center gap-2">
            <Archive className="h-4 w-4" />
            <div>History</div>
          </div>
          <ChevronDown className="h-4 w-4" />
        </button>

        <button className="grid gap-1 items-center hover:border-brand dark:hover:border-foreground hover:text-brand-hover dark:hover:text-foreground text-foreground/70 transition justify-between border rounded px-4 py-1">
          <div className="font-semibold line-clamp-1 text-start">
            Your trip to Ho Chi Minh City for 3 days
          </div>
          <div className="line-clamp-2 text-start">
            Ho Chi Minh City offers a vibrant and bustling atmosphere, perfect
            for solo travelers like yourself. Explore the city&apos;s rich
            history and culture, visit the famous landmarks, and indulge in the
            delicious local cuisine.
          </div>
        </button>

        <button className="grid gap-1 items-center hover:border-brand dark:hover:border-foreground hover:text-brand-hover dark:hover:text-foreground text-foreground/70 transition justify-between border rounded px-4 py-1">
          <div className="font-semibold line-clamp-1 text-start">
            Your trip to Phnom Penh for 7 days for a family
          </div>
          <div className="line-clamp-2 text-start">
            Phnom Penh, the capital city of Cambodia, is a fascinating
            destination for your 7-day family trip. Explore the city&apos;s rich
            history, visit the famous landmarks, and indulge in the delicious
            local cuisine.
          </div>
        </button>

        <button className="grid gap-1 items-center font-semibold hover:border-brand dark:hover:border-foreground hover:text-brand-hover dark:hover:text-foreground text-foreground/70 transition justify-between border rounded px-4 py-1">
          <div className="flex items-center gap-2">
            <Ellipsis className="h-4 w-4" />
            <div>View more</div>
          </div>
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-1 flex border border-brand/20 dark:border-border rounded just gap-1">
          <button className="flex items-center gap-2 border-2 border-transparent text-white hover:bg-brand-hover transition h-fit bg-brand rounded px-4 py-1 font-semibold">
            <Home className="h-4 w-4" />
            Main
          </button>
          <button className="flex items-center gap-2 text-brand dark:text-white transition h-fit border-2 border-transparent hover:text-white hover:bg-brand-hover rounded px-4 py-1 font-semibold">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="flex items-center gap-2 text-brand dark:text-white transition h-fit border-2 border-transparent hover:text-white hover:bg-brand-hover rounded px-4 py-1 font-semibold">
            <Info className="h-4 w-4" />
            Help
          </button>
        </div>
      </div>
    </div>
  );
}
