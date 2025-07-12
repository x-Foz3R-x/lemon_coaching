import React from "react";
import { cn } from "~/lib/utils";

interface Props {
  pixelSize?: number;
  columns?: number;
  rows?: number;
  className?: string;
  glass?: boolean;
}

export default function PixelMesh({
  pixelSize = 0.875,
  columns = 6,
  rows = 3,
  className = "",
  glass = false,
}: Props) {
  return (
    <>
      {Array.from({ length: rows * columns }).map((_, index) => {
        const y = Math.floor(index / columns);
        const x = index % columns;

        // checkerboard: co druga kolumna przesunięta
        if ((y % 2 === 0 && x % 2 !== 0) || (y % 2 !== 0 && x % 2 === 0)) {
          return null;
        }

        const left = `${x * pixelSize}rem`;
        const top = `${y * pixelSize}rem`;
        const size = `${pixelSize}rem`;

        return (
          <span
            key={`${x}-${y}`}
            className={cn(
              "absolute -z-10 bg-gray-700/35",
              glass && "backdrop-blur-md backdrop-saturate-150",
              className,
            )}
            style={{
              width: size,
              height: size,
              left,
              top,
            }}
          />
        );
      })}
    </>
  );
}
