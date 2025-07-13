"use client";

import PixelMesh from "../ui/pixel-mesh";
import PixelButton from "../ui/pixel-button";

export default function HeroSection() {
  return (
    <section className="relative w-full py-14">
      {/* Pixel decoration */}
      <div className="absolute top-1/4 left-1/12">
        <PixelMesh columns={4} rows={4} />
      </div>
      <div className="absolute right-2/12 bottom-1/4">
        <PixelMesh columns={3} rows={3} />
      </div>

      {/* Hero Content */}
      <h1 className="font-pixel text-4xl leading-14 tracking-tighter text-shadow-[0_0_2px_#000,_0_0_4px_#fff] sm:text-5xl md:text-6xl">
        Level Up Your
        <div className="text-neon-green text-xl leading-9 saturate-150 sm:text-2xl md:text-3xl">
          League of Legends
        </div>
        <div className="leading-12"> Gameplay</div>
      </h1>
      <p className="mt-6 text-lg text-balance text-white/80">
        7 years of experience, 653 LP peak on toplane, Master tier midlaner with
        70% winrate. Learn how to think and play like a winner.
      </p>

      <PixelButton href="#coaching-plans" className="mt-8 scroll-smooth">
        Book a Session
      </PixelButton>
    </section>
  );
}
