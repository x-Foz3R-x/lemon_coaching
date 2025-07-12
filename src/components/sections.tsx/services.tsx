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

export default function ServicesSection() {
  return (
    <section className="relative w-full">
      {/* Pixel decoration */}
      <div className="absolute top-1/12 right-1/4">
        <PixelMesh columns={2} rows={2} />
      </div>
      <div className="absolute bottom-0 left-1/4">
        <PixelMesh columns={3} rows={2} />
      </div>

      <h3 className="font-pixel text-pixel-blue text-center text-3xl">
        What You’ll Learn
      </h3>
      <div className="mt-6 grid cursor-default grid-cols-2 gap-4 pb-2 text-nowrap text-white md:grid-cols-4">
        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Map className="text-blue-400" size={22} />
            <h4>Macro</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Makrogra, rotacje, presja mapy
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Eye className="text-green-400" size={22} />
            <h4>Vision</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Wardowanie, deny, map control
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Compass className="text-purple-400" size={22} />
            <h4>Roaming</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Roamy, tempo, early influence
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Waves className="text-sky-400" size={22} />
            <h4>Waves</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Wave management, slow/fast push
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Clock className="text-pink-400" size={22} />
            <h4>Timing</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Early/Mid/Late game, tempo calls
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Split className="text-indigo-400" size={22} />
            <h4>Split</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Splitpush, sidelane, pressure
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Swords className="text-red-400" size={22} />
            <h4>Fighting</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Teamfights, micro, skirmishes
          </p>
        </div>

        <div className="border-pixel-purple/25 hover:border-pixel-purple/50 flex flex-col items-center gap-1.5 rounded-xl border bg-slate-800 p-3 text-center shadow-lg duration-150 ease-in-out">
          <div className="font-pixel flex h-full items-center gap-3 text-xl">
            <Brain className="text-yellow-400" size={22} />
            <h4>Mindset</h4>
          </div>

          <p className="font-sans text-xs text-white/75">
            Tilt control, focus, learning loop
          </p>
        </div>
      </div>
    </section>
  );
}
