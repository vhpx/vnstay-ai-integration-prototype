"use client";

import {
  Archive,
  ChevronUp,
  Ellipsis,
  Home,
  Info,
  PlusCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="border-r hidden h-[calc(100vh-68px)] bg-white dark:bg-black text-sm p-4 md:flex flex-col justify-between gap-2 w-[24rem] lg:w-[32rem]">
      <div className="grid gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-white md:hover:bg-brand-hover transition h-fit bg-brand rounded w-full px-4 py-2 font-semibold"
        >
          <PlusCircle className="h-4 w-4" />
          New plan
        </Link>

        <div className="font-bold text-lg mt-2">Your plans</div>

        <button
          onClick={() => setCollapsed((c) => !c)}
          className="flex items-center md:hover:border-brand dark:hover:border-foreground md:hover:text-brand-hover dark:hover:text-foreground text-foreground/70 font-semibold transition gap-2 justify-between border rounded px-4 py-1"
        >
          <div className="flex items-center gap-2">
            <Archive className="h-4 w-4" />
            <div>History</div>
          </div>
          <ChevronUp
            className={`h-4 w-4 ${
              collapsed ? "transform rotate-180" : ""
            } transition`}
          />
        </button>

        <div
          className={`grid gap-2 ${
            collapsed
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          } transition duration-300`}
        >
          <Link
            href="/trip-details?city=hcmc"
            className="grid gap-1 items-center md:hover:border-brand dark:hover:border-foreground md:hover:text-brand-hover dark:hover:text-foreground text-foreground/70 transition justify-between border rounded px-4 py-1"
          >
            <div className="font-semibold line-clamp-1 text-start">
              Your trip to Ho Chi Minh City for 3 days
            </div>
            <div className="line-clamp-2 text-start opacity-90">
              Ho Chi Minh City offers a vibrant and bustling atmosphere, perfect
              for solo travelers like yourself. Explore the city&apos;s rich
              history and culture, visit the famous landmarks, and indulge in
              the delicious local cuisine.
            </div>
          </Link>

          <Link
            href="/trip-details?city=phnom_penh"
            className="grid gap-1 items-center md:hover:border-brand dark:hover:border-foreground md:hover:text-brand-hover dark:hover:text-foreground text-foreground/70 transition justify-between border rounded px-4 py-1"
          >
            <div className="font-semibold line-clamp-1 text-start">
              Your trip to Phnom Penh for 7 days for a family
            </div>
            <div className="line-clamp-2 text-start opacity-90">
              Phnom Penh, the capital city of Cambodia, is a fascinating
              destination for your 7-day family trip. Explore the city&apos;s
              rich history, visit the famous landmarks, and indulge in the
              delicious local cuisine.
            </div>
          </Link>

          <button className="grid gap-1 items-center font-semibold md:hover:border-brand dark:hover:border-foreground md:hover:text-brand-hover dark:hover:text-foreground text-foreground/70 transition justify-between border rounded px-4 py-1">
            <div className="flex items-center gap-2">
              <Ellipsis className="h-4 w-4" />
              <div>View more</div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-1 flex border border-brand/20 dark:border-border rounded just gap-1">
          <Link
            href="/"
            className={`flex items-center gap-2 border-2 border-transparent transition h-fit rounded px-4 py-1 font-semibold ${
              pathname !== "/settings"
                ? "text-white bg-brand md:hover:bg-brand-hover"
                : "md:hover:bg-brand-hover md:hover:text-white text-brand dark:text-white"
            }`}
          >
            <Home className="h-4 w-4" />
            Trips
          </Link>
          <Link
            href="/settings"
            className={`flex items-center gap-2 border-2 border-transparent transition h-fit rounded px-4 py-1 font-semibold ${
              pathname === "/settings"
                ? "text-white bg-brand md:hover:bg-brand-hover"
                : "md:hover:bg-brand-hover md:hover:text-white text-brand dark:text-white"
            }`}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            href="https://www.vietnamstay.com/about-vietnamstay"
            className="flex items-center gap-2 text-brand dark:text-white transition h-fit border-2 border-transparent md:hover:text-white md:hover:bg-brand-hover rounded px-4 py-1 font-semibold"
            target="_blank"
          >
            <Info className="h-4 w-4" />
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}
