import Link from "next/link";

import PixelMesh from "../ui/pixel-mesh";
import { Discord, Instagram, Youtube } from "../icons";

export default async function SiteHeader() {
  return (
    <header id="nav" className="sticky top-0 z-50 w-full fill-white text-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-10 px-5">
        <Link
          href="/"
          className="font-pixel relative flex h-10 shrink-0 items-center gap-5 px-4 text-2xl font-bold text-white text-shadow-[0_0_2px_#000,_0_0_4px_#fff]"
        >
          LemoN Coaching
          <PixelMesh columns={22} glass />
        </Link>

        {/* Main Navigation */}
        <div className="hidden items-center gap-10 text-sm sm:flex">
          <nav className="relative flex h-10 text-white">
            <Link href="/" className="h-full px-4 py-2">
              <Instagram className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
            </Link>
            <Link href="/" className="h-full px-4 py-2">
              <Youtube className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
            </Link>
            <Link href="/" className="h-full px-4 py-2">
              <Discord className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
            </Link>

            <PixelMesh columns={12} glass />
          </nav>
        </div>
      </div>
    </header>
  );
}
