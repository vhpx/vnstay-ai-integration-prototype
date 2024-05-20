"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContinueButton({
  label,
  loading: overrideLoading,
  loadingLabel,
  delay = 0,
  href,
  className,
  disabled,
  onClick,
  setLoading: overrideSetLoading,
}: {
  label?: string;
  loading?: boolean;
  loadingLabel?: string;
  delay?: number;
  href?: string;
  className?: string;
  disabled: boolean;
  onClick?: () => void;
  setLoading?: (loading: boolean) => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <Button
      className={cn("mt-4 w-full max-w-lg", className)}
      onClick={() => {
        if (overrideSetLoading) overrideSetLoading(true);
        else setLoading(true);

        setTimeout(() => {
          if (href) router.push(href);
        }, delay);

        if (onClick) onClick();
      }}
      variant="brand"
      disabled={disabled || (overrideLoading ?? loading)}
    >
      {loading || overrideLoading
        ? loadingLabel || "Processing..."
        : label || "Continue"}
    </Button>
  );
}
