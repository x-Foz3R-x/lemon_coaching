import { cn } from "~/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function TestimonialCard({ className, children }: Props) {
  return (
    <div
      className={cn(
        "border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-3 rounded-xl border bg-slate-800/70 p-3 shadow-lg transition-all",
        className,
      )}
    >
      {children}
    </div>
  );
}
