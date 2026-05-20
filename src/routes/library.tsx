import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowRight, Heart } from "lucide-react";
import logoHeader from "@/assets/logo-header.png";

export const Route = createFileRoute("/library")({
  component: Library,
});

const stories = [
  {
    id: "tomten-och-skogen",
    title: "Tomten och skogen",
    description: "Follow the tomte and his little companion on a winter walk through the forest. Six first Swedish words for a gentle start.",
    tags: ["Folk", "Ages 2–4", "Available now"],
    tagColors: ["bg-snail-coral-soft text-snail-coral", "bg-snail-teal-soft text-snail-teal", "bg-snail-green-soft text-snail-green"],
    available: true,
  },
  {
    id: null,
    title: "Alfons i trädgården",
    description: "Coming soon.",
    tags: ["Nature", "Ages 3–5", "Coming soon"],
    tagColors: ["bg-muted text-snail-ink/60", "bg-muted text-snail-ink/60", "bg-muted text-snail-ink/40"],
    available: false,
  },
  {
    id: null,
    title: "Prinsessan och havet",
    description: "Coming soon.",
    tags: ["Folk", "Ages 4–6", "Coming soon"],
    tagColors: ["bg-muted text-snail-ink/60", "bg-muted text-snail-ink/60", "bg-muted text-snail-ink/40"],
    available: false,
  },
];

function Library() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoHeader} alt="lilla snigel" className="-mb-6 h-28 w-auto object-contain md:-mb-8 md:h-36" />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-card/60 px-2 py-1 text-sm md:flex">
            {[{ label: "Home", to: "/" }, { label: "Library", to: "/library" }, { label: "Languages", to: "/" }, { label: "About", to: "/" }].map((n, i) => (
              <Link
                key={n.label}
                to={n.to}
                className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors ${
                  i === 1 ? "bg-snail-coral-soft text-snail-coral font-semibold" : "text-snail-ink/80 hover:bg-muted"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div />
        </div>
      </header>

      {/* Library content */}
      <main className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="mb-10 border-t border-border pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-coral">Library</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-snail-ink md:text-4xl">Stories for your family.</h1>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[0_2px_0_oklch(0.9_0.02_80)] md:p-12">
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.title}
                className={`rounded-[1.5rem] border border-border bg-background overflow-hidden ${!story.available ? "opacity-50" : ""}`}
              >
                {/* Book shelf illustration */}
                <div className="flex items-end gap-2 bg-snail-yellow-soft/50 px-6 pt-6 h-36">
                  <div className="rounded-t-md bg-snail-teal w-12 h-24 flex items-center justify-center">
                    <span className="text-[7px] text-white font-semibold text-center leading-tight px-1">Äventyret i skogen</span>
                  </div>
                  <div className="rounded-t-md bg-snail-coral w-10 h-20 flex items-center justify-center">
                    <span className="text-[7px] text-white font-semibold text-center leading-tight px-1">Mina känslor</span>
                  </div>
                  <div className="rounded-t-md bg-snail-green w-11 h-[5.5rem] flex items-center justify-center">
                    <span className="text-[7px] text-white font-semibold text-center leading-tight px-1">Bondgårdens vänner</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, i) => (
                      <span key={tag} className={`rounded-full px-3 py-1 text-xs font-semibold ${story.tagColors[i]}`}>{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold leading-tight text-snail-ink mb-3" style={{ fontFamily: "Fraunces, serif" }}>
                    {story.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-snail-ink/70 mb-5">{story.description}</p>
                  {story.available && story.id && (
                    <Link
                      to={`/library/${story.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-snail-coral px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
                    >
                      Start reading
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/20">
                        <Play className="h-3 w-3 fill-white text-white" />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-snail-ink text-snail-cream">
        <div className="border-t border-snail-cream/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm text-snail-cream/60 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <a href="#" className="hover:text-snail-cream">Privacy policy</a>
              <a href="#" className="hover:text-snail-cream">Terms of use</a>
              <span>© 2026 Lilla Snigel</span>
            </div>
            <p className="inline-flex items-center gap-2">
              Made with <Heart className="h-4 w-4 fill-snail-coral text-snail-coral" /> in Stockholm
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
