import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Heart } from "lucide-react";
import { useState } from "react";
import logoHeader from "@/assets/logo-header.png";

export const Route = createFileRoute("/library")({
  component: Library,
});

const stories = [
  {
    id: "tomten-och-skogen",
    title: "Tomten och skogen",
    description: "Follow the tomte and his little companion on a winter walk through the forest. Six first Swedish words for a gentle start.",
    category: "Folk",
    age: "2–4",
    level: "Beginner",
    available: true,
    img: "https://drive.google.com/thumbnail?id=18VZk54Q1beFbmoC2sQFl-lQOtNrvJ70g&sz=w600",
  },
  {
    id: "marina-i-simhallen",
    title: "Marina i simhallen",
    description: "Marina visits the swimming hall for the first time. A story about courage, friendship and trying again.",
    category: "Everyday life",
    age: "3–5",
    level: "Beginner",
    available: true,
    img: null,
  },
  {
    id: null,
    title: "Prinsessan och havet",
    description: "Coming soon.",
    category: "Folk",
    age: "4–6",
    level: "Elementary",
    available: false,
    img: null,
  },
];

const AGE_FILTERS = ["All ages", "2–4", "3–5", "4–6"];
const CATEGORY_FILTERS = ["All categories", "Folk", "Everyday life"];
const LEVEL_FILTERS = ["All levels", "Beginner", "Elementary"];

export function Library() {
  const [age, setAge] = useState("All ages");
  const [category, setCategory] = useState("All categories");
  const [level, setLevel] = useState("All levels");

  const filtered = stories.filter((s) => {
    if (age !== "All ages" && s.age !== age) return false;
    if (category !== "All categories" && s.category !== category) return false;
    if (level !== "All levels" && s.level !== level) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoHeader} alt="lilla snigel" className="-mb-6 h-28 w-auto object-contain md:-mb-8 md:h-36" />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-card/60 px-2 py-1 text-sm md:flex">
            {[{ label: "Home", to: "/" }, { label: "Library", to: "/library" }, { label: "Languages", to: "/" }, { label: "About", to: "/about" }].map((n, i) => (
              <Link key={n.label} to={n.to} className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors ${i === 1 ? "bg-snail-coral-soft text-snail-coral font-semibold" : "text-snail-ink/80 hover:bg-muted"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="mb-10 border-t border-border pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-coral">Library</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-snail-ink md:text-4xl">Stories for your family.</h1>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-snail-ink/40">Age</span>
            <div className="flex gap-1.5 flex-wrap">
              {AGE_FILTERS.map((f) => (
                <button key={f} onClick={() => setAge(f)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${age === f ? "bg-snail-teal-soft text-snail-teal" : "bg-card border border-border text-snail-ink/60 hover:border-snail-teal/50"}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-snail-ink/40">Category</span>
            <div className="flex gap-1.5 flex-wrap">
              {CATEGORY_FILTERS.map((f) => (
                <button key={f} onClick={() => setCategory(f)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${category === f ? "bg-snail-coral-soft text-snail-coral" : "bg-card border border-border text-snail-ink/60 hover:border-snail-coral/50"}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-snail-ink/40">Level</span>
            <div className="flex gap-1.5 flex-wrap">
              {LEVEL_FILTERS.map((f) => (
                <button key={f} onClick={() => setLevel(f)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${level === f ? "bg-snail-green-soft text-snail-green" : "bg-card border border-border text-snail-ink/60 hover:border-snail-green/50"}`}>{f}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Story grid */}
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[0_2px_0_oklch(0.9_0.02_80)] md:p-12">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-snail-ink/40 text-sm">No stories match your filters yet — more coming soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {filtered.map((story) => (
                <div key={story.title} className={`rounded-[1.5rem] border border-border bg-background overflow-hidden ${!story.available ? "opacity-50" : ""}`}>
                  {story.img ? (
                    <img src={story.img} alt={story.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="flex items-end gap-2 bg-snail-yellow-soft/50 px-6 pt-6 h-36">
                      <div className="rounded-t-md bg-snail-teal w-12 h-24 flex items-center justify-center">
                        <span className="text-[7px] text-white font-semibold text-center leading-tight px-1">Marina i simhallen</span>
                      </div>
                      <div className="rounded-t-md bg-snail-coral w-10 h-20 flex items-center justify-center">
                        <span className="text-[7px] text-white font-semibold text-center leading-tight px-1">Simhall</span>
                      </div>
                      <div className="rounded-t-md bg-snail-green w-11 h-[5.5rem] flex items-center justify-center">
                        <span className="text-[7px] text-white font-semibold text-center leading-tight px-1">Vänner</span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="rounded-full bg-snail-coral-soft px-3 py-1 text-xs font-semibold text-snail-coral">{story.category}</span>
                      <span className="rounded-full bg-snail-teal-soft px-3 py-1 text-xs font-semibold text-snail-teal">Ages {story.age}</span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${story.available ? "bg-snail-green-soft text-snail-green" : "bg-muted text-snail-ink/40"}`}>
                        {story.available ? "Available now" : "Coming soon"}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold leading-tight text-snail-ink mb-2" style={{ fontFamily: "Fraunces, serif" }}>{story.title}</h2>
                    <p className="text-sm leading-relaxed text-snail-ink/70 mb-5">{story.description}</p>
                    {story.available && story.id && (
                      <Link to={`/library/${story.id}`} className="inline-flex items-center gap-2 rounded-full bg-snail-coral px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-105">
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
          )}
        </div>
      </main>

      <footer className="bg-snail-ink text-snail-cream">
        <div className="border-t border-snail-cream/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm text-snail-cream/60 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <a href="#" className="hover:text-snail-cream">Privacy policy</a>
              <a href="#" className="hover:text-snail-cream">Terms of use</a>
              <span>© 2026 Lilla Snigel</span>
            </div>
            <p className="inline-flex items-center gap-2">Made with <Heart className="h-4 w-4 fill-snail-coral text-snail-coral" /> in Stockholm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
