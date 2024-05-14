"use client";

import { DateRange, DateRangePicker } from "@/components/date-range-picker";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ContinueButton from "../continue-button";

export default function Home() {
  const [location, setLocation] = useState<string>("");
  const [range, setRange] = useState<DateRange>();

  return (
    <div className="flex items-center justify-center flex-col h-full w-full p-4 lg:p-8">
      <div className="text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:0ms]">
        Where are you from?
      </div>

      <div className="mt-4 relative max-w-lg w-full animate-slide-in opacity-0 [--slide-in-delay:300ms]">
        <Input
          id="location"
          name="location"
          placeholder="Ho Chi Minh City, Vietnam"
          className="py-6"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:600ms]">
        When are you going?
      </div>

      <div className="mt-4 w-full max-w-lg flex items-center justify-center animate-slide-in opacity-0 [--slide-in-delay:900ms]">
        <DateRangePicker
          className="w-full"
          initialDateFrom={undefined}
          initialDateTo={undefined}
          onUpdate={(v) => setRange(v.range || v.rangeCompare)}
          showCompare={false}
          disabled={!location}
        />
      </div>

      <div className="animate-slide-in opacity-0 [--slide-in-delay:1200ms] w-full max-w-lg">
        <ContinueButton
          href="/trip-travellers"
          disabled={!location || !range?.from || !range?.to}
        />
      </div>
    </div>
  );
}
