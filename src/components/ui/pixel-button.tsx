import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import Link from "next/link";

const buttonVariants = cva("", {
  variants: {
    size: { sm: "h-9 px-6 text-base", md: "h-12 px-8 text-lg" },
  },
  defaultVariants: { size: "md" },
});

export default function PixelButton({
  className,
  href,
  size,
  children,
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof buttonVariants>) {
  const pixelSizes = { sm: 0.375, md: 0.5 };

  const pixelSize = pixelSizes[size ?? "md"];

  return (
    <Link
      href={href ?? "/"}
      data-slot="button"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-neon-yellow group: relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-bold whitespace-nowrap text-gray-900 uppercase shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] saturate-150 transition outline-none hover:scale-x-[107%] hover:scale-y-[98%] hover:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        buttonVariants({ size, className }),
      )}
      {...props}
    >
      {children}

      <span
        className="bg-neon-yellow absolute"
        style={{
          width: `${pixelSize * 2}rem`,
          height: `${pixelSize * 6}rem`,
          top: 0,
          left: 0,
        }}
      />
      <span
        className="bg-neon-yellow absolute"
        style={{
          width: `${pixelSize * 2}rem`,
          height: `${pixelSize * 6}rem`,
          top: 0,
          right: 0,
        }}
      />

      <span
        className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
        style={{
          width: `${pixelSize * 2}rem`,
          height: `${pixelSize * 4}rem`,
          top: `${pixelSize}rem`,
          left: `${-pixelSize}rem`,
        }}
      />
      <span
        className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
        style={{
          width: `${pixelSize * 2}rem`,
          height: `${pixelSize * 2}rem`,
          top: `${pixelSize * 2}rem`,
          left: `${-pixelSize * 2}rem`,
        }}
      />
      <span
        className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
        style={{
          width: `${pixelSize * 2}rem`,
          height: `${pixelSize * 4}rem`,
          top: `${pixelSize}rem`,
          right: `${-pixelSize}rem`,
        }}
      />
      <span
        className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
        style={{
          width: `${pixelSize * 2}rem`,
          height: `${pixelSize * 2}rem`,
          top: `${pixelSize * 2}rem`,
          right: `${-pixelSize * 2}rem`,
        }}
      />
    </Link>
  );
}
