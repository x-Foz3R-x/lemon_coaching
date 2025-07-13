"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import PixelMesh from "./pixel-mesh";
import { cn } from "~/lib/utils";

interface Props {
  rows?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function PixelBackground({
  rows = 5,
  className,
  children,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pixelData, setPixelData] = useState<{
    columns: number;
    pixelSizeRem: number;
  } | null>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Check for invalid dimensions
      if (width <= 0 || height <= 0 || rows <= 0) return;

      // Calculate columns based on aspect ratio and rows
      const columns = Math.round((width / height) * rows);
      if (columns <= 0) return;

      // Calculate pixel size so width is exactly covered
      const pixelSizePx = width / columns;
      const pixelSizeRem = pixelSizePx / 16; // Assuming 1rem = 16px

      setPixelData({ columns, pixelSizeRem });
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    updateSize();

    return () => observer.disconnect();
  }, [rows]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {pixelData && (
        <div
          className="absolute bottom-0 left-0"
          style={{
            width: `${pixelData.columns * pixelData.pixelSizeRem}rem`,
            height: `${rows * pixelData.pixelSizeRem}rem`,
          }}
        >
          <PixelMesh
            columns={pixelData.columns}
            rows={rows}
            pixelSize={pixelData.pixelSizeRem}
          />
        </div>
      )}
      {children}
    </div>
  );
}
