"use client";

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

      <DialogContent className="border-pixel-purple/50 container h-fit w-fit rounded-lg border bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-xl">
        <DialogTitle className="font-pixel text-center text-2xl">
          Ready to Level Up?
        </DialogTitle>
        <DialogDescription className="text-center text-base text-slate-400">
          Secure your spot and let&rsquo;s start climbing. <br /> Payment at the
          end of the session via PayPal or Blik.
        </DialogDescription>

        <div
          className="calendly-inline-widget border-pixel-purple/75 h-[620px] w-full min-w-xs overflow-hidden rounded-lg border bg-slate-800 px-4 shadow-inner sm:min-w-sm md:min-w-lg"
          data-url="https://calendly.com/lemon-coaching/1h-mid-coaching-session?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1d293d&text_color=ffffff&primary_color=f9ff00"
        />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </DialogContent>
    </Dialog>
  );
}
