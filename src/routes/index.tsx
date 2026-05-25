import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Facebook, Linkedin, Instagram, Heart } from "lucide-react";
import { useState } from "react";
import logoHeader from "@/assets/logo-header.png";
import heroSnail from "@/assets/hero-snail.png";
import featStories from "@/assets/feat-stories.png";
import featRepetition from "@/assets/feat-repetition.png";
import featTogether from "@/assets/feat-together.png";
import featCultural from "@/assets/feat-cultural.png";
import step1 from "@/assets/step-1.png";
import step2 from "@/assets/step-2.png";
import step3 from "@/assets/step-3.png";
import step4 from "@/assets/step-4.png";
import footerHouse from "@/assets/footer-house.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Home", to: "/" },
  { label: "Library", to: "/library" },
  { label: "Languages", to: "/" },
  { label: "About", to: "/about" },
];

const features = [
  { img: featStories, title: "Stories first", body: "Language lives inside narrative, not vocabulary lists. Every word is anchored in a moment." },
  { img: featRepetition, title: "Gentle repetition", body: "Each target word appears naturally two to three times per story. The science of acquisition at work." },
  { img: featTogether, title: "Together", body: "The child is the protagonist. The adult is the guide. One tap to advance. No menus, no distractions." },
  { img: featCultural, title: "Cultural roots", body: "Swedish folklore, seasons and traditions woven into every story. Language as a window into belonging." },
];

const steps = [
  { n: "01", color: "bg-snail-coral-soft text-snail-coral", img: step1, title: "Choose a story", body: "Browse by age, theme, or difficulty. Every story is short enough to finish in one sitting." },
  { n: "02", color: "bg-snail-teal-soft text-snail-teal", img: step2, title: "Sit together", body: "Place the device between you. The story plays in both Swedish and can be translated to English." },
  { n: "03", color: "bg-snail-yellow-soft text-snail-yellow", img: step3, title: "Tap to continue", body: "One tap anywhere advances the story. The narrator reads aloud. The child listens and looks." },
  { n: "04", color: "bg-snail-green-soft text-snail-green", img: step4, title: "Play the game", body: "After the story, a gentle picture-matching game reviews every word learned." },
];

