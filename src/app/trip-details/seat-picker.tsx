import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Seat from "./seat";
import { Button } from "@/components/ui/button";

export default function SeatPicker({
  selectedTrip,
  selectedSeats,
  bookedAirline,
  setSelectedSeats,
  onBook,
}: {
  selectedTrip: {
    airline: string;
    departure: string;
    duration: string;
    price: string;
    route: string;
    img: string;
  } | null;
  selectedSeats: string[];
  bookedAirline: string | null;
  setSelectedSeats: Dispatch<SetStateAction<string[]>>;
  onBook: (airline: string, seats: string[]) => void;
}) {
  if (!selectedTrip) return null;

  return (
    <div className="mt-4 border p-4 rounded-lg bg-white dark:bg-black">
      <div className="flex gap-4 items-center">
        <Image
          src={selectedTrip.img}
          width={45}
          height={45}
          alt={selectedTrip.airline}
          className="rounded-lg w-16 h-16"
        />
        <div>
          <div>
            <span className="font-semibold">{selectedTrip.airline}</span> · May
            30, 2024 · {selectedTrip.departure}
          </div>
          <div>
            <span className="font-semibold">{selectedTrip.route}</span> ·{" "}
            {selectedTrip.duration}
          </div>
        </div>
      </div>

      <div className="mt-4 border-transparent dark:border-border dark:bg-foreground/5 w-full rounded flex flex-col items-center justify-center border">
        <div className="p-4 grid items-center gap-2 justify-center max-w-sm grid-cols-5">
          <Seat
            id="1"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("1")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("1") ? p.filter((s) => s !== "1") : [...p, "1"]
                  )
            }
            disabled={
              !selectedSeats.includes("1") &&
              bookedAirline === selectedTrip.airline
            }
          />
          <Seat
            id="2"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("2")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("2") ? p.filter((s) => s !== "2") : [...p, "2"]
                  )
            }
            disabled
          />
          <div className="text-center font-semibold">4</div>
          <Seat
            id="3"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("3")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("3") ? p.filter((s) => s !== "3") : [...p, "3"]
                  )
            }
            disabled
          />
          <Seat
            id="4"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("4")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("4") ? p.filter((s) => s !== "4") : [...p, "4"]
                  )
            }
            disabled
          />
        </div>

        <div className="p-4 grid items-center gap-2 justify-center max-w-sm grid-cols-5">
          <Seat
            id="5"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("5")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("5") ? p.filter((s) => s !== "5") : [...p, "5"]
                  )
            }
            disabled
          />
          <Seat
            id="6"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("6")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("6") ? p.filter((s) => s !== "6") : [...p, "6"]
                  )
            }
            disabled={
              !selectedSeats.includes("6") &&
              bookedAirline === selectedTrip.airline
            }
          />
          <div className="text-center font-semibold">3</div>
          <Seat
            id="7"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("7")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("7") ? p.filter((s) => s !== "7") : [...p, "7"]
                  )
            }
            disabled={
              !selectedSeats.includes("7") &&
              bookedAirline === selectedTrip.airline
            }
          />
          <Seat
            id="8"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("8")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("8") ? p.filter((s) => s !== "8") : [...p, "8"]
                  )
            }
            disabled={
              !selectedSeats.includes("8") &&
              bookedAirline === selectedTrip.airline
            }
          />
        </div>

        <div className="p-4 grid items-center gap-2 justify-center max-w-sm grid-cols-5">
          <Seat
            id="9"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("9")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("9") ? p.filter((s) => s !== "9") : [...p, "9"]
                  )
            }
            disabled
          />
          <Seat
            id="10"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("10")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("10")
                      ? p.filter((s) => s !== "10")
                      : [...p, "10"]
                  )
            }
            disabled={
              !selectedSeats.includes("10") &&
              bookedAirline === selectedTrip.airline
            }
          />
          <div className="text-center font-semibold">2</div>
          <Seat
            id="11"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("11")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("11")
                      ? p.filter((s) => s !== "11")
                      : [...p, "11"]
                  )
            }
            disabled={
              !selectedSeats.includes("11") &&
              bookedAirline === selectedTrip.airline
            }
          />
          <Seat
            id="12"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("12")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("12")
                      ? p.filter((s) => s !== "12")
                      : [...p, "12"]
                  )
            }
            disabled={
              !selectedSeats.includes("12") &&
              bookedAirline === selectedTrip.airline
            }
          />
        </div>

        <div className="p-4 grid items-center gap-2 justify-center max-w-sm grid-cols-5">
          <Seat
            id="13"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("13")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("13")
                      ? p.filter((s) => s !== "13")
                      : [...p, "13"]
                  )
            }
            disabled={
              !selectedSeats.includes("13") &&
              bookedAirline === selectedTrip.airline
            }
          />
          <Seat
            id="14"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("14")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("14")
                      ? p.filter((s) => s !== "14")
                      : [...p, "14"]
                  )
            }
            disabled
          />
          <div className="text-center font-semibold">1</div>
          <Seat
            id="15"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("15")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("15")
                      ? p.filter((s) => s !== "15")
                      : [...p, "15"]
                  )
            }
            disabled
          />
          <Seat
            id="16"
            isBooked={bookedAirline === selectedTrip.airline}
            isSelected={selectedSeats.includes("16")}
            onSelect={() =>
              bookedAirline === selectedTrip.airline
                ? undefined
                : setSelectedSeats((p) =>
                    p.includes("16")
                      ? p.filter((s) => s !== "16")
                      : [...p, "16"]
                  )
            }
            disabled
          />
        </div>

        <div className="p-4 pt-0 grid items-center font-semibold gap-2 justify-center max-w-sm grid-cols-5">
          <div className="w-12 h-8 rounded-lg flex items-center justify-center hover:bg-foreground/10 transition">
            A
          </div>
          <div className="w-12 h-8 rounded-lg flex items-center justify-center hover:bg-foreground/10 transition">
            B
          </div>
          <div />
          <div className="w-12 h-8 rounded-lg flex items-center justify-center hover:bg-foreground/10 transition">
            C
          </div>
          <div className="w-12 h-8 rounded-lg flex items-center justify-center hover:bg-foreground/10 transition">
            D
          </div>
        </div>
      </div>

      <div>
        <Button
          className="mt-4 rounded w-full"
          onClick={() =>
            bookedAirline !== selectedTrip.airline &&
            onBook(selectedTrip.airline, selectedSeats)
          }
          disabled={
            selectedSeats.length === 0 || bookedAirline === selectedTrip.airline
          }
        >
          {bookedAirline === selectedTrip.airline
            ? `Booked with ${bookedAirline}.`
            : selectedSeats.length > 0
            ? `Book ${selectedSeats.length} seat${
                selectedSeats.length > 1 ? "s" : ""
              }`
            : "Select a seat"}
        </Button>

        {bookedAirline === selectedTrip.airline && (
          <Button
            className="mt-2 rounded w-full"
            onClick={() =>
              document.getElementById("booking-summary")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            variant="brand"
          >
            Proceed to checkout
          </Button>
        )}
      </div>
    </div>
  );
}
