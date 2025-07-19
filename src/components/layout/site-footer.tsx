import Link from "next/link";
import { env } from "~/env";

import SectionHeader from "../section-header";
import PixelButton from "../ui/pixel-button";
import PixelBackground from "../ui/pixel-background";

export default function SiteFooter() {
  return (
    <footer className="relative w-full">
      <PixelBackground
        className="w-full py-20 text-center"
        meshClassName="bg-gradient-to-b from-transparent to-gray-700/20"
      >
        <div className="mb-8 flex flex-col items-center gap-4">
          <SectionHeader
            title="Join the Community"
            className="text-neon-yellow m-0 text-2xl leading-4"
          />
          <p className="text-gray-400">
            Get updates, tips and join the Discord server to ask <br />
            questions & share your progress.
          </p>
          <PixelButton
            href={env.NEXT_PUBLIC_DISCORD_URL}
            target="_blank"
            className="mt-2"
          >
            Join Discord
          </PixelButton>
        </div>

        <p className="text-sm text-gray-400 italic">
          „It&rsquo;s not about playing more, it&rsquo;s about playing better.”
        </p>
      </PixelBackground>

      <div className="w-full bg-gray-700/20 p-2.5">
        <div className="container mx-auto flex justify-between gap-4">
          <p className="font-mono text-xs text-gray-500">
            &copy; {new Date().getFullYear()} LemoN Coaching. All rights
            reserved.
          </p>

          <p className="font-mono text-[10px] text-gray-500">
            Crafted by{" "}
            <Link
              href={env.NEXT_PUBLIC_AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pixel-purple/80 text-pixel-purple/50 underline"
            >
              Foz3R
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
