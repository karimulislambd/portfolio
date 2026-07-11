import Section from "@/components/Section";
import { certifications, education, experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience & Education">
      <div className="relative space-y-6 border-l border-border pl-6">
        {experience.map((e) => (
          <div key={e.role + e.org} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{e.role}</h3>
              <span className="text-xs text-muted">{e.period}</span>
            </div>
            <p className="text-sm text-accent">{e.org}</p>
            <ul className="mt-2 space-y-1">
              {e.points.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="relative">
          <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-2" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold">{education.degree}</h3>
            <span className="text-xs text-muted">{education.period}</span>
          </div>
          <p className="text-sm text-accent">{education.school}</p>
          <p className="mt-2 text-sm text-muted">{education.details}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-semibold text-muted">Certifications</h3>
        <div className="flex flex-wrap gap-1.5">
          {certifications.map((c) => (
            <span
              key={c}
              className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
