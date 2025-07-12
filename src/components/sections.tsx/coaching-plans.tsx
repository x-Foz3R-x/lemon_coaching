import CoachingPlanCard from "../coaching-plan-card";
import SectionHeader from "../section-header";
import PixelMesh from "../ui/pixel-mesh";
import { Sword, Shield } from "lucide-react";

export default function CoachingPlansSection() {
  return (
    <section id="offers" className="relative w-full py-14">
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
    </section>
  );
}
