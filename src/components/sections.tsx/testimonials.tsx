import PixelMesh from "../ui/pixel-mesh";
import { MessageCircle } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="relative w-full">
      {/* Pixel decoration */}
      <div className="absolute top-0 left-1/12">
        <PixelMesh columns={2} rows={2} />
      </div>
      <div className="absolute right-1/12 bottom-[-2rem]">
        <PixelMesh columns={3} rows={3} />
      </div>

      <h3 className="font-pixel mb-6 text-center text-3xl text-pink-400">
        What Others Say
      </h3>
      <div className="grid cursor-default grid-cols-1 gap-4 text-left md:grid-cols-2">
        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col gap-1.5 rounded-xl border bg-slate-800 p-3 shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex items-center gap-2 text-lg tracking-wide text-pink-400">
            <MessageCircle size={18} />
            KhaZixMain
          </div>
          <p className="text-sm leading-relaxed text-white/90 italic">
            I&apos;ve climbed from Gold to Diamond in two months after these
            coaching sessions. Macro advice was spot on. Highly recommend!
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col gap-1.5 rounded-xl border bg-slate-800 p-3 shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex items-center gap-2 text-lg tracking-wide text-blue-400">
            <MessageCircle size={18} />
            MidBeastPL
          </div>
          <p className="text-sm leading-relaxed text-white/90 italic">
            Finally understood how to control waves and rotate properly.
            Coaching is clear, structured, and to the point.
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col gap-1.5 rounded-xl border bg-slate-800 p-3 shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex items-center gap-2 text-lg tracking-wide text-green-400">
            <MessageCircle size={16} />
            ADCEnjoyer
          </div>
          <p className="text-sm leading-relaxed text-white/90 italic">
            The review of my replays was super detailed and I got concrete steps
            to work on. Laning phase has improved a ton.
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col gap-1.5 rounded-xl border bg-slate-800 p-3 shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex items-center gap-2 text-lg tracking-wide text-yellow-300">
            <MessageCircle size={18} />
            SoloQSurvivor
          </div>
          <p className="text-sm leading-relaxed text-white/90 italic">
            I was hardstuck for ages. One coaching session opened my eyes.
            Totally worth it if you&apos;re serious about climbing.
          </p>
        </div>
      </div>
    </section>
  );
}
