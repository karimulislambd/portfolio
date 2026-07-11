import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-20 pt-36 text-center">
        {/* Headshot avatar with a gradient ring. */}
        <div className="mb-7 rounded-full bg-gradient-to-br from-accent to-accent-2 p-[3px]">
          <Image
            src="/karimul.jpg"
            alt={profile.name}
            width={128}
            height={128}
            priority
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>

        <span className="mb-4 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted">
          {profile.availability}
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium sm:text-xl">
          <span className="accent-gradient">{profile.role}</span>
        </p>
        <p className="mt-2 text-sm text-muted sm:text-base">{profile.tagline}</p>

        <p className="mt-6 max-w-2xl text-balance text-muted">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
