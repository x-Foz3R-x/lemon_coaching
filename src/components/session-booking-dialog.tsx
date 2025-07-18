"use client";

import { env } from "~/env";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import PixelButton from "./ui/pixel-button";

export default function SessionBookingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PixelButton size="sm" className="mx-4">
          Book Your Session
        </PixelButton>
      </DialogTrigger>

      <DialogContent className="border-pixel-purple/50 container h-[calc(100%-10rem)] rounded-lg border bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-xl">
        <DialogTitle className="font-pixel text-center text-2xl">
          Ready to Level Up?
        </DialogTitle>
        <DialogDescription className="text-center text-base text-slate-400">
          Secure your spot and let&rsquo;s start climbing.
        </DialogDescription>

        <div className="border-pixel-purple/75 relative w-full flex-1 overflow-scroll rounded-xl border bg-white shadow-inner">
          <iframe
            src={env.NEXT_PUBLIC_BOOKING_URL}
            loading="lazy"
            title="Booking Calendar"
            className="absolute inset-0 h-full w-full border-none"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
