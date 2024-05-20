"use client";

import {
  Baby,
  Check,
  FlameKindling,
  HeartHandshake,
  PawPrint,
  Sparkles,
  UserCircle,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import ContinueButton from "../continue-button";

export default function Home() {
  const [travellers, setTravellers] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string[]>([]);

  return (
    <div className="grid">
      <div className="flex flex-col items-center justify-center h-full w-full p-4 lg:p-8">
        <div className="text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:0ms]">
          Who&apos;s coming with you?
        </div>

        <div className="mt-4 max-w-4xl grid md:grid-cols-2 lg:grid-cols-4 gap-2 w-full animate-slide-in opacity-0 [--slide-in-delay:300ms]">
          <button
            onClick={() =>
              travellers === "Solo" ? setTravellers("") : setTravellers("Solo")
            }
            className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
              travellers === "Solo"
                ? "border-foreground opacity-100"
                : "opacity-50 md:hover:opacity-100"
            }`}
          >
            <UserCircle className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Solo</div>
          </button>

          <button
            onClick={() =>
              travellers === "Partner"
                ? setTravellers("")
                : setTravellers("Partner")
            }
            className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
              travellers === "Partner"
                ? "border-foreground opacity-100"
                : "opacity-50 md:hover:opacity-100"
            }`}
          >
            <HeartHandshake className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Partner</div>
          </button>

          <button
            onClick={() =>
              travellers === "Family"
                ? setTravellers("")
                : setTravellers("Family")
            }
            className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
              travellers === "Family"
                ? "border-foreground opacity-100"
                : "opacity-50 md:hover:opacity-100"
            }`}
          >
            <UsersRound className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Family</div>
          </button>

          <button
            onClick={() =>
              travellers === "Friends"
                ? setTravellers("")
                : setTravellers("Friends")
            }
            className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
              travellers === "Friends"
                ? "border-foreground opacity-100"
                : "opacity-50 md:hover:opacity-100"
            }`}
          >
            <FlameKindling className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Friends</div>
          </button>
        </div>

        <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:600ms]">
          Any special requests?
        </div>

        <div className="mt-4 max-w-4xl grid md:grid-cols-3 gap-2 w-full animate-slide-in opacity-0 [--slide-in-delay:900ms]">
          <button
            onClick={() =>
              specialRequests.includes("Pets")
                ? setSpecialRequests((rqs) => rqs.filter((rq) => rq !== "Pets"))
                : setSpecialRequests((rqs) => [...rqs, "Pets"])
            }
            className={`flex items-center justify-between gap-2 p-4 rounded-lg border-2 transition ${
              specialRequests.includes("Pets")
                ? "opacity-100"
                : "opacity-50 md:hover:opacity-100"
            }`}
          >
            <div className="flex gap-2 items-center">
              <PawPrint className="w-6 h-6 inline-block" />
              <div className="font-semibold text-lg">Pets</div>
            </div>
            <div
              className={`w-5 h-5 border-2 flex items-center justify-center rounded border-foreground ${
                specialRequests.includes("Pets")
                  ? "bg-foreground text-background"
                  : "opacity-50"
              } transition`}
            >
              {specialRequests.includes("Pets") ? (
                <Check className="w-5 h-5 inline-block" />
              ) : null}
            </div>
          </button>

          <button
            onClick={() =>
              specialRequests.includes("Children")
                ? setSpecialRequests((rqs) =>
                    rqs.filter((rq) => rq !== "Children")
                  )
                : setSpecialRequests((rqs) => [...rqs, "Children"])
            }
            className={`flex items-center justify-between gap-2 p-4 rounded-lg border-2 transition ${
              specialRequests.includes("Children")
                ? "opacity-100"
                : "opacity-50 md:hover:opacity-100"
            }`}
          >
            <div className="flex gap-2 items-center">
              <Baby className="w-6 h-6 inline-block" />
              <div className="font-semibold text-lg">Children</div>
            </div>
            <div
              className={`w-5 h-5 border-2 flex items-center justify-center rounded border-foreground ${
                specialRequests.includes("Children")
                  ? "bg-foreground text-background"
                  : "opacity-50"
              } transition`}
            >
              {specialRequests.includes("Children") ? (
                <Check className="w-5 h-5 inline-block" />
              ) : null}
            </div>
          </button>

          <button
            onClick={() =>
              specialRequests.includes("Elderly")
                ? setSpecialRequests((rqs) =>
                    rqs.filter((rq) => rq !== "Elderly")
                  )
                : setSpecialRequests((rqs) => [...rqs, "Elderly"])
            }
            className={`flex items-center justify-between gap-2 p-4 rounded-lg border-2 transition ${
              specialRequests.includes("Elderly")
                ? "opacity-100"
                : "opacity-50 md:hover:opacity-100"
            }`}
          >
            <div className="flex gap-2 items-center">
              <Sparkles className="w-6 h-6 inline-block" />
              <div className="font-semibold text-lg">Elderly</div>
            </div>
            <div
              className={`w-5 h-5 border-2 flex items-center justify-center rounded border-foreground ${
                specialRequests.includes("Elderly")
                  ? "bg-foreground text-background"
                  : "opacity-50"
              } transition`}
            >
              {specialRequests.includes("Elderly") ? (
                <Check className="w-5 h-5 inline-block" />
              ) : null}
            </div>
          </button>
        </div>

        <div className="animate-slide-in opacity-0 [--slide-in-delay:1200ms] w-full max-w-4xl">
          <ContinueButton
            href="/trip-planning"
            className="max-w-4xl"
            disabled={!travellers}
          />
        </div>
      </div>
    </div>
  );
}
