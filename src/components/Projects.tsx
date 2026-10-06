"use client";

import { useMemo, useState } from "react";
import { areas, projects, type Area } from "@/lib/content";

export function Projects() {
  const [area, setArea] = useState<Area>("All");
  const visible = useMemo(
    () => (area === "All" ? projects : projects.filter((project) => project.area === area)),
    [area],
  );

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {areas.map((item) => {
          const selected = item === area;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setArea(item)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                selected
                  ? "border-accent bg-accent text-bg"
                  : "border-line text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {visible.map((project) => (
            <li key={project.href}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 py-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] sm:items-baseline"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {project.tag} · {project.year}
                  </p>
                  <h3 className="mt-2 text-xl text-ink group-hover:text-accent">{project.title}</h3>
                </div>
                <p className="text-[15px] leading-7 text-muted">{project.description}</p>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  Repo →
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
