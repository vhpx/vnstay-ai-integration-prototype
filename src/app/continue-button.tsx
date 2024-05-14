"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContinueButton({
  label,
  href,
  disabled,
}: {
  label?: string;
  href: string;
  disabled: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <Button
      className="mt-4 w-full max-w-lg"
      onClick={() => {
        setLoading(true);
        router.push(href);
      }}
      disabled={disabled || loading}
    >
      {loading ? "Processing..." : label || "Continue"}
    </Button>
  );
}
