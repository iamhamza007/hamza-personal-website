import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-12 items-center justify-center gap-2 rounded border border-gold/50 bg-gold px-5 py-3 text-sm font-semibold text-black shadow-[0_16px_42px_rgba(212,175,55,0.2)] transition hover:-translate-y-0.5 hover:bg-gold-light"
      : "inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
        <ArrowRight size={16} />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
