import React, { useMemo } from "react";
import { cn } from "~/lib/utils";

interface Props {
  pixelSize?: number;
  columns?: number;
  rows?: number;
  glass?: boolean;
  className?: string;
}

export default function PixelMesh({
  pixelSize = 0.75,
  columns = 6,
  rows = 3,
  glass = false,
  className,
}: Props) {
  const maskStyles = useMemo(() => {
    const maskSize = `${pixelSize * 2}rem ${pixelSize * 2}rem`;
    const maskImage = `
      repeating-conic-gradient(
        from 0deg,
        transparent 0deg 90deg,
        black 90deg 180deg,
        transparent 180deg 270deg,
        black 270deg 360deg
      )
    `;

    return {
      width: `${columns * pixelSize}rem`,
      height: `${rows * pixelSize}rem`,
      maskImage,
      maskSize,
      maskRepeat: "repeat",
      WebkitMaskImage: maskImage,
      WebkitMaskSize: maskSize,
      WebkitMaskRepeat: "repeat",
    };
  }, [pixelSize, columns, rows]);

  return (
    <div
      className={cn(
        "absolute top-0 left-0 -z-10 bg-gray-700/35",
        glass && "backdrop-blur-md backdrop-saturate-150",
        className,
      )}
      style={maskStyles}
    />
  );
}
