"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Armchair,
  Baby,
  BadgePercent,
  Bed,
  Check,
  ChefHat,
  Church,
  Clock,
  CreditCardIcon,
  Dumbbell,
  Eye,
  Flag,
  HeartHandshake,
  Hotel,
  Landmark,
  MapPin,
  Mic,
  ParkingCircle,
  PawPrint,
  Save,
  Send,
  SparklesIcon,
  Star,
  ThumbsDown,
  ThumbsUp,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import PlanningOption from "../trip-planning/option";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SeatPicker from "./seat-picker";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  const [paying, setPaying] = useState<boolean>(false);
  const [paid, setPaid] = useState<boolean>(false);

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [tripDetails, setTripDetails] = useState<{
    airline: string;
    departure: string;
    duration: string;
    price: string;
    route: string;
    img: string;
  } | null>(null);

  const [bookedAirline, setBookedAirline] = useState<string>("");
  const [bookedAccommodation, setBookedAccommodation] = useState<{
    name: string;
    img: string;
  } | null>(null);

  // when tripDetails is set, scroll to the seat picker
  useEffect(() => {
    if (tripDetails?.airline) {
      document.getElementById("seat-picker")?.scrollIntoView({
        behavior: "smooth",
      });
      setBookedAirline("");
      setSelectedSeats([]);
      setPaid(false);
      setPaying(false);
    }
  }, [tripDetails]);

  useEffect(() => {
    if (bookedAccommodation?.name) {
      setPaid(false);
      setPaying(false);
    }
  }, [bookedAccommodation]);

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
          <div className="hidden absolute -left-10 rounded-full dark:bg-yellow-300/10 dark:text-yellow-300 border dark:border-yellow-300/20 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 w-8 h-8 xl:flex items-center justify-center">
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

        <div className="mt-4 md:mt-8 rounded-lg border bg-white dark:bg-black w-full max-w-4xl animate-slide-in opacity-0 [--slide-in-delay:1050ms]">
          <div className="border-b p-4 flex flex-col lg:flex-row gap-2 justify-between pb-2 mb-2">
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
              <div className="font-semibold">May 25, 2024</div>
            </div>
          </div>

          <div className="grid gap-4">
            <button
              onClick={() =>
                setTripDetails({
                  airline: "United Airlines",
                  departure: "8:30 PM - 7:30 AM (Next day)",
                  duration: "10h45m",
                  price: "$531",
                  route: "SFO - FCO",
                  img: "/UA.png",
                })
              }
              className="flex text-left gap-2 dark:hover:bg-foreground/10 p-4 mt-2 mx-4 transition rounded-lg"
            >
              <Image
                src="/UA.png"
                width={45}
                height={45}
                alt="United Airlines"
                className="rounded-lg w-16 h-16"
              />
              <div className="flex flex-col lg:flex-row gap-2 justify-between w-full">
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

                <div className="lg:text-right">
                  <div className="font-semibold">$531</div>
                  <div className="text-sm">One-way</div>
                </div>
              </div>
            </button>

            <Separator />

            <button
              onClick={() =>
                setTripDetails({
                  airline: "Scandinavian Airlines",
                  departure: "2:40 AM - 1:30 PM",
                  duration: "10h50m",
                  price: "$564",
                  route: "SFO - FCO",
                  img: "/sas.png",
                })
              }
              className="flex text-left gap-2 dark:hover:bg-foreground/10 p-4 mx-4 transition rounded-lg"
            >
              <Image
                src="/sas.png"
                width={45}
                height={45}
                alt="Scandinavian Airlines"
                className="rounded-lg w-16 h-16"
              />
              <div className="flex flex-col lg:flex-row gap-2 justify-between w-full">
                <div className="w-64">
                  <div className="font-semibold">2:40 AM - 1:30 PM</div>
                  <div className="text-sm">Scandinavian Airlines</div>
                </div>

                <div>
                  <div className="font-semibold">10h50m</div>
                  <div>SFO - FCO</div>
                </div>

                <div className="lg:text-right">
                  <div className="font-semibold">$564</div>
                  <div className="text-sm">One-way</div>
                </div>
              </div>
            </button>

            <Separator />

            <button
              onClick={() =>
                setTripDetails({
                  airline: "Delta Air Lines",
                  departure: "3:00 PM - 1:30 AM (Next day)",
                  duration: "10h30m",
                  price: "$611",
                  route: "SFO - FCO",
                  img: "/delta.png",
                })
              }
              className="flex text-left gap-2 dark:hover:bg-foreground/10 p-4 mb-4 mx-4 transition rounded-lg"
            >
              <Image
                src="/delta.png"
                width={45}
                height={45}
                alt="Delta Air Lines"
                className="rounded-lg w-16 h-16"
              />
              <div className="flex flex-col lg:flex-row gap-2 justify-between w-full">
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

                <div className="lg:text-right">
                  <div className="font-semibold">$611</div>
                  <div className="text-sm">One-way</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div
          id="seat-picker"
          className={`scroll-mt-4 w-full overflow-clip ${
            tripDetails
              ? "my-4 md:my-8 h-fit animate-slide-in opacity-0 [--slide-in-delay:450ms]"
              : "h-0 opacity-0 mb-4 md:mb-8"
          } transition-all`}
        >
          <div
            className={`${
              tripDetails
                ? "animate-slide-in opacity-0 [--slide-in-delay:150ms]"
                : "opacity-0"
            }`}
          >
            Great! Here are the available seats for your flight. Please select a
            seat to continue.
          </div>

          <SeatPicker
            selectedTrip={tripDetails}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            bookedAirline={bookedAirline}
            onBook={(airline) => setBookedAirline(airline)}
          />
        </div>

        <div className="text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:1350ms]">
          Places to stay
        </div>

        <div className="mt-4 md:mt-8 grid lg:grid-cols-2 w-full max-w-4xl gap-4 animate-slide-in opacity-0 [--slide-in-delay:1650ms]">
          <div className="grid gap-2 border bg-white dark:bg-black rounded-lg p-2">
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
              <Button
                variant="brand"
                onClick={() =>
                  setBookedAccommodation({
                    name: "Lynnwood Boutique House",
                    img: "/lynnwood.png",
                  })
                }
                disabled={
                  bookedAccommodation?.name === "Lynnwood Boutique House"
                }
                className="gap-2"
              >
                {bookedAccommodation?.name === "Lynnwood Boutique House" && (
                  <Check />
                )}
                {bookedAccommodation?.name === "Lynnwood Boutique House"
                  ? "Booked"
                  : "Book now"}
              </Button>
            </div>
          </div>

          <div className="grid gap-2 border bg-white dark:bg-black rounded-lg p-2">
            <div className="flex gap-2 border-b pb-2">
              <Image
                src="/the-void.png"
                width={140}
                height={140}
                alt="The Void Homestay"
                className="w-32 h-32 bg-cover rounded-lg"
              />
              <div>
                <div className="font-semibold">The Void Homestay</div>
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
              <Button
                variant="brand"
                onClick={() =>
                  setBookedAccommodation({
                    name: "The Void Homestay",
                    img: "/the-void.png",
                  })
                }
                disabled={bookedAccommodation?.name === "The Void Homestay"}
                className="gap-2"
              >
                {bookedAccommodation?.name === "The Void Homestay" && <Check />}
                {bookedAccommodation?.name === "The Void Homestay"
                  ? "Booked"
                  : "Book now"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:1950ms]">
          Your preferences
        </div>

        <div className="mt-4 max-w-4xl grid md:grid-cols-2 2xl:grid-cols-4 gap-2 w-full animate-slide-in opacity-0 [--slide-in-delay:2250ms]">
          {presetPossibleOptions.map((label) => (
            <PlanningOption
              key={label}
              label={label}
              className="bg-white dark:bg-black"
            />
          ))}
        </div>

        <div className="mt-4 max-w-4xl grid md:grid-cols-2 2xl:grid-cols-4 gap-2 w-full animate-slide-in opacity-0 [--slide-in-delay:2550ms]">
          <div className="flex flex-col gap-2 p-4 rounded-lg border-2 bg-white dark:bg-black transition xl:col-span-2 opacity-100">
            <HeartHandshake className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Partner</div>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-lg border-2 bg-white dark:bg-black transition xl:col-span-2 opacity-100">
            <PawPrint className="w-8 h-8 inline-block" />
            <div className="font-semibold text-2xl">Pets</div>
          </div>
        </div>

        <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:2850ms]">
          Places to visit
        </div>

        <div className="w-full max-w-4xl md:h-96 rounded-lg bg-cover overflow-hidden animate-slide-in opacity-0 [--slide-in-delay:3150ms]">
          <Image
            src="/map-pinned.png"
            width={1576}
            height={696}
            alt="Ho Chi Minh City map"
            className="rounded-lg mt-4 w-full animate-slide-in opacity-0 [--slide-in-delay:1950ms]"
          />
        </div>

        <div className="mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:3450ms]">
          Your Journey
        </div>

        <div className="md:text-xl lg:text-2xl font-semibold mt-4 mb-2 animate-slide-in opacity-0 [--slide-in-delay:3750ms]">
          Day 1
        </div>
        <div className="max-w-4xl animate-slide-in opacity-0 [--slide-in-delay:4050ms]">
          Welcome to Ho Chi Minh City! On your first day, we have a fantastic
          itinerary planned for you based on your preferences for must-see
          attractions and hidden gems. Start your day by visiting the
          magnificent{" "}
          <span className="font-semibold underline">Giac Lam Pagoda</span>, a
          stunning attraction that showcases the rich cultural heritage of
          Vietnam. Afterward, head to{" "}
          <span className="font-semibold underline">A.dau Kitchen</span>, a
          hidden gem eatery known for its delicious local cuisine. Next, immerse
          yourself in the history of Vietnam at the{" "}
          <span className="font-semibold underline">
            Museum of Vietnamese History
          </span>
          , where you can explore fascinating exhibits and artifacts. Continue
          your cultural journey by visiting the{" "}
          <span className="font-semibold underline">Emperor Jade Pagoda</span>,
          a beautiful pagoda filled with intricate carvings and statues.
          Finally, end your day at the{" "}
          <span className="font-semibold underline">Secret Garden</span>, a
          hidden rooftop eatery offering a tranquil ambiance and delectable
          Vietnamese dishes. Enjoy your first day in Ho Chi Minh City!
        </div>

        <Accordion
          type="single"
          // defaultValue="item-1"
          className="w-full animate-slide-in opacity-0 [--slide-in-delay:4350ms]"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  1
                </div>
                <div className="flex gap-2 items-center">
                  <Church className="w-5 h-5 inline-block" />
                  Giac Lam Pagoda
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/giac-lam.png"
                width={647}
                height={201}
                alt="Giac Lam Pagoda"
                className="rounded-lg w-full"
              />
              <div className="mt-2 font-semibold text-lg md:text-2xl">
                Giac Lam Pagoda
              </div>
              <div className="flex gap-1 items-center text-sm">
                <Star className="w-3 h-3 inline-block" />
                <Star className="w-3 h-3 inline-block" />
                <Star className="w-3 h-3 inline-block" />
                <Star className="w-3 h-3 inline-block" />
                78 reviews
              </div>
              <div className="flex gap-4 flex-wrap max-w-4xl">
                <div className="text-sm flex gap-1 items-center">
                  <Church className="w-3 h-3 inline-block" />
                  <div>Religious Sites</div>
                </div>
                <div className="text-sm flex gap-1 items-center">
                  <Clock className="w-3 h-3 inline-block" />
                  <div>Duration: 1-2 hours</div>
                </div>
              </div>
              <div className="mt-4 mb-2 max-w-4xl line-clamp-2">
                Giac Lam Pagoda in Ho Chi Minh City is a captivating destination
                that is sure to pique your interest. As a solo traveler with a
                penchant for exploring must-see attractions and hidden gems,
                this pagoda offers a unique cultural experience. The pagoda is
                known for its stunning architecture, intricate carvings, and
                serene atmosphere.
              </div>
              <button className="font-semibold underline">Read more</button>

              <div className="flex gap-4 justify-between items-center mt-4">
                <div className="font-semibold">
                  Was this recommendation useful?
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="p-1">
                    <ThumbsUp size={20} />
                  </Button>
                  <Button size="icon" variant="ghost" className="p-1">
                    <ThumbsDown size={20} />
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  2
                </div>
                <div className="flex gap-2 items-center">
                  <UtensilsCrossed className="w-5 h-5 inline-block" />
                  A.dau Kitchen
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  3
                </div>
                <div className="flex gap-2 items-center">
                  <Landmark className="w-5 h-5 inline-block" />
                  Museum of Vietnamese History
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  4
                </div>
                <div className="flex gap-2 items-center">
                  <Church className="w-5 h-5 inline-block" />
                  Emperor Jade Pagoda
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  5
                </div>
                <div className="flex gap-2 items-center">
                  <UtensilsCrossed className="w-5 h-5 inline-block" />
                  Secret Garden
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="md:text-xl lg:text-2xl font-semibold mt-4 mb-2 animate-slide-in opacity-0 [--slide-in-delay:4650ms]">
          Day 2
        </div>
        <div className="max-w-4xl animate-slide-in opacity-0 [--slide-in-delay:4950ms]">
          On the second day of your trip to Ho Chi Minh City, start your day
          with a visit to the{" "}
          <span className="font-semibold underline">Saigon Skydeck</span>, a
          must-see attraction. Enjoy breathtaking views of the city from the
          observation deck. Afterward, head to{" "}
          <span className="font-semibold underline">
            The Simple Café Le Lai
          </span>{" "}
          for a delicious meal. This hidden gem offers a cozy atmosphere and a
          variety of tasty dishes. Next, explore the{" "}
          <span className="font-semibold underline">Central Post Office</span>,
          another must-see attraction known for its beautiful architecture. Take
          some time to admire the historic building and send a postcard home.
          For dinner, indulge in a seafood buffet at
          <span className="font-semibold underline">Saigon Café</span>. Feast on
          fresh and flavorful seafood dishes. Finally, end your day by visiting{" "}
          <span className="font-semibold underline">
            The Venerable Thich Quang Duc Monument
          </span>
          , a significant attraction that pays tribute to a Buddhist monk.
          Reflect on the monument&apos;s historical and cultural significance.
          Enjoy your second day exploring Ho Chi Minh City!
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full animate-slide-in opacity-0 [--slide-in-delay:5250ms]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  1
                </div>
                <div className="flex gap-2 items-center">
                  <Eye className="w-5 h-5 inline-block" />
                  Saigon Skydeck
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  2
                </div>
                <div className="flex gap-2 items-center">
                  <UtensilsCrossed className="w-5 h-5 inline-block" />
                  The Simple Café Le Lai
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  3
                </div>
                <div className="flex gap-2 items-center">
                  <Hotel className="w-5 h-5 inline-block" />
                  Central Post Office
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  4
                </div>
                <div className="flex gap-2 items-center">
                  <UtensilsCrossed className="w-5 h-5 inline-block" />
                  Saigon Café - Seafood Buffet Restaurant
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex items-center font-semibold gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand text-white font-semibold">
                  5
                </div>
                <div className="flex gap-2 items-center">
                  <Flag className="w-5 h-5 inline-block" />
                  The Venerable Thich Quang Duc Monument
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>

        {(tripDetails || bookedAccommodation) && (
          <div
            id="booking-summary"
            className="mt-4 border p-4 rounded-lg bg-white dark:bg-black"
          >
            {paid ? (
              <div className="flex flex-col items-center justify-center p-4">
                <div className="p-2 rounded-full bg-brand text-center flex items-center justify-center w-fit">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <div className="mt-4 text-brand dark:text-white text-2xl md:text-4xl font-semibold">
                  Payment successful
                </div>
                <div className="mt-1">
                  Thanks for your purchase! You will receive an email
                  confirmation shortly.
                </div>
              </div>
            ) : (
              <>
                <div className="flex gap-2 items-center justify-between mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/10">
                      <CreditCardIcon className="w-4 h-4 inline-block" />
                    </div>
                    <div>Visa · · · · 0512</div>
                  </div>
                  <div className="px-4 py-2 flex items-center gap-2 rounded-full border text-sm">
                    <Image
                      src="/google.png"
                      width={16}
                      height={16}
                      alt="Google"
                      className="rounded-lg"
                    />
                    <div>Pay</div>
                  </div>
                </div>

                <div className="md:text-xl lg:text-2xl font-semibold">
                  Booking summary
                </div>
                <Separator className="my-4" />
                <div className="grid gap-4">
                  {tripDetails && (
                    <div className="flex gap-4 items-center">
                      <Image
                        src={tripDetails.img}
                        width={45}
                        height={45}
                        alt={tripDetails.airline}
                        className="rounded-lg w-16 h-16"
                      />
                      <div className="w-full">
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-semibold">
                            {tripDetails.airline}
                          </div>
                          <div className="text-xs">
                            {selectedSeats.length} seat
                            {selectedSeats.length > 1 ? "s" : ""} x{" "}
                            {tripDetails.price}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm opacity-80">May 25, 2024</div>
                          <div className="ml-1 flex items-center gap-2">
                            <span className="text-lg md:text-2xl">
                              $
                              {selectedSeats.length *
                                parseInt(tripDetails.price.slice(1))}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {bookedAccommodation && (
                    <div className="flex gap-4 items-center">
                      <Image
                        src={bookedAccommodation.img}
                        width={45}
                        height={45}
                        alt={bookedAccommodation.name}
                        className="rounded-lg w-16 h-16"
                      />
                      <div className="w-full">
                        <div>
                          <span className="font-semibold">
                            {bookedAccommodation.name}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm opacity-80">
                              Deluxe Room
                            </div>
                            <div className="text-sm opacity-80">
                              May 25, 2024
                            </div>
                          </div>
                          <div className="ml-1 px-2 rounded text-lg md:text-2xl">
                            $600
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Separator className="my-4" />
                <div className="flex gap-2 justify-between items-center">
                  <div>
                    <div>Total</div>
                    <div className="text-xs">
                      Including{" "}
                      <span className="font-semibold">
                        $
                        {Math.round(
                          (selectedSeats.length *
                            parseInt(tripDetails?.price.slice(1) || "0") +
                            600) *
                            0.05
                        )}
                      </span>{" "}
                      in taxes
                    </div>
                  </div>
                  <div className="text-2xl md:text-4xl">
                    $
                    {selectedSeats.length *
                      parseInt(tripDetails?.price.slice(1) || "0") +
                      600 +
                      Math.round(
                        (selectedSeats.length *
                          parseInt(tripDetails?.price.slice(1) || "0") +
                          600) *
                          0.05
                      )}
                  </div>
                </div>
                <button
                  className={`mt-8 p-2 font-semibold text-xl rounded-full bg-foreground w-full text-background flex gap-2 items-center justify-center ${
                    paid || paying
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-foreground/90"
                  }`}
                  onClick={() => {
                    setPaying(true);
                    setTimeout(() => {
                      setPaid(true);
                      setPaying(false);
                    }, 2000);
                  }}
                  disabled={paid || paying}
                >
                  {paid && <Check className="w-6 h-6" />}
                  {paying ? "Processing..." : paid ? "Paid" : "Pay now"}
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <div className="sticky bottom-0 w-full p-2 bg-background/50 backdrop-blur-lg flex-none animate-slide-in opacity-0 [--slide-in-delay:450ms]">
        <div className="relative">
          <Input
            id="planning-options"
            name="planning-options"
            placeholder="Customize your trip..."
            className="py-6 bg-background/70 backdrop-blur-lg border bg-white dark:bg-black rounded-lg w-full"
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
