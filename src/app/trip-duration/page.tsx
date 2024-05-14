"use client";

import { DateRange, DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [location, setLocation] = useState<string>("");
  const [range, setRange] = useState<DateRange>();

  return (
    <div className="flex items-center justify-center flex-col h-full w-full p-4 lg:p-8">
      <div className="text-2xl lg:text-4xl font-semibold">
        Where are you from?
      </div>

      <div className="mt-4 relative max-w-lg w-full">
        <Input
          id="location"
          name="location"
          placeholder="Ho Chi Minh City, Vietnam"
          className="py-6"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="mt-4 md:mt-8 text-2xl lg:text-4xl font-semibold">
        When are you going?
      </div>

      <DateRangePicker
        className="mt-4 w-full max-w-lg"
        initialDateFrom={undefined}
        initialDateTo={undefined}
        onUpdate={(v) => setRange(v.range || v.rangeCompare)}
        showCompare={false}
        disabled={!location}
      />

      <Button
        className="mt-4 w-full max-w-lg"
        onClick={() => router.push("/trip-travellers")}
        disabled={!location || !range?.from || !range?.to}
      >
        Continue
      </Button>
    </div>
  );
}
