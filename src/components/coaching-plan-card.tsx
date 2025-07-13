import PixelButton from "./ui/pixel-button";
import { BackgroundGradient } from "./ui/background-gradient";

interface Props {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

export default function CoachingPlanCard({
  title,
  description,
  price,
  icon,
}: Props) {
  return (
    <BackgroundGradient
      className="flex flex-col justify-center gap-8 rounded-[1.25rem] bg-gradient-to-br from-slate-800 to-slate-950 p-8 transition-all"
      containerClassName="max-w-80"
    >
      <div className="flex h-12 items-center gap-3 rounded-full bg-slate-950/70 p-3">
        <div className="size-6 w-1/4">{icon}</div>
        <h4 className="font-pixel text-left text-xl tracking-wide text-white">
          {title}
        </h4>
      </div>

      <div className="font-pixel text-neon-green text-2xl font-bold">
        {price}
        <span className="font-normal">
          /<span className="text-base">1hr</span>
        </span>
      </div>

      <p className="text-sm leading-relaxed text-white/70">{description}</p>

      <PixelButton size="sm" className="mx-4">
        Book Now
      </PixelButton>
    </BackgroundGradient>
  );
}
