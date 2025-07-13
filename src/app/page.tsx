import { Button } from "~/components/ui/button";
import HeroSection from "~/components/sections.tsx/hero";
import SkillsSection from "~/components/sections.tsx/skills";
import ReviewsSection from "~/components/sections.tsx/reviews";
import AboutSection from "~/components/sections.tsx/about";
import CoachingPlansSection from "~/components/sections.tsx/coaching-plans";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center text-white">
      <div className="container flex flex-col items-center justify-center px-4 py-14">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <CoachingPlansSection />
        <ReviewsSection />

        {/* --- Footer / Contact CTA --- */}
        <footer className="w-full py-14 text-center">
          <h4 className="font-pixel mb-4 text-2xl text-lime-400">
            Join the Community
          </h4>
          <p className="mb-6 text-white/70">
            Get updates, tips and join the Discord server to ask questions &
            share your progress.
          </p>
          <Button className="font-pixel rounded-none bg-lime-400 px-8 py-3 text-lg text-black hover:bg-lime-300">
            Join Discord
          </Button>
          <p className="mt-10 text-xs text-white/30">
            © 2025 LemoN Coaching. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
