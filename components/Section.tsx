import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16">
      <p className="eyebrow mb-1">{eyebrow}</p>
      <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}
