"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, profile } from "@/content/portfolio";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/72 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={44}
            height={44}
            className="rounded border border-gold/40"
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.28em] text-white uppercase">
              {profile.name}
            </span>
            <span className="block text-xs text-white/48">Developer / Trader / Entrepreneur</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/10 text-gold"
                    : "text-white/68 hover:bg-white/7 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center rounded border border-gold/45 bg-gold px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_42px_rgba(212,175,55,0.18)] transition hover:-translate-y-0.5 hover:bg-gold-light lg:inline-flex"
        >
          Contact Me
        </Link>

        <button
          type="button"
          className="grid size-11 place-items-center rounded border border-white/15 bg-white/8 text-white lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/94 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-gold/15 text-gold"
                      : "bg-white/5 text-white/72 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
