"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import PlanningOption from "./option";
import ContinueButton from "../continue-button";

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
  const [presetOptions, setPresetOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<string>("");

  return (
    <div className="flex items-center justify-center flex-col h-full w-full p-4 lg:p-8">
      <div className="text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:0ms]">
        How do you want to spend your time?
      </div>

      <div className="mt-4 max-w-4xl grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 w-full animate-slide-in opacity-0 [--slide-in-delay:300ms]">
        {presetPossibleOptions.map((label) => (
          <PlanningOption
            key={label}
            label={label}
            presetOptions={presetOptions}
            setPresetOptions={setPresetOptions}
          />
        ))}
      </div>

      <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:600ms]">
        Other options
      </div>

      <div className="mt-4 relative max-w-4xl w-full animate-slide-in opacity-0 [--slide-in-delay:900ms]">
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

      <div className="max-w-4xl w-full animate-slide-in opacity-0 [--slide-in-delay:1200ms]">
        <ContinueButton
          href="/trip-details"
          delay={2000}
          label="Generate plan"
          loadingLabel="Generating..."
          className="max-w-4xl"
          disabled={!presetOptions.length}
        />
      </div>
    </div>
  );
}
