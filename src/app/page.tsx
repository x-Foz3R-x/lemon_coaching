import HeroSection from "~/components/sections.tsx/hero";
import SkillsSection from "~/components/sections.tsx/skills";
import ReviewsSection from "~/components/sections.tsx/reviews";
import AboutSection from "~/components/sections.tsx/about";
import CoachingOffersSection from "~/components/sections.tsx/coaching-offers";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center text-white">
      <div className="container flex flex-col items-center justify-center px-4 py-14">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <CoachingOffersSection />
        <ReviewsSection />
      </div>
    </main>
  );
}
