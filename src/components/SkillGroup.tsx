import type { LucideIcon } from "lucide-react";

export function SkillGroup({
  title,
  icon: Icon,
  skills,
}: {
  title: string;
  icon: LucideIcon;
  skills: string[];
}) {
  return (
    <article className="glass-card min-h-[250px] p-6">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded border border-gold/35 bg-gold/10 text-gold">
          <Icon size={19} />
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/68"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
