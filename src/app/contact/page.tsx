import { Camera, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { contactLinks, profile } from "@/content/portfolio";

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Let us talk about projects, opportunities, and useful ideas."
          intro="Reach out for software, Shopify, trading-tool conversations, or professional opportunities."
        />

        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <div className="grid gap-5">
                <article className="glass-card p-6">
                  <MapPin className="text-gold" size={24} />
                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    Based in Kolkata, building for the internet.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    Available for meaningful conversations around development,
                    e-commerce, trading systems, and entrepreneurship.
                  </p>
                </article>

                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="glass-card flex items-center gap-4 p-5 transition hover:border-gold/45"
                  >
                    <span className="grid size-11 place-items-center rounded border border-gold/35 bg-gold/10 text-gold">
                      {link.label === "Email" ? <Mail size={20} /> : <Camera size={20} />}
                    </span>
                    <span>
                      <span className="block text-sm text-white/45">{link.label}</span>
                      <span className="block break-all text-base font-semibold text-white">
                        {link.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
              <p className="mt-4 text-sm leading-6 text-white/48">
                Direct email fallback:{" "}
                <a className="text-gold hover:text-gold-light" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </Reveal>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
