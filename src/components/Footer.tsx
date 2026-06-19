import { Camera, Mail } from "lucide-react";
import Link from "next/link";
import { navItems, profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.34em] text-gold uppercase">
            {profile.name}
          </p>
          <p className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
            &quot;{profile.footerQuote}&quot;
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <p className="text-sm font-semibold text-white">Navigate</p>
            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/58 transition hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Connect</p>
            <div className="mt-4 grid gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/58 transition hover:text-gold"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/58 transition hover:text-gold"
              >
                <Camera size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/42">
        Built for focused execution, disciplined growth, and long-term ownership.
      </div>
    </footer>
  );
}
