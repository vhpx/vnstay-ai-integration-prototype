"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContinueButton({
  label,
  loadingLabel,
  delay = 0,
  href,
  className,
  disabled,
}: {
  label?: string;
  loadingLabel?: string;
  delay?: number;
  href: string;
  className?: string;
  disabled: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <Button
      className={cn("mt-4 w-full max-w-lg", className)}
      onClick={() => {
        setLoading(true);

        setTimeout(() => {
          router.push(href);
        }, delay);
      }}
      disabled={disabled || loading}
    >
      {loading ? loadingLabel || "Processing..." : label || "Continue"}
    </Button>
  );
}
