// About page - Lilla Snigel
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import logoHeader from "@/assets/logo-header.png";

export const Route = createFileRoute("/about")({
  component: About,
});

export function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoHeader} alt="lilla snigel" className="-mb-6 h-28 w-auto object-contain md:-mb-8 md:h-36" />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-card/60 px-2 py-1 text-sm md:flex">
            {[{ label: "Home", to: "/" }, { label: "Library", to: "/library" }, { label: "Languages", to: "/" }, { label: "About", to: "/about" }].map((n, i) => (
              <Link key={n.label} to={n.to} className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors ${i === 3 ? "bg-snail-coral-soft text-snail-coral font-semibold" : "text-snail-ink/80 hover:bg-muted"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <div className="mb-12 border-t border-border pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-coral">About</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-snail-ink md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>
            Why I built Lilla Snigel.
          </h1>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="rounded-[1.5rem] border border-border bg-card overflow-hidden md:sticky md:top-8">
              <img src="https://drive.google.com/thumbnail?id=1B66wTmiQQffpJOkRYpWYk_qYQBtzcwZK&sz=w600" alt="Elena Martin Hernández" className="w-full h-72 object-cover object-top" />
              <div className="p-5">
                <h2 className="font-semibold text-snail-ink text-lg" style={{ fontFamily: "Fraunces, serif" }}>Elena Martín Hernández</h2>
                <p className="text-sm text-snail-ink/60 mt-1 leading-relaxed">Linguist, storyteller, learning designer.</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-snail-ink/40">
                  <Heart className="h-3 w-3 fill-snail-coral text-snail-coral" />
                  <span>Made with love in Stockholm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 text-base leading-relaxed text-snail-ink/80">
<p>
  It started with Viveka. My daughter was two years old when she first attempted to sing <em>lilla snigel akta dig</em>, a Swedish nursery rhyme and her first real Swedish words. In that moment I understood something I had known professionally for years but had never felt quite so personally: language enters children through joy, through repetition, and through the people they love.
</p>
<p>
  I studied literature and linguistics in Salamanca and Edinburgh. One of my first jobs was teaching English to very young children, children who had barely learned to speak. What I discovered early was simple: they learned because we had fun and because we repeated things together. The curriculum was there, the structure was there, but what made it work was joy.
</p>
<p>
  I spent years teaching Spanish through stories, one to one, in adult education, with professionals in London. Then I spent nine years as a Learning Designer and Product Manager at one of the world's largest language learning platforms, shaping how products can genuinely serve the people who use them.
</p>
<p>
  Lastly, I am an immigrant. I know what it feels like to arrive somewhere new and feel the distance between you and the world around you. I built Lilla Snigel for the families I kept meeting in Stockholm, families who wanted to give their children the gift of Swedish, without losing the language they carried from home, or their identity. Families who wanted to learn together, and thrive in their new setting.
</p>
            <div className="rounded-[1.5rem] bg-snail-yellow-soft/60 border border-snail-yellow-soft p-6">
              <p className="font-semibold text-snail-ink leading-relaxed" style={{ fontFamily: "Fraunces, serif" }}>"Language enters children through joy, through repetition, and through the people they love."</p>
            </div>
          </div>
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
