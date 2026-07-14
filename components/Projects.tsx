import { projects } from "@/lib/data";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ p, featured }: { p: (typeof projects)[number]; featured?: boolean }) {
  return (
    <article
      className={`tile tile-hover group flex flex-col p-6 ${featured ? "sm:col-span-2" : ""}`}
    >
      <div className="mb-3 h-1 w-10 rounded-full" style={{ background: p.accent }} />
      <h3 className={`font-semibold ${featured ? "text-xl" : "text-lg"}`}>{p.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4 text-sm font-medium">
        <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 accent-text hover:underline">
          Live demo <ArrowIcon />
        </a>
        <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-foreground">
          Code <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-14">
      <p className="eyebrow mb-1">What I've shipped</p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Live Projects</h2>
      <p className="mb-8 max-w-2xl text-muted">
        Five deployed apps spanning research, text, vision, audio, and production ML — each with a
        live demo and open-source code.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.name} p={p} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
