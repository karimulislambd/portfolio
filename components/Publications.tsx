import Section from "@/components/Section";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <Section id="publications" eyebrow="02 — Research" title="Publications">
      <p className="-mt-5 mb-8 max-w-2xl text-muted">
        First author on multiple peer-reviewed AI works in computer vision and explainable AI.
      </p>
      <div className="space-y-4">
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-base font-semibold">{pub.title}</h3>
              <span className="shrink-0 rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-muted">
                {pub.year}
              </span>
            </div>
            <p className="mt-1 text-sm text-accent">
              {pub.role} · {pub.venue}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{pub.highlight}</p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {pub.linkLabel ?? "View"}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
