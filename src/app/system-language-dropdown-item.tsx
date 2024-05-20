"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Check, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  selected?: boolean;
}

export function SystemLanguageDropdownItem({ selected }: Props) {
  const router = useRouter();

  const useDefaultLocale = async () => {
    const res = await fetch("/api/v1/infrastructure/languages", {
      method: "DELETE",
    });

    if (res.ok) router.refresh();
  };

  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={useDefaultLocale}
      disabled={selected}
    >
      {selected ? (
        <Check className="mr-2 h-4 w-4" />
      ) : (
        <Sparkles className="mr-2 h-4 w-4" />
      )}
      System
    </DropdownMenuItem>
  );
}
