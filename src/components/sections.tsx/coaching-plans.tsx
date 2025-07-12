import { Sword, Shield } from "lucide-react";

import { cn } from "~/lib/utils";
import CoachingPlanCard from "../coaching-plan-card";
import SectionHeader from "../section-header";
import PixelMesh from "../ui/pixel-mesh";

const preparationSteps = [
  "Prepare a recent replay of a game in your chosen role",
  "List your main champions and any specific struggles",
  "Set up Discord for voice communication",
  "Ensure a stable internet connection",
];

export default function CoachingPlansSection() {
  return (
    <section id="coaching-plans" className="relative w-full py-14">
      {/* Pixel decoration */}
      <div className="absolute top-0 left-1/6">
        <PixelMesh columns={2} rows={2} />
      </div>
      <div className="absolute right-1/4 bottom-0">
        <PixelMesh columns={3} rows={1} />
      </div>

      <SectionHeader title="Coaching Offers" className="text-neon-green" />
      <div className="grid grid-cols-1 gap-4 text-white sm:grid-cols-2">
        <CoachingPlanCard
          title="Top Lane"
          description="Learn wave control, trading, macro, matchups & impact from the top"
          preparation={[
            "Prepare a recent replay of a Top Lane game",
            "Note your main champions and matchups you struggle with",
            "Ensure a stable internet connection for voice chat",
          ]}
          price="25$ / 1h"
          icon={<Shield className="text-pixel-blue" />}
        />
        <CoachingPlanCard
          title="Mid Lane"
          description="Dominate mid with roam timing, tempo, vision, map impact & duels"
          preparation={[
            "Have a replay of a recent Mid Lane game ready",
            "List your preferred champions and playstyle",
            "Set up Discord for communication",
          ]}
          price="25$ / 1h"
          icon={<Sword className="text-pixel-purple" />}
        />
      </div>

      <div className={cn("mx-auto p-6 text-center shadow-lg")}>
        <h5 className="font-pixel text-neon-green text-lg">
          How to Prepare for Coaching
        </h5>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green">•</span> Prepare a recent replay
            of a game in your chosen role
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green">•</span>
            List your main champions and any specific struggles
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green">•</span>
            Set up Discord for voice communication
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green">•</span>
            Ensure a stable internet connection
          </li>
        </ul>
      </div>
    </section>
  );
}
