import { profile } from "@/lib/data";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-semibold tracking-tight">
          <span className="accent-gradient">MK</span>
          <span className="text-muted"> / Islam</span>
        </a>
        <div className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
