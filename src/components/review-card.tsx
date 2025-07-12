import { MessageCircle } from "lucide-react";
import { cn } from "~/lib/utils";
import Card from "./ui/card";

type Ranks =
  | "Iron"
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Emerald"
  | "Master"
  | "Grandmaster"
  | "Challenger";

interface Props {
  username: string;
  color: string;
  initialRank: Ranks;
  finalRank: Ranks;
  testimonial: string;
}

function getRankClasses(rank: Ranks): string {
  const rankStyles: Record<Ranks, string> = {
    Iron: "border-gray-500 bg-gray-600",
    Bronze: "border-orange-400 bg-orange-300",
    Silver: "border-gray-300 bg-gray-200",
    Gold: "border-yellow-400 bg-yellow-300",
    Platinum: "border-zinc-400 bg-zinc-300",
    Diamond: "border-blue-400 bg-blue-300",
    Emerald: "border-green-400 bg-green-300",
    Master: "border-violet-400 bg-violet-300",
    Grandmaster: "border-red-400 bg-red-300",
    Challenger: "border-cyan-400 bg-cyan-300",
  };
  return rankStyles[rank];
}

function ReviewCard({
  username,
  color,
  initialRank,
  finalRank,
  testimonial,
}: Props) {
  return (
    <Card className="border-pixel-purple/25 hover:border-pixel-purple/50">
      <div className="font-pixel flex w-full flex-col items-start justify-between gap-2 py-1 text-xl tracking-wide">
        <div className="flex items-center gap-2" style={{ color }}>
          <MessageCircle size={20} />
          {username}
        </div>

        <div className="flex items-center font-sans text-xs leading-3.5 text-slate-950 uppercase brightness-75 contrast-75">
          <div
            className={cn(
              "font-pixel flex flex-col items-center gap-1 rounded border px-1",
              getRankClasses(initialRank),
            )}
          >
            {initialRank}
          </div>
          <div className="font-pixel px-1 leading-0 font-bold text-slate-400">
            to
          </div>
          <div
            className={cn(
              "font-pixel flex flex-col items-center gap-1 rounded border px-1",
              getRankClasses(finalRank),
            )}
          >
            {finalRank}
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-white/90 italic">
        {testimonial}
      </p>
    </Card>
  );
}

export default ReviewCard;
