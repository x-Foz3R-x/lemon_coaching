"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "~/lib/utils";

interface Props {
  rows?: number;
  glass?: boolean;
  className?: string;
  meshClassName?: string;
  children?: React.ReactNode;
}

interface PixelData {
  columns: number;
  pixelSize: number;
}

const DEBOUNCE_MS = 100;

export default function PixelBackground({
  rows = 6,
  glass,
  className,
  meshClassName,
  children,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout>(null);
  const [pixelData, setPixelData] = useState<PixelData | null>(null);

  const calculatePixelData = useCallback(
    (element: HTMLElement): PixelData | null => {
      const rect = element.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width <= 0 || height <= 0 || rows <= 0) return null;

      // Start with a reasonable pixel size and adjust
      const aspectRatio = width / height;
      const columns = Math.round(aspectRatio * rows);

      // Calculate pixel size to fill available width exactly
      const pixelSizePx = width / columns;
      const pixelSizeRem = pixelSizePx / 16;

      return {
        columns,
        pixelSize: pixelSizeRem,
      };
    },
    [rows],
  );

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;

      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);

      resizeTimeoutRef.current = setTimeout(() => {
        const element = containerRef.current;
        if (!element) return;

        const newPixelData = calculatePixelData(element);

        setPixelData((prevData) => {
          if (!newPixelData) return null;

          if (
            !prevData ||
            prevData.columns !== newPixelData.columns ||
            Math.abs(prevData.pixelSize - newPixelData.pixelSize) > 0.01
          ) {
            return newPixelData;
          }

          return prevData;
        });
      }, DEBOUNCE_MS);
    },
    [calculatePixelData],
  );

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(handleResize);
    observer.observe(element);

    const initialData = calculatePixelData(element);
    setPixelData(initialData);

    return () => {
      observer.disconnect();
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, [handleResize, calculatePixelData]);

  const pixelMask = useMemo(() => {
    if (!pixelData) return "";

    return `
      repeating-conic-gradient(
        from 0deg,
        transparent 0deg 90deg,
        black 90deg 180deg,
        transparent 180deg 270deg,
        black 270deg 360deg
      )
    `;
  }, [pixelData]);

  const meshContainerStyles = useMemo(() => {
    if (!pixelData) return {};

    const meshWidth = pixelData.columns * pixelData.pixelSize;
    const meshHeight = rows * pixelData.pixelSize;

    return {
      width: `${meshWidth}rem`,
      height: `${meshHeight}rem`,
      WebkitMaskImage: pixelMask,
      WebkitMaskSize: `${pixelData.pixelSize * 2}rem ${pixelData.pixelSize * 2}rem`,
      WebkitMaskRepeat: "repeat",
      maskImage: pixelMask,
      maskSize: `${pixelData.pixelSize * 2}rem ${pixelData.pixelSize * 2}rem`,
      maskRepeat: "repeat",
      ...(glass && {
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }),
    };
  }, [pixelData, rows, pixelMask, glass]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {pixelData && (
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 left-0 -z-10",
            meshClassName,
          )}
          style={meshContainerStyles}
        />
      )}
      {children}
    </div>
  );
}
