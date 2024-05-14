"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Baby,
  BadgePercent,
  Bed,
  Check,
  ChefHat,
  Dumbbell,
  HeartHandshake,
  MapPin,
  Mic,
  ParkingCircle,
  PawPrint,
  Save,
  Send,
  SparklesIcon,
  Star,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import PlanningOption from "../trip-planning/option";
import Link from "next/link";

const presetPossibleOptions = [
  "Must-see attractions",
  "Great Food",
  "Hidden Gems",
  "Rooftop bars",
];

export default function Home({
  searchParams: { city },
}: {
  searchParams: {
    city?: string;
  };
}) {
  useEffect(() => {
    setLoading(true);
    const elements = document.querySelectorAll(".animate-slide-in");

    // remove "animate-slide-in" classes, then re-add later to trigger animation
    elements.forEach((el) => {
      el.classList.remove("animate-slide-in");
      el.classList.add("opacity-0");
    });

    // scroll to top using "trip-details-page" id as the target
    document.getElementById("trip-details-page")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      elements.forEach((el) => el.classList.add("animate-slide-in"));

      setOptions("");
      setLoading(false);
    }, 300);
  }, [city]);

  const [options, setOptions] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [saved, setSaved] = useState<boolean>(false);

  return (
    <div
      id="trip-details-page"
      className="relative grid items-center justify-center overflow-auto h-full w-full"
    >
      <div className="p-4 lg:p-8">
        <div className="mb-8 flex gap-2 justify-end">
          <Link href="/">
            <Button variant="ghost">New itinerary</Button>
          </Link>
          <Button
            onClick={() => setSaved(true)}
            variant="brand"
            className="gap-2"
            disabled={saved}
          >
            {saved ? (
              <Check className="w-4 h-4 inline-block" />
            ) : (
              <Save className="w-4 h-4 inline-block" />
            )}
            {saved ? "Saved" : "Save itinerary"}
          </Button>
        </div>

        <div className="text-lg animate-slide-in opacity-0 [--slide-in-delay:150ms] md:text-2xl lg:text-4xl font-semibold">
          Your trip to Ho Chi Minh City for 3 days
        </div>

        <div className="max-w-4xl mt-4 relative animate-slide-in opacity-0 [--slide-in-delay:450ms]">
          <div className="absolute -left-10 rounded-full dark:bg-yellow-300/10 dark:text-yellow-300 border dark:border-yellow-300/20 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 w-8 h-8 flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 inline-block" />
          </div>
          <div className="opacity-80">
            Ho Chi Minh City, Vietnam is a vibrant and bustling destination that
            offers a mix of must-see attractions and hidden gems. With its rich
            history, bustling markets, and delicious street food, there is
            something to explore around every corner. The city&apos;s warm
            weather in May provides the perfect opportunity to immerse yourself
            in its vibrant streets, where you can visit iconic landmarks,
            discover hidden temples, and stroll along bustling streets.
          </div>
        </div>

        <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:750ms]">
          Available Flights
        </div>

        <div className="mt-4 md:mt-8 rounded-lg border p-4 w-full max-w-4xl animate-slide-in opacity-0 [--slide-in-delay:1050ms]">
          <div className="border-b flex gap-2 justify-between pb-2 mb-2">
            <div>
              <div>Departure</div>
              <div className="font-semibold">London, UK</div>
            </div>

            <div>
              <div>Arrival</div>
              <div className="font-semibold">Ho Chi Minh, Vietnam</div>
            </div>

            <div>
              <div>Date</div>
              <div className="font-semibold">May 10, 2024</div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex gap-2 justify-between">
              <div className="w-64">
                <div className="font-semibold">
                  8:30 PM - 7:30 AM (Next day)
                </div>
                <div className="text-sm">United Airlines</div>
              </div>

              <div>
                <div className="font-semibold">10h45m</div>
                <div>SFO - FCO</div>
              </div>

              <div className="text-right">
                <div className="font-semibold">$531</div>
                <div className="text-sm">One-way</div>
              </div>
            </div>

            <div className="flex gap-2 justify-between">
              <div className="w-64">
                <div className="font-semibold">2:40 AM - 1:30 PM</div>
                <div className="text-sm">Scandinavian Airlines</div>
              </div>

              <div>
                <div className="font-semibold">10h50m</div>
                <div>SFO - FCO</div>
              </div>

              <div className="text-right">
                <div className="font-semibold">$564</div>
                <div className="text-sm">One-way</div>
              </div>
            </div>

            <div className="flex gap-2 justify-between">
              <div className="w-64">
                <div className="font-semibold">
                  3:00 PM - 1:30 AM (Next day)
                </div>
                <div className="text-sm">Delta Air Lines</div>
              </div>

              <div>
                <div className="font-semibold">10h30m</div>
                <div>SFO - FCO</div>
              </div>

              <div className="text-right">
                <div className="font-semibold">$611</div>
                <div className="text-sm">One-way</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:1350ms]">
          Places to stay
        </div>

        <div className="mt-4 md:mt-8 grid lg:grid-cols-2 w-full max-w-4xl gap-4 animate-slide-in opacity-0 [--slide-in-delay:1650ms]">
          <div className="grid gap-2 border rounded-lg p-2">
            <div className="flex gap-2 border-b pb-2">
              <Image
                src="/lynnwood.png"
                width={140}
                height={140}
                alt="Lynnwood Boutique House"
                className="w-32 h-32 bg-cover rounded-lg"
              />
              <div>
                <div className="font-semibold">Lynnwood Boutique House</div>
                <div className="flex gap-1 items-center text-sm">
                  <Star className="w-3 h-3 inline-block" />
                  <Star className="w-3 h-3 inline-block" />
                  <Star className="w-3 h-3 inline-block" />
                  <Star className="w-3 h-3 inline-block" />
                  78 reviews
                </div>
                <div className="text-sm flex gap-1 items-center">
                  <MapPin className="w-3 h-3 inline-block" />
                  <div>5.4 miles from city center</div>
                </div>
                <div className="text-sm flex gap-1 items-center">
                  <Bed className="w-3 h-3 inline-block" />
                  <div>3-star hotel</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm flex gap-1 items-center">
                <Wifi className="w-4 h-4 inline-block" />
                <div>Free high-speed internet (WiFi)</div>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <ChefHat className="w-4 h-4 inline-block" />
                <div>Breakfast available</div>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <Baby className="w-4 h-4 inline-block" />
                <div>Babysitting</div>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <BadgePercent className="w-4 h-4 inline-block" />
                <div>Special offer</div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost">View details</Button>
              <Button>Book now</Button>
            </div>
          </div>

          <div className="grid gap-2 border rounded-lg p-2">
            <div className="flex gap-2 border-b pb-2">
              <Image
                src="/the-void.png"
                width={140}
                height={140}
                alt="Lynnwood Boutique House"
                className="w-32 h-32 bg-cover rounded-lg"
              />
              <div>
                <div className="font-semibold">Lynnwood Boutique House</div>
                <div className="flex gap-1 items-center text-sm">
                  <Star className="w-3 h-3 inline-block" />
                  <Star className="w-3 h-3 inline-block" />
                  <Star className="w-3 h-3 inline-block" />
                  <Star className="w-3 h-3 inline-block" />
                  78 reviews
                </div>
                <div className="text-sm flex gap-1 items-center">
                  <MapPin className="w-3 h-3 inline-block" />
                  <div>5.4 miles from city center</div>
                </div>
                <div className="text-sm flex gap-1 items-center">
                  <Bed className="w-3 h-3 inline-block" />
                  <div>3-star hotel</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm flex gap-1 items-center">
                <ParkingCircle className="w-4 h-4 inline-block" />
                <div>Paid private parking</div>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <Wifi className="w-4 h-4 inline-block" />
                <div>Free high-speed internet (WiFi)</div>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <Dumbbell className="w-4 h-4 inline-block" />
                <div>Fitness / Spa locker room</div>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <PawPrint className="w-4 h-4 inline-block" />
                <div>Pets-friendly</div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost">View details</Button>
              <Button>Book now</Button>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:1950ms]">
          Your preferences
        </div>

        <div className="mt-4 max-w-4xl grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 w-full animate-slide-in opacity-0 [--slide-in-delay:2250ms]">
          {presetPossibleOptions.map((label) => (
            <PlanningOption key={label} label={label} />
          ))}
        </div>

        <div className="mt-4 max-w-4xl grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 w-full animate-slide-in opacity-0 [--slide-in-delay:2550ms]">
          <div className="flex flex-col gap-2 p-4 rounded-lg border-2 transition xl:col-span-2 opacity-100">
            <HeartHandshake className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Partner</div>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-lg border-2 transition xl:col-span-2 opacity-100">
            <PawPrint className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Pets</div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 w-full p-2 bg-background/50 backdrop-blur-lg flex-none animate-slide-in opacity-0 [--slide-in-delay:2850ms]">
        <div className="relative">
          <Input
            id="planning-options"
            name="planning-options"
            placeholder="Add more shopping, dining, or sightseeing options."
            className="py-6 bg-background/70 backdrop-blur-lg border rounded-lg w-full"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            onKeyDown={(e) => {
              if (!options || loading) return;
              if (e.key === "Enter") {
                setLoading(true);
                const elements = document.querySelectorAll(".animate-slide-in");

                setTimeout(() => {
                  // remove "animate-slide-in" classes, then re-add later to trigger animation
                  elements.forEach((el) => {
                    el.classList.remove("animate-slide-in");
                    el.classList.add("opacity-0");
                  });

                  // scroll to top using "trip-details-page" id as the target
                  document.getElementById("trip-details-page")?.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });

                  setTimeout(() => {
                    elements.forEach((el) =>
                      el.classList.add("animate-slide-in")
                    );

                    setOptions("");
                    setLoading(false);
                  }, 1000);
                }, 1000);
              }
            }}
          />
          <div className="absolute right-1 flex top-[0.3rem] gap-1">
            <Button size="icon" variant="ghost" className="p-1">
              <Mic size={20} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={() => {
                setLoading(true);
                const elements = document.querySelectorAll(".animate-slide-in");

                setTimeout(() => {
                  // remove "animate-slide-in" classes, then re-add later to trigger animation
                  elements.forEach((el) => {
                    el.classList.remove("animate-slide-in");
                    el.classList.add("opacity-0");
                  });

                  // scroll to top using "trip-details-page" id as the target
                  document.getElementById("trip-details-page")?.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });

                  setTimeout(() => {
                    elements.forEach((el) =>
                      el.classList.add("animate-slide-in")
                    );

                    setOptions("");
                    setLoading(false);
                  }, 1000);
                }, 1000);
              }}
              disabled={!options}
            >
              {loading ? (
                <div className="animate-spin h-5 w-5 border-t-2 border-foreground rounded-full" />
              ) : (
                <Send size={20} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
