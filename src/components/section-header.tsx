import { cn } from "~/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({
  title,
  className,
}: SectionHeaderProps) {
  return (
    <h3
      className={cn(
        "font-pixel mb-6 text-center text-3xl saturate-150",
        className,
      )}
    >
      {title}
    </h3>
  );
}
