import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-8 pt-28">
      {/* Bento grid: intro + photo + stats + availability */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-[auto_auto]">
        {/* Intro tile */}
        <div className="tile col-span-2 flex flex-col justify-between p-7 sm:col-span-3 sm:row-span-2">
          <div>
            <p className="eyebrow mb-4">Available · full-time from Aug 2026</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Md Karimul Islam
            </h1>
            <p className="mt-2 text-lg font-semibold sm:text-2xl">
              <span className="accent-text">AI / ML Engineer</span>
            </p>
            <p className="mt-1 font-mono text-xs text-muted sm:text-sm">
              Computer Vision · LLM · Explainable AI
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {profile.summary}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5">
              View projects
            </a>
            <a href={profile.cv} download className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">
              Download CV
            </a>
            <a href="#contact" className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">
              Contact
            </a>
          </div>
        </div>

        {/* Photo tile */}
        <div className="tile relative col-span-2 overflow-hidden sm:col-span-1 sm:row-span-2">
          <Image
            src="/karimul.jpg"
            alt={profile.name}
            width={400}
            height={400}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        {/* Stat tiles */}
        <div className="tile flex flex-col justify-center p-5">
          <div className="text-3xl font-bold accent-text">5</div>
          <div className="mt-1 text-xs text-muted">Live AI projects</div>
        </div>
        <div className="tile flex flex-col justify-center p-5">
          <div className="text-3xl font-bold accent-text">4</div>
          <div className="mt-1 text-xs text-muted">Publications</div>
        </div>
        <div className="tile col-span-2 flex flex-col justify-center p-5 sm:col-span-2">
          <div className="text-3xl font-bold accent-text">3.90<span className="text-lg text-muted">/4.00</span></div>
          <div className="mt-1 text-xs text-muted">CGPA · B.Sc. CSE, Varendra University</div>
        </div>
      </div>
    </section>
  );
}
