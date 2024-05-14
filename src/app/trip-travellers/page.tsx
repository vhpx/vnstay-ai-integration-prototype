"use client";

import { DateRange } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import {
  Baby,
  FlameKindling,
  HeartHandshake,
  PawPrint,
  Sparkles,
  UserCircle,
  UsersRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContinueButton from "../continue-button";

export default function Home() {
  const router = useRouter();

  const [travellers, setTravellers] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string[]>([]);

  return (
    <div className="flex items-center justify-center flex-col h-full w-full p-4 lg:p-8">
      <div className="text-lg md:text-2xl lg:text-4xl font-semibold">
        Who&apos;s coming with you?
      </div>

      <div className="mt-4 max-w-4xl grid md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        <button
          onClick={() =>
            travellers === "Solo" ? setTravellers("") : setTravellers("Solo")
          }
          className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
            travellers === "Solo"
              ? "border-foreground opacity-100"
              : "opacity-50 hover:opacity-100"
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
              : "opacity-50 hover:opacity-100"
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
              : "opacity-50 hover:opacity-100"
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
              : "opacity-50 hover:opacity-100"
          }`}
        >
          <FlameKindling className="w-8 h-8 inline-block" />
          <div className="font-semibold text-2xl">Friends</div>
        </button>
      </div>

      <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold">
        Any special requests?
      </div>

      <div className="mt-4 max-w-4xl grid md:grid-cols-3 gap-2 w-full">
        <button
          onClick={() =>
            specialRequests.includes("Pets")
              ? setSpecialRequests((rqs) => rqs.filter((rq) => rq !== "Pets"))
              : setSpecialRequests((rqs) => [...rqs, "Pets"])
          }
          className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
            specialRequests.includes("Pets")
              ? "border-foreground opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          <PawPrint className="w-8 h-8 inline-block" />
          <div className="font-semibold text-2xl">Pets</div>
        </button>

        <button
          onClick={() =>
            specialRequests.includes("Children")
              ? setSpecialRequests((rqs) =>
                  rqs.filter((rq) => rq !== "Children")
                )
              : setSpecialRequests((rqs) => [...rqs, "Children"])
          }
          className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
            specialRequests.includes("Children")
              ? "border-foreground opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          <Baby className="w-8 h-8 inline-block" />
          <div className="font-semibold text-2xl">Children</div>
        </button>

        <button
          onClick={() =>
            specialRequests.includes("Elderly")
              ? setSpecialRequests((rqs) =>
                  rqs.filter((rq) => rq !== "Elderly")
                )
              : setSpecialRequests((rqs) => [...rqs, "Elderly"])
          }
          className={`flex flex-col gap-2 p-4 rounded-lg border-2 transition ${
            specialRequests.includes("Elderly")
              ? "border-foreground opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          <Sparkles className="w-8 h-8 inline-block" />
          <div className="font-semibold text-2xl">Elderly</div>
        </button>
      </div>

      <ContinueButton href="/trip-planning" disabled={!travellers} />
    </div>
  );
}
