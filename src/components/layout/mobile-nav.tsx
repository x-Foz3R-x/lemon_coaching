import Link from "next/link";
import { env } from "~/env";

import { Discord, Instagram, Youtube } from "../icons";
import PixelMesh from "../ui/pixel-mesh";

export default function MobileNav() {
  return (
    <nav className="relative flex h-9 items-center text-sm text-white sm:hidden">
      <Link
        href={env.NEXT_PUBLIC_INSTAGRAM_URL}
        className="group relative h-full px-3 py-1.5"
      >
        <Instagram className="relative size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
        <PixelMesh
          columns={4}
          glass
          className="transition-all group-hover:bg-pink-600/35"
        />
      </Link>
      <Link
        href={env.NEXT_PUBLIC_YOUTUBE_URL}
        className="group relative h-full px-3 py-1.5"
      >
        <Youtube className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
        <PixelMesh
          columns={4}
          className="transition-all group-hover:bg-red-600/35"
          glass
        />
      </Link>
      <Link
        href={env.NEXT_PUBLIC_DISCORD_URL}
        className="group relative h-full px-3 py-1.5"
      >
        <Discord className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
        <PixelMesh
          columns={4}
          className="transition-all group-hover:bg-indigo-600/35"
          glass
        />
      </Link>
    </nav>
  );
}
