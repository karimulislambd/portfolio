import Section from "@/components/Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Toolkit" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="mb-3 text-sm font-semibold text-accent">{s.group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
