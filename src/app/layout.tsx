import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Silkscreen } from "next/font/google";

import { cn } from "~/lib/utils";

import SiteHeader from "~/components/layout/site-header";
import SiteFooter from "~/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Lemon Coaching",
  description: "League of Legends Coaching",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(geist.variable, silkscreen.variable)}>
      <body className="bg-gradient-to-b from-gray-900 to-gray-950 text-pretty antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
