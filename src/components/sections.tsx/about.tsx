import PixelMesh from "../ui/pixel-mesh";
import { Avatar } from "../icons";
import SectionHeader from "../section-header";

export default function AboutSection() {
  return (
    <section className="relative w-full py-20">
      {/* Pixel decoration */}
      <div className="absolute top-1/6 right-1/3">
        <PixelMesh columns={3} rows={3} />
      </div>
      <div className="absolute bottom-1/12 left-1/5">
        <PixelMesh columns={3} rows={1} />
      </div>

      <SectionHeader title="About Me" className="text-pixel-purple" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-9">
        {/* Avatar */}
        <div className="border-pixel-purple/25 mx-auto size-36 flex-shrink-0 overflow-hidden rounded-xl border bg-slate-500 p-2 shadow-lg sm:size-48">
          <Avatar className="size-full scale-x-[-1]" />
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-balance text-white/80 sm:text-left">
          I&apos;ve been playing League of Legends for over 7 years. My peak is
          <span className="text-neon-green"> 653 LP</span> with a
          <span className="text-neon-green"> 61% WR</span> on toplane, and I
          reached
          <span className="text-neon-green"> Master tier</span> midlane with a
          <span className="text-neon-green"> 70% WR</span> on EUW.
          <br />
          <br />
          As a coach, I focus on deep analysis — from builds and runes to small
          in-game decisions. I believe in empathy, patience, and asking the
          right questions instead of giving ready-made answers.
        </p>
      </div>
    </section>
  );
}
