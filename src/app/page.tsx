import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { about, focus, profile, stack } from "@/lib/content";

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent">
      {index} / {label}
    </p>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative min-h-full">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <Header />

      <main className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <section className="grid gap-10 border-b border-line py-20 sm:py-28 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {profile.location} · {profile.school}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl italic leading-snug text-muted sm:text-3xl">
              {profile.role}. Cloud, platforms, and the cluster underneath the model.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            <p className="max-w-sm text-[15px] leading-7 text-muted">{profile.summary}</p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#work"
                className="rounded-full bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-bg transition-opacity hover:opacity-90"
              >
                Selected work
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:border-ink/40"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-b border-line py-16 sm:py-20">
          <SectionLabel index="01" label="About" />
          <div className="grid gap-8 lg:grid-cols-2">
            {about.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-24 border-b border-line py-16 sm:py-20">
          <SectionLabel index="02" label="Stack" />
          <h2 className="max-w-2xl font-display text-3xl italic text-ink sm:text-4xl">
            Tools I use to keep infrastructure repeatable and visible.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((group) => (
              <article key={group.title} className="bg-bg-elevated p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-b border-line py-16 sm:py-20">
          <SectionLabel index="03" label="Work" />
          <h2 className="max-w-2xl font-display text-3xl italic text-ink sm:text-4xl">
            Original repositories — infrastructure, software, and on-chain work.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
            Repositories with a real system behind them, drawn from my own GitHub account.
          </p>
          <Projects />
        </section>

        <section id="focus" className="scroll-mt-24 border-b border-line py-16 sm:py-20">
          <SectionLabel index="04" label="Focus" />
          <div className="rounded-2xl border border-line bg-accent-soft p-8 sm:p-12">
            <h2 className="font-display text-3xl italic text-ink sm:text-5xl">{focus.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{focus.body}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {focus.exploring.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-bg px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
          <SectionLabel index="05" label="Contact" />
          <h2 className="font-display text-4xl italic text-ink sm:text-6xl">
            Let’s talk infrastructure.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Open to platform, SRE, and HPC/AI infrastructure conversations. The fastest way to
            reach me is GitHub.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-bg hover:bg-accent"
            >
              github.com/{profile.githubUser}
            </a>
            <a
              href={profile.site}
              className="inline-flex rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:border-ink/40"
            >
              {profile.domain}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            {profile.name} · 2026
          </span>
          <span>Infrastructure · DevOps · SRE · HPC</span>
        </div>
      </footer>
    </div>
  );
}
