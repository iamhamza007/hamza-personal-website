import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import {
  aboutParagraphs,
  achievements,
  educationItems,
  experience,
  interests,
  values,
} from "@/content/portfolio";

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHeader
          eyebrow="About"
          title="A self-taught builder growing through software, stores, and markets."
          intro="Hamza Feroz is a BA student from Kolkata with a hands-on path through coding, Shopify, trading tools, and digital entrepreneurship."
        />

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal>
              <div className="relative overflow-hidden rounded border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(212,175,55,0.18),transparent_42%,rgba(22,163,74,0.08))]" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/hamza-feroz-headshot.jpeg"
                    alt="Hamza Feroz"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-[center_18%]"
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-sm font-semibold tracking-[0.32em] text-gold uppercase">
                  Profile
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Discipline, curiosity, and execution across different arenas.
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-5 text-base leading-8 text-white/66">
                {aboutParagraphs.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={index * 0.08}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {educationItems.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <article className="glass-card min-h-[180px] p-5">
                      <item.icon className="text-gold" size={22} />
                      <h3 className="mt-4 text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/58">{item.body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          className="bg-onyx"
          eyebrow="Experience"
          title="Practical work across e-commerce and trading."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.08}>
                <article className="glass-card h-full p-6">
                  <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {item.description}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-white/66">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={17} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section eyebrow="Growth" title="Achievements, interests, and values.">
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal>
              <ListBlock title="Achievements" items={achievements} />
            </Reveal>
            <Reveal delay={0.08}>
              <ListBlock title="Interests" items={interests} />
            </Reveal>
            <Reveal delay={0.16}>
              <ListBlock title="Values" items={values} />
            </Reveal>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="glass-card h-full p-6">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/64"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
