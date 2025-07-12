"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import { useEffect, useRef, useState } from "react";

const buttonVariants = cva("", {
  variants: {
    size: {
      sm: "h-9 px-4",
      md: "h-10 px-8",
      lg: "h-11 px-12",
    },
  },
  defaultVariants: { size: "md" },
});

function Button({
  className,
  size,
  children,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pixelSize, setPixelSize] = useState<number | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.offsetHeight;
      setPixelSize(height / 6);
    }
  }, []);

  const renderPixelCorners = (className?: string) => {
    if (!pixelSize) return null;

    return (
      <>
        <span
          className="bg-neon-yellow absolute left-[-1px]"
          style={{
            width: pixelSize / 2,
            height: pixelSize * 2,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <span
          className="bg-neon-yellow absolute left-[-1px]"
          style={{
            width: pixelSize / 2,
            height: pixelSize,
            top: "50%",
            transform: `translateY(-50%) translateX(${pixelSize}px)`,
          }}
        />
        <span
          className="bg-neon-yellow absolute right-[-1px]"
          style={{
            width: pixelSize / 2,
            height: pixelSize * 2,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <span
          className="bg-neon-yellow absolute right-[-1px]"
          style={{
            width: pixelSize / 2,
            height: pixelSize,
            top: "50%",
            transform: `translateY(-50%) translateX(-${pixelSize}px)`,
          }}
        />
      </>
    );
  };

  return (
    <button
      ref={buttonRef}
      data-slot="button"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 px-1 text-lg font-bold whitespace-nowrap text-gray-900 shadow-[1px_1px_4px_#000,_0_0_6px_#f9ff00] saturate-150 backdrop-blur-md transition-all outline-none hover:scale-x-105 hover:scale-y-[99%] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        buttonVariants({ size, className }),
      )}
      {...props}
    >
      <div className="bg-neon-yellow h-full w-full">{children}</div>
      {renderPixelCorners()}
    </button>
  );
}

export { Button, buttonVariants };
