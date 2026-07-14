import Section from "@/components/Section";
import { profile } from "@/lib/data";

const WA_LINK = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  "Hi Karimul, I saw your portfolio and would like to connect.",
)}`;

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Let's talk" title="Get in touch">
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="mx-auto max-w-xl text-muted">
          Open to AI/ML engineering roles — {profile.availability.toLowerCase()}. The fastest way
          to reach me is WhatsApp, or ask my AI assistant anything using the chat bubble.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Message on WhatsApp
          </a>
          <a
            href={profile.cv}
            download
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
