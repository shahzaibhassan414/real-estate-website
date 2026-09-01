import { waLink } from "@/app/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={waLink("Hi, I'd like to know more about your listings.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-[58px] w-[58px] items-center justify-center"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
      <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-[1.08]">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
