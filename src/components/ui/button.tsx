"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import { useEffect, useRef, useState } from "react";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        none: "",
        pixel:
          "relative bg-neon-yellow text-gray-900 font-bold text-lg saturate-150 backdrop-blur-md shadow-[1px_1px_4px_#000,_0_0_6px_#f9ff00] hover:scale-x-105 hover:scale-y-[99%] px-8 py-2.5",
      },
    },
    defaultVariants: { variant: "none" },
  },
);

function Button({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pixelSize, setPixelSize] = useState<number | null>(null);

  useEffect(() => {
    if (variant === "pixel" && buttonRef.current) {
      const height = buttonRef.current.offsetHeight;
      setPixelSize(height / 6);
    }
  }, [variant]);

  const renderPixelCorners = (className?: string) => {
    if (!pixelSize) return null;

    const positions = [
      { top: pixelSize * 2, left: -pixelSize * 2 - 1 },
      { top: pixelSize * 2, right: -pixelSize * 2 - 1 },
    ];

    const positionsCorner = [
      // Lewo
      { top: pixelSize, left: -pixelSize - 1 },
      { bottom: pixelSize, left: -pixelSize - 1 },
      // Prawo
      { top: pixelSize, right: -pixelSize - 1 },
      { bottom: pixelSize, right: -pixelSize - 1 },
    ];

    return (
      <>
        {positions.map((style, i) => (
          <span
            key={i}
            className={cn("bg-neon-yellow absolute", className)}
            style={{
              width: pixelSize * 2 + 2,
              height: pixelSize * 2,
              ...style,
            }}
          />
        ))}
        {positionsCorner.map((style, i) => (
          <span
            key={i}
            className={cn("bg-neon-yellow absolute", className)}
            style={{
              width: pixelSize + 2,
              height: pixelSize,
              ...style,
            }}
          />
        ))}
      </>
    );
  };

  return (
    <button
      ref={buttonRef}
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
      {variant === "pixel" && renderPixelCorners()}
    </button>
  );
}

export { Button, buttonVariants };
