import {
  Map,
  Eye,
  Compass,
  Waves,
  Clock,
  Split,
  Swords,
  Brain,
} from "lucide-react";
import PixelMesh from "../ui/pixel-mesh";
import SectionHeader from "../section-header";
import SkillCard from "../skill-card";

export default function SkillsSection() {
  return (
    <section className="relative w-full py-20">
      {/* Pixel decoration */}
      <div className="absolute top-1/12 right-1/4">
        <PixelMesh columns={2} rows={2} />
      </div>
      <div className="absolute bottom-0 left-1/4">
        <PixelMesh columns={3} rows={2} />
      </div>

      <SectionHeader title="What You’ll Learn" className="text-pixel-blue" />
      <div className="mt-6 grid cursor-default gap-4 pb-2 text-white sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-4">
        <SkillCard
          title="Fighting"
          description="Teamfights, micro, skirmishes"
          icon={<Swords className="text-red-400" size={18} />}
        />
        <SkillCard
          title="Roaming"
          description="Roaming, lane impact, early pressure"
          icon={<Compass className="text-purple-400" size={18} />}
        />
        <SkillCard
          title="Vision"
          description="Warding, denial, vision control"
          icon={<Eye className="text-green-400" size={18} />}
        />
        <SkillCard
          title="Wave Control"
          description="Slow/fast push, crash"
          icon={<Waves className="text-sky-400" size={18} />}
        />
        <SkillCard
          title="Timing"
          description="Early/Mid/Late game, tempo calls"
          icon={<Clock className="text-yellow-400" size={18} />}
        />
        <SkillCard
          title="Split"
          description="Splitpush, sidelane, pressure"
          icon={<Split className="text-indigo-400" size={18} />}
        />
        <SkillCard
          title="Macro"
          description="Rotations, pressure, jungle tracking"
          icon={<Map className="text-pink-400" size={18} />}
        />
        <SkillCard
          title="Mindset"
          description="Mental strength, focus, learning loop"
          icon={<Brain className="text-yellow-400" size={18} />}
        />
      </div>
    </section>
  );
}
