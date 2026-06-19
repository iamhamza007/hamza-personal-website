import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  intro,
}: SectionProps) {
  return (
    <section className={`section-band ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        {title ? (
          <div className="mb-12 max-w-3xl">
            {eyebrow ? (
              <p className="mb-4 text-sm font-semibold tracking-[0.32em] text-gold uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-5 text-base leading-8 text-white/64 sm:text-lg">{intro}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-midnight pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.12),transparent_34%,rgba(22,163,74,0.08)_70%,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold tracking-[0.34em] text-gold uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">{intro}</p>
      </div>
    </section>
  );
}
