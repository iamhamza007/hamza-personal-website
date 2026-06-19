import Image from "next/image";
import { Mail, MoveRight } from "lucide-react";
import { ButtonLink } from "@/components/Buttons";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { SkillGroup } from "@/components/SkillGroup";
import {
  featuredStats,
  identities,
  profile,
  projects,
  skillGroups,
} from "@/content/portfolio";

export default function Home() {
  const featuredProject = projects[0];

  return (
    <SiteShell>
      <main>
        <section className="relative min-h-[76vh] overflow-hidden bg-black pt-20">
          <Image
            src="/hamza-feroz-headshot.jpeg"
            alt="Hamza Feroz"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_20%] opacity-58 sm:object-[72%_20%] lg:object-[78%_18%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.9)_31%,rgba(3,3,3,0.52)_62%,rgba(3,3,3,0.36)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.05)_56%,#030303_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

          <div className="relative mx-auto flex min-h-[calc(76vh-5rem)] max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="mb-5 inline-flex items-center rounded border border-gold/35 bg-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.32em] text-gold uppercase backdrop-blur">
                  Entrepreneur / Developer / Trader
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl">
                  {profile.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  I am Hamza Feroz, a BA student from Kolkata building digital
                  products across e-commerce, trading systems, and modern web
                  experiences.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/projects">View Projects</ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Contact Me
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-12 grid gap-3 sm:grid-cols-3">
                  {featuredStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded border border-white/12 bg-black/34 p-4 backdrop-blur-md"
                    >
                      <p className="text-2xl font-semibold text-gold">{stat.value}</p>
                      <p className="mt-1 text-xs leading-5 text-white/58">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Section
          eyebrow="Identity"
          title="Three lanes, one direction: building useful things with discipline."
          intro="The website is shaped around the work that matters most right now: software, e-commerce, and market study."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {identities.map((identity, index) => (
              <Reveal key={identity.title} delay={index * 0.08}>
                <article className="glass-card min-h-[240px] p-6">
                  <span className="grid size-12 place-items-center rounded border border-gold/35 bg-gold/10 text-gold">
                    <identity.icon size={22} />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {identity.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {identity.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          className="bg-onyx"
          eyebrow="Featured Build"
          title="The Pips Project turns trading review into a product system."
          intro="A personal trading journal evolved into a focused software product for tracking, analytics, strategy review, and performance improvement."
        >
          <Reveal>
            <ProjectCard {...featuredProject} />
          </Reveal>
        </Section>

        <Section
          eyebrow="Skills"
          title="A practical stack across code, stores, markets, and business."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.slice(0, 5).map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <SkillGroup {...group} />
              </Reveal>
            ))}
          </div>
        </Section>

        <section className="border-y border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.14),rgba(5,5,5,1)_38%,rgba(13,148,136,0.1))]">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="text-sm font-semibold tracking-[0.32em] text-gold uppercase">
                Let us connect
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Have an opportunity, idea, or project?
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                <Mail size={16} />
                Contact Hamza
              </ButtonLink>
              <ButtonLink href="/trading" variant="secondary">
                Trading Journey
                <MoveRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
