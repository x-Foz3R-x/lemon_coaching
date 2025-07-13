import SectionHeader from "../section-header";
import ReviewCard from "../review-card";
import PixelMesh from "../ui/pixel-mesh";

export default function ReviewsSection() {
  return (
    <section className="relative w-full py-14">
      {/* Pixel decoration */}
      <div className="absolute top-0 right-1/12">
        <PixelMesh columns={3} rows={3} />
      </div>

      <SectionHeader title="Reviews" className="text-pink-400" />
      <div className="grid cursor-default grid-cols-1 gap-4 text-left lg:grid-cols-2">
        <ReviewCard
          username="KhaZixMain"
          testimonial="I've climbed from Gold to Diamond in two months after these coaching sessions. Macro advice was spot on. Highly recommend!"
          color="var(--color-blue-400)"
          initialRank="Platinum"
          finalRank="Diamond"
        />
        <ReviewCard
          username="MidBeastPL"
          testimonial="Finally understood how to control waves and rotate properly. Coaching is clear, structured, and to the point."
          color="var(--color-green-400)"
          initialRank="Gold"
          finalRank="Master"
        />
        <ReviewCard
          username="ADCEnjoyer"
          testimonial="The review of my replays was super detailed and I got concrete steps to work on. Laning phase has improved a ton."
          color="var(--color-yellow-300)"
          initialRank="Bronze"
          finalRank="Gold"
        />
        <ReviewCard
          username="SoloQSurvivor"
          testimonial="I was hardstuck for ages. One coaching session opened my eyes. Totally worth it if you're serious about climbing."
          color="var(--color-purple-400)"
          initialRank="Emerald"
          finalRank="Grandmaster"
        />
      </div>
    </section>
  );
}
