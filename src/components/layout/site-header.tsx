import Link from "next/link";

import { Logo } from "../icons";
import PixelMesh from "../ui/pixel-mesh";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default async function SiteHeader() {
  return (
    <header id="nav" className="sticky top-0 z-50 w-full fill-white text-white">
      <div className="container mx-auto flex h-16 w-full flex-col items-center justify-center px-5 sm:flex-row sm:justify-between sm:gap-10">
        <Link
          href="/"
          className="group relative flex h-9 w-[18rem] shrink-0 items-center px-3 text-center"
        >
          <Logo className="w-full fill-white drop-shadow-[0_0_1px_#000,_0_0_2px_rgba(255,255,255,0.75)]" />
          <PixelMesh
            columns={24}
            className="group-hover:bg-neon-yellow/25 transition-all"
            glass
          />
        </Link>

        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
