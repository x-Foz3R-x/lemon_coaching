import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-neon-yellow group: relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-bold whitespace-nowrap text-gray-900 uppercase shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] saturate-150 transition outline-none hover:scale-x-[107%] hover:scale-y-[98%] hover:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      size: { sm: "h-9 px-6 text-base", md: "h-12 px-8 text-lg" },
    },
    defaultVariants: { size: "md" },
  },
);

type LinkProps = React.ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof buttonVariants>;
type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

type PixelButtonProps = (LinkProps | ButtonProps) & {
  href?: string;
};

export default function PixelButton({
  className,
  href,
  size,
  children,
  ...props
}: PixelButtonProps) {
  const pixelSizes = { sm: 0.375, md: 0.5 };
  const pixelSize = pixelSizes[size ?? "md"];

  const createPixelSpanStyle = React.useCallback(
    (
      widthMultiplier: number,
      heightMultiplier: number,
      topMultiplier: number,
      leftMultiplier?: number,
      rightMultiplier?: number,
    ) => ({
      width: `${pixelSize * widthMultiplier}rem`,
      height: `${pixelSize * heightMultiplier}rem`,
      top: `${pixelSize * topMultiplier}rem`,
      ...(leftMultiplier !== undefined && {
        left: `${pixelSize * leftMultiplier}rem`,
      }),
      ...(rightMultiplier !== undefined && {
        right: `${pixelSize * rightMultiplier}rem`,
      }),
    }),
    [pixelSize],
  );

  const pixelSpans = React.useMemo(
    () => (
      <>
        <span
          className="bg-neon-yellow absolute"
          style={createPixelSpanStyle(2, 6, 0, 0)}
        />
        <span
          className="bg-neon-yellow absolute"
          style={createPixelSpanStyle(2, 6, 0, undefined, 0)}
        />

        <span
          className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
          style={createPixelSpanStyle(2, 4, 1, -1)}
        />
        <span
          className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
          style={createPixelSpanStyle(2, 2, 2, -2)}
        />
        <span
          className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
          style={createPixelSpanStyle(2, 4, 1, undefined, -1)}
        />
        <span
          className="bg-neon-yellow absolute before:absolute before:inset-0 before:-z-20 before:shadow-[0px_0px_2px_#000,_0_0_4px_#f9ff00] group-hover:before:shadow-[0px_0px_2px_#000,_0_0_6px_#f9ff00]"
          style={createPixelSpanStyle(2, 2, 2, undefined, -2)}
        />
      </>
    ),
    [createPixelSpanStyle],
  );

  if (href) {
    return (
      <Link
        className={cn(buttonVariants({ size, className }))}
        {...(props as React.ComponentPropsWithoutRef<typeof Link>)}
        href={href}
      >
        {children}
        {pixelSpans}
      </Link>
    );
  } else {
    return (
      <button
        type="button"
        className={cn(buttonVariants({ size, className }))}
        data-slot="button"
        {...(props as React.ComponentPropsWithoutRef<"button">)}
      >
        {children}
        {pixelSpans}
      </button>
    );
  }
}
