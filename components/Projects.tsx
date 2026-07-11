import Section from "@/components/Section";
import { projects } from "@/lib/data";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="What I've shipped" title="Live Projects">
      <p className="-mt-5 mb-8 max-w-2xl text-muted">
        Four deployed apps spanning text, vision, audio, and production ML — each with a live
        demo and open-source code.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <div className="mb-3 h-1 w-10 rounded-full" style={{ background: p.accent }} />
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                Live demo <ArrowIcon />
              </a>
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-foreground"
              >
                Code <ArrowIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
