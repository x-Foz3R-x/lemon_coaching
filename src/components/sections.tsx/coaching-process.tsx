import { Video, CheckCircle, MessageSquare } from "lucide-react";
import PixelMesh from "../ui/pixel-mesh";
import SectionHeader from "../section-header";
import ProcessCard from "../process-card";

export default function CoachingProcessSection() {
  return (
    <section className="relative w-full py-20">
      {/* Pixel decoration */}
      <div className="absolute top-0 left-1/6">
        <PixelMesh columns={3} rows={2} />
      </div>
      <div className="absolute right-1/6 bottom-0">
        <PixelMesh columns={2} rows={3} />
      </div>

      <SectionHeader title="Coaching Process" className="text-amber-400" />
      <p className="mt-4 text-center text-lg text-white">
        Personalized sessions analyzing VODs to improve gameplay and
        decision-making.
      </p>

      <div className="mt-6 grid cursor-default gap-4 pb-2 text-white sm:grid-cols-1 md:grid-cols-3">
        <ProcessCard
          title="VOD Breakdown"
          description="Replay analysis focused on decision-making, map control, and timing errors."
          icon={<Video className="text-blue-400" size={22} />}
        />
        <ProcessCard
          title="Custom Guidance"
          description="Role-specific advice tailored to champion pool, game goals, and playstyle."
          icon={<MessageSquare className="text-green-400" size={20} />}
        />
        <ProcessCard
          title="Skill Tracking"
          description="Progress monitored through laning, macro, and adaptation across sessions."
          icon={<CheckCircle className="text-yellow-400" size={20} />}
        />
      </div>
    </section>
  );
}
