import { ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectCardProps = {
  name: string;
  category: string;
  href?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: LucideIcon;
};

export function ProjectCard({
  name,
  category,
  href,
  description,
  highlights,
  technologies,
  icon: Icon,
}: ProjectCardProps) {
  return (
    <article className="glass-card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-5">
        <div className="grid size-12 shrink-0 place-items-center rounded border border-gold/35 bg-gold/10 text-gold">
          <Icon size={22} />
        </div>
        <span className="rounded border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
          {category}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>

      <ul className="mt-6 grid gap-3 text-sm text-white/66">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-white/58"
          >
            {technology}
          </span>
        ))}
      </div>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-light"
        >
          Visit project
          <ExternalLink size={15} />
        </a>
      ) : null}
    </article>
  );
}
