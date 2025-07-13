import Link from "next/link";

import PixelMesh from "../ui/pixel-mesh";
import { Discord, Instagram, Logo, Youtube } from "../icons";

export default async function SiteHeader() {
  return (
    <header id="nav" className="sticky top-0 z-50 w-full fill-white text-white">
      <div className="container mx-auto flex h-16 w-full items-start justify-center gap-10 px-5 sm:items-center sm:justify-between">
        <div className="flex flex-col items-center justify-center">
          <Link
            href="/"
            className="relative h-9 w-[17.25rem] shrink-0 scroll-smooth px-3 text-center"
          >
            <Logo className="w-full fill-white py-2 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
            <PixelMesh columns={23} glass />
          </Link>

          <nav className="relative flex h-9 items-center text-sm text-white sm:hidden">
            <Link href="/" className="h-full px-3 py-1.5">
              <Instagram className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
            </Link>
            <Link href="/" className="h-full px-3 py-1.5">
              <Youtube className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
            </Link>
            <Link href="/" className="h-full px-3 py-1.5">
              <Discord className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
            </Link>

            <PixelMesh columns={12} glass />
          </nav>
        </div>

        {/* Main Navigation */}
        <nav className="relative hidden h-9 items-center text-sm text-white sm:flex">
          <Link href="/" className="h-full px-3 py-1.5">
            <Instagram className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
          </Link>
          <Link href="/" className="h-full px-3 py-1.5">
            <Youtube className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
          </Link>
          <Link href="/" className="h-full px-3 py-1.5">
            <Discord className="size-6 drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
          </Link>

          <PixelMesh columns={12} glass />
        </nav>
      </div>
    </header>
  );
}
