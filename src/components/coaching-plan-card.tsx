import { cn } from "~/lib/utils"; // Zakładam, że cn jest zaimportowane z lib/utils
import PixelButton from "./ui/pixel-button";

interface Props {
  title: string;
  description: string;
  preparation: string[];
  price: string;
  icon: React.ReactNode;
}

export default function CoachingPlanCard({
  title,
  description,
  preparation,
  price,
  icon,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-center",
        "border border-slate-700/50 shadow-lg transition-all duration-300 ease-in-out",
        "hover:border-neon-green/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]",
      )}
    >
      {/* Neonowy akcent w tle */}
      <div className="bg-neon-green/10 absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-20" />

      {/* Ikona z animacją */}
      <span
        className={cn(
          "rounded-full bg-slate-950/70 p-3 transition-transform duration-300",
          "group-hover:rotate-12",
        )}
      >
        {icon}
      </span>

      <h4 className="font-pixel text-2xl tracking-wide text-white">{title}</h4>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>

      <div className="w-full border-t border-slate-600/50 pt-4">
        <h5 className="font-pixel text-neon-green text-sm">How to Prepare</h5>
        <ul className="mt-3 space-y-2 text-xs text-white/60">
          {preparation.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-1.5 opacity-80 transition-opacity duration-200 hover:opacity-100"
            >
              <span className="text-neon-green">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <span
        className={cn(
          "font-pixel text-neon-green bg-neon-green/10 mt-3 rounded-lg px-4 py-1.5 text-lg",
          "hover:bg-neon-green/20 transition-all duration-200",
        )}
      >
        {price}
      </span>

      <PixelButton size="sm">Book Now</PixelButton>
      {/* <button
        className={cn(
          "bg-neon-green font-pixel mt-5 w-full rounded-lg px-5 py-2.5 text-sm text-slate-900",
          "relative overflow-hidden transition-all duration-300 ease-in-out",
          "hover:bg-neon-green/90 hover:shadow-[0_0_10px_rgba(74,222,128,0.5)]",
          "before:absolute before:inset-0 before:bg-white/20 before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100",
        )}
      >
        <span className="relative z-10">Book Now</span>
      </button> */}
    </div>
  );
}
