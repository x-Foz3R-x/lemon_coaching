import { Sword, Shield } from "lucide-react";

import CoachingPlanCard from "../coaching-plan-card";
import SectionHeader from "../section-header";
import PixelMesh from "../ui/pixel-mesh";

export default function CoachingPlansSection() {
  return (
    <section id="coaching-plans" className="relative w-full py-14">
      {/* Pixel decoration */}
      <div className="absolute top-1/12 right-1/12">
        <PixelMesh columns={2} rows={2} />
      </div>
      <div className="absolute bottom-1/4 left-1/6">
        <PixelMesh columns={4} rows={2} />
      </div>

      <SectionHeader title="Coaching Plans" className="text-neon-green" />
      <div className="mb-8 flex flex-wrap items-center justify-center gap-8 text-white sm:grid-cols-2">
        <CoachingPlanCard
          title="Top Lane"
          description="Learn wave control, trading, macro, matchups & impact from the top"
          price="25$"
          icon={<Shield className="text-pixel-blue size-full" />}
        />
        <CoachingPlanCard
          title="Mid Lane"
          description="Dominate mid with roam timing, tempo, vision, map impact & duels"
          price="25$"
          icon={<Sword className="size-full text-red-400" />}
        />
      </div>

      <div className="mx-auto text-center">
        <h5 className="font-pixel text-neon-green text-lg">
          How to Prepare for Coaching
        </h5>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green select-none">•</span> Prepare a
            recent replay of a game in your chosen role
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green select-none">•</span>
            List your main champions and any specific struggles
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green select-none">•</span>
            Set up Discord for voice communication
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-neon-green select-none">•</span>
            Ensure a stable internet connection
          </li>
        </ul>
      </div>
    </section>
  );
}
