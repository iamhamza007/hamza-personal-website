import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/content/portfolio";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main>
        <PageHeader
          eyebrow="Projects"
          title="Products, tools, and brands built through hands-on execution."
          intro="A focused view of Hamza's trading software, cloud journal concepts, and Shopify brand builds."
        />

        <Section
          eyebrow="Selected Work"
          title="From trading systems to e-commerce storefronts."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.05}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