function LanguageToggle() {
  const [lang, setLang] = useState<"EN" | "SV">("EN");
  return (
    <div className="flex flex-col items-end gap-1">
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-snail-ink/40">Language</span>
      <div className="flex gap-1 rounded-full border border-border bg-white/70 p-[0.2rem]">
        {(["EN", "SV"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`rounded-full px-3 py-1 text-[0.8rem] font-semibold transition-all duration-150 ${
              lang === l ? "bg-snail-coral-soft text-snail-coral" : "bg-transparent text-snail-ink/70 opacity-70 hover:opacity-100"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoHeader} alt="lilla snigel" className="-mb-6 h-28 w-auto object-contain md:-mb-8 md:h-36" />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-card/60 px-2 py-1 text-sm md:flex">
            {nav.map((n, i) => (
              <Link
                key={n.label}
                to={n.to}
                className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors ${
                  i === 0 ? "bg-snail-coral-soft text-snail-coral font-semibold" : "text-snail-ink/80 hover:bg-muted"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <LanguageToggle />
        </div>
        <p className="-mt-3 pl-2 text-xs italic leading-snug text-muted-foreground md:-mt-4">
          "Born from Viveka, aged 2,<br />singing her first Swedish words."
        </p>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.05] text-snail-ink md:text-6xl">
              Learning is a journey<br />better done together.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-snail-ink/75">
              Lilla Snigel is built for multilingual families who want to bond over a story,
              reading together, learning together. Children learn best when they feel safe,
              when there is repetition, and when the adults they love are right there beside them.
              No app can replace that moment. We just make it a little richer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/library" className="inline-flex items-center gap-2 rounded-full bg-snail-coral px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_oklch(0.72_0.17_22/0.7)] transition hover:brightness-105">
                Choose a story
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/20">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-snail-ink hover:bg-muted">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-snail-ink/30">
                  <Play className="h-3.5 w-3.5 fill-snail-ink text-snail-ink" />
                </span>
                See how it works
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute right-10 top-0 h-40 w-40 rounded-full bg-snail-coral-soft/70 blur-[2px]" />
            <div className="absolute -right-2 top-24 h-24 w-24 rounded-full bg-snail-yellow-soft/80" />
            <div className="absolute -left-4 top-40 h-16 w-16 rounded-full bg-snail-teal-soft/80" />
            <div className="absolute right-32 -top-4 h-20 w-20 rounded-full bg-snail-green-soft/70" />
            <img src={heroSnail} alt="Lilla Snigel reading a book" width={1280} height={1024} className="relative mx-auto w-full max-w-lg object-contain" />
          </div>
        </div>
      </section>

      {/* Our philosophy */}
      <section className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        <div className="mb-8 border-t border-border pt-12 md:mb-10 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-coral">Our philosophy</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-snail-ink md:text-4xl">How we think about learning together.</h2>
        </div>
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[0_2px_0_oklch(0.9_0.02_80)] md:p-12">
          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col">
                <div className="flex h-44 items-end justify-center">
                  <img src={f.img} alt="" loading="lazy" width={640} height={640} className="max-h-full w-auto object-contain" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-snail-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-snail-ink/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        <div className="mb-8 border-t border-border pt-12 md:mb-10 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-teal">How it works</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-snail-ink md:text-4xl">Four simple steps, one shared moment.</h2>
        </div>
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[0_2px_0_oklch(0.9_0.02_80)] md:p-12">
          <div className="grid gap-10 md:grid-cols-4 md:gap-2">
            {steps.map((s, i) => (
              <div key={s.n} className="relative flex flex-col items-center text-center">
                <div className={`grid h-12 w-12 place-items-center rounded-full font-semibold ${s.color}`}>{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold text-snail-ink">{s.title}</h3>
                <div className="mt-4 flex h-40 items-center justify-center">
                  <img src={s.img} alt="" loading="lazy" width={640} height={512} className="max-h-full w-auto object-contain" />
                </div>
                <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-snail-ink/70">{s.body}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute right-[-10px] top-24 hidden h-6 w-6 text-snail-ink/30 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library preview */}
      <section className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        <div className="mb-8 border-t border-border pt-12 md:mb-10 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-coral">Library</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-snail-ink md:text-4xl">Stories for your family.</h2>
        </div>
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[0_2px_0_oklch(0.9_0.02_80)] md:p-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-border bg-background overflow-hidden">
              <img src="https://drive.google.com/thumbnail?id=18VZk54Q1beFbmoC2sQFl-lQOtNrvJ70g&sz=w600" alt="Tomten och skogen" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="rounded-full bg-snail-coral-soft px-3 py-1 text-xs font-semibold text-snail-coral">Folk</span>
                  <span className="rounded-full bg-snail-teal-soft px-3 py-1 text-xs font-semibold text-snail-teal">Ages 2–4</span>
                  <span className="rounded-full bg-snail-green-soft px-3 py-1 text-xs font-semibold text-snail-green">Available now</span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-snail-ink mb-3" style={{ fontFamily: "Fraunces, serif" }}>Tomten och skogen</h3>
                <p className="text-sm leading-relaxed text-snail-ink/70 mb-5">Follow the tomte and his little companion on a winter walk through the forest. Six first Swedish words for a gentle start.</p>
                <Link to="/library/tomten-och-skogen" className="inline-flex items-center gap-2 rounded-full bg-snail-coral px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-105">
                  Start reading
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/20">
                    <Play className="h-3 w-3 fill-white text-white" />
                  </span>
                </Link>
              </div>
            </div>
            {[{ title: "Alfons i trädgården", tags: ["Nature", "Ages 3–5"] }, { title: "Prinsessan och havet", tags: ["Folk", "Ages 4–6"] }].map((card) => (
              <div key={card.title} className="rounded-[1.5rem] border border-border bg-background p-6 opacity-50">
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((t) => (<span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-snail-ink/60">{t}</span>))}
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-snail-ink/40">Coming soon</span>
                </div>
                <h3 className="text-xl font-semibold text-snail-ink/60" style={{ fontFamily: "Fraunces, serif" }}>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer banner */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-snail-yellow-soft/70 px-6 py-10 text-center md:px-10 md:py-14">
          <img src={footerHouse} alt="" width={1536} height={1024} className="mx-auto h-20 w-auto object-contain md:h-28" />
          <p className="mt-6 text-xl leading-snug text-snail-ink md:text-2xl" style={{ fontFamily: "Fraunces, serif" }}>
            Families who want to learn together<br className="hidden md:block" /> and thrive in their new setting.
          </p>
          <Link to="/library" className="mt-8 inline-flex items-center gap-2 rounded-full bg-snail-coral px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_oklch(0.72_0.17_22/0.7)] transition hover:brightness-105">
            Choose your first story
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/20">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 bg-snail-ink text-snail-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logoHeader} alt="lilla snigel" className="h-16 w-auto object-contain" />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-snail-cream/70">Stories for multilingual families who want to bond over a story, reading together, learning together.</p>
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-snail-cream/50">About</p>
            <ul className="mt-4 space-y-3 text-base">
              <li><Link to="/about" className="hover:text-snail-coral">About us</Link></li>
              <li><a href="#" className="hover:text-snail-coral">Our philosophy</a></li>
            </ul>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-snail-cream/50">Follow us</p>
            <div className="mt-4 flex items-center gap-3">
              {[{ icon: Facebook, label: "Facebook" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Instagram, label: "Instagram" }].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-snail-cream/30 text-snail-cream/80 transition hover:border-snail-coral hover:text-snail-coral">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-cream/50">Discover</p>
            <ul className="mt-4 space-y-3 text-base">
              <li><Link to="/library" className="hover:text-snail-coral">Browse stories</Link></li>
              <li><a href="#" className="hover:text-snail-coral">By age</a></li>
              <li><a href="#" className="hover:text-snail-coral">By theme</a></li>
              <li><a href="#" className="hover:text-snail-coral">By level</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-cream/50">Support</p>
            <ul className="mt-4 space-y-3 text-base">
              <li><a href="#" className="hover:text-snail-coral">FAQ</a></li>
              <li><a href="#" className="hover:text-snail-coral">Contact</a></li>
              <li><a href="mailto:hello@lillasnigel.com" className="hover:text-snail-coral">hello@lillasnigel.com</a></li>
            </ul>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-snail-cream/50">Language</p>
            <ul className="mt-4 space-y-3 text-base">
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-snail-coral"><span aria-hidden>🇸🇪</span> Svenska</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-snail-coral"><span aria-hidden>🇬🇧</span> English</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-snail-cream/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm text-snail-cream/60 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <a href="#" className="hover:text-snail-cream">Privacy policy</a>
              <a href="#" className="hover:text-snail-cream">Cookie policy</a>
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
