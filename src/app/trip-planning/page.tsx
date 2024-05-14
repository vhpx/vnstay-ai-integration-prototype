"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PlanningOption from "./option";

const presetPossibleOptions = [
  "Must-see attractions",
  "Great Food",
  "Hidden Gems",
  "Historical landmarks",
  "Boutique shopping",
  "Rooftop bars",
  "Motorbike tours",
  "Cultural museums",
  "Wine & Beer",
  "Outdoors",
  "Culture",
  "Adventure & Sports",
];

export default function Home() {
  const router = useRouter();

  const [presetOptions, setPresetOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<string>("");

  return (
    <div className="flex items-center justify-center flex-col h-full w-full p-4 lg:p-8">
      <div className="text-lg md:text-2xl lg:text-4xl font-semibold">
        How do you want to spend your time?
      </div>

      <div className="mt-4 max-w-4xl grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 w-full">
        {presetPossibleOptions.map((label) => (
          <PlanningOption
            key={label}
            label={label}
            presetOptions={presetOptions}
            setPresetOptions={setPresetOptions}
          />
        ))}
      </div>

      <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold">
        Other options
      </div>

      <div className="mt-4 relative max-w-4xl w-full">
        <Input
          id="planning-options"
          name="planning-options"
          placeholder="Nightlife, Spas, Shopping, etc."
          className="py-6"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        />
        <div className="text-muted-foreground mt-1">
          Separate each entry with a comma.
        </div>
      </div>

      <Button
        className="mt-4 w-full max-w-4xl"
        onClick={() => router.push("/trip-planning")}
        disabled={!presetOptions.length}
      >
        Continue
      </Button>
    </div>
  );
}
