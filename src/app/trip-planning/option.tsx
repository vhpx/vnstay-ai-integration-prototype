import { Dispatch } from "react";

export default function PlanningOption({
  label,
  presetOptions,
  className,
  setPresetOptions,
}: {
  label: string;
  presetOptions?: string[];
  className?: string;
  setPresetOptions?: Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <button
      onClick={() =>
        presetOptions && setPresetOptions
          ? presetOptions.includes(label)
            ? setPresetOptions((ops) => ops.filter((rq) => rq !== label))
            : setPresetOptions((ops) => [...ops, label])
          : undefined
      }
      className={`grid gap-2 p-4 rounded-lg border-2 transition ${
        presetOptions
          ? presetOptions.includes(label)
            ? "border-foreground opacity-100"
            : "opacity-50 md:hover:opacity-100"
          : "opacity-100 cursor-default"
      } ${className}`}
    >
      <div className="font-semibold">{label}</div>
    </button>
  );
}
