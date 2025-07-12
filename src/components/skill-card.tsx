import { cn } from "~/lib/utils";
import Card from "./ui/card";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  hasCustomLayout?: boolean;
}

export default function SkillCard({
  title,
  description,
  icon,
  hasCustomLayout = false,
}: SkillCardProps) {
  return (
    <Card
      className={cn(
        "md:col-span-2 lg:col-span-1",
        hasCustomLayout && "md:col-start-2 lg:col-start-auto",
      )}
    >
      <div
        className={cn(
          "font-pixel flex h-full items-center gap-3 text-lg",
          title === "Wave Control" && "text-nowrap",
        )}
      >
        {icon}
        <h4>{title}</h4>
      </div>
      <p className={cn("font-sans text-xs text-slate-400")}>{description}</p>
    </Card>
  );
}
