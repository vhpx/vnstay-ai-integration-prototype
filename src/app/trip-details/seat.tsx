import { Armchair } from "lucide-react";

export default function Seat({
  id,
  isBooked,
  isSelected,
  onSelect,
  disabled,
}: {
  id: string;
  isBooked: boolean;
  isSelected: boolean;
  onSelect: (id: string) => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
        disabled
          ? "bg-foreground/5 opacity-30 cursor-not-allowed"
          : isSelected
          ? isBooked
            ? "bg-brand text-white"
            : "bg-black dark:bg-white text-white dark:text-black"
          : "bg-foreground/5 hover:bg-foreground/10 transition"
      }`}
      onClick={() => onSelect(id)}
      disabled={disabled}
    >
      <Armchair />
    </button>
  );
}
