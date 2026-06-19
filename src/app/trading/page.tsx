import { BarChart3, BookOpenCheck, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { tradingFocus } from "@/content/portfolio";

const principles = [
  {
    icon: ShieldCheck,
    title: "Risk First",
    body: "Every trading idea is judged through risk, invalidation, review quality, and emotional control.",
  },
  {
    icon: BookOpenCheck,
    title: "Review Systems",
    body: "Journaling, screenshots, analytics, and structured reviews turn trading into a measurable process.",
  },
  {
    icon: BarChart3,
    title: "Data-Led Growth",
    body: "Tools are built to make performance easier to inspect, patterns easier to identify, and habits easier to improve.",
  },
];

export default function TradingPage() {
  return (
    <SiteShell>
      <main>
        <PageHeader
          eyebrow="Trading Journey"
          title="A disciplined approach to Gold, price action, and trading review."
          intro="Trading is positioned as a serious practice: study the market, protect capital, review decisions, and improve through systems."
        />

        <Section
          eyebrow="Focus"
          title="Markets, methods, and execution habits."
          intro="Hamza's primary focus is XAUUSD, supported by study across major FX pairs and BTCUSD."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {tradingFocus.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08}>
                <article className="glass-card min-h-[240px] p-6">
                  <span className="grid size-12 place-items-center rounded border border-gold/35 bg-gold/10 text-gold">
                    <group.icon size={22} />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/64"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          className="bg-onyx"
          eyebrow="Process"
          title="Trading and software work together."
          intro="The same builder mindset behind Shopify stores and web apps also shapes trading tools: track the inputs, review the outcomes, and refine the process."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <article className="glass-card h-full p-6">
                  <principle.icon className="text-gold" size={28} />
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {principle.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold tracking-[0.32em] text-gold uppercase">
                Note
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                No hype, no performance claims, just the discipline of getting better.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/62">
                Trading content on this site reflects personal study, software building,
                and process development. It is not financial advice.
              </p>
            </div>
          </Reveal>
        </Section>
      </main>
    </SiteShell>
  );
}
