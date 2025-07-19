import Link from "next/link";
import { env } from "~/env";

import { Discord, Instagram, Logo, Youtube } from "../icons";
import PixelBackground from "../ui/pixel-background";

export default async function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full fill-white text-white">
      <PixelBackground
        rows={4}
        className="w-full"
        meshClassName="bg-gradient-to-b from-gray-800 to-transparent backdrop-blur-md backdrop-saturate-150"
      >
        <div className="container mx-auto flex w-full flex-col items-center justify-center py-1 sm:flex-row sm:justify-between sm:gap-10 sm:py-0">
          <Link
            href="/"
            className="hover:fill-neon-yellow flex h-9 shrink-0 items-center fill-white px-3 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)] transition-all hover:drop-shadow-none sm:h-14"
          >
            <Logo className="h-5" />
          </Link>

          <nav className="flex h-7 items-center sm:h-14">
            <Link
              href={env.NEXT_PUBLIC_INSTAGRAM_URL}
              target="_blank"
              className="flex h-full shrink-0 items-center fill-white px-3 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)] transition-all hover:fill-pink-400 hover:drop-shadow-none"
            >
              <Instagram className="size-6" />
            </Link>
            <Link
              href={env.NEXT_PUBLIC_YOUTUBE_URL}
              target="_blank"
              className="flex h-full shrink-0 items-center fill-white px-3 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)] transition-all hover:fill-red-400 hover:drop-shadow-none"
            >
              <Youtube className="size-6" />
            </Link>
            <Link
              href={env.NEXT_PUBLIC_DISCORD_URL}
              target="_blank"
              className="flex h-full shrink-0 items-center fill-white px-3 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)] transition-all hover:fill-indigo-400 hover:drop-shadow-none"
            >
              <Discord className="size-6" />
            </Link>
          </nav>
        </div>
      </PixelBackground>
    </header>
  );
}
