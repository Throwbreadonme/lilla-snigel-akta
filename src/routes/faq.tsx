import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import logoHeader from "@/assets/logo-header.png";

export const Route = createFileRoute("/faq")({
  component: FAQ,
});

const faqs = [
  {
    q: "Is Lilla Snigel free?",
    a: "Yes, Lilla Snigel is free to use. No account needed, no subscription, no hidden fees. We believe every family should have access to quality language learning stories.",
  },
  {
    q: "What age is it for?",
    a: "Our stories are designed for children aged 2 to 6, though older children and adults often enjoy them too. Each story is labelled with an age range to help you choose the right one for your family.",
  },
  {
    q: "Do I need to speak Swedish to use it?",
    a: "Not at all. Lilla Snigel is designed for families learning Swedish together, including parents who are beginners. Every Swedish sentence is shown alongside an English translation, and the story is read aloud so you can listen and follow along.",
  },
  {
    q: "Is it safe for children?",
    a: "Yes. Every story is reviewed by Elena Martín, a language educator with 14 years of teaching experience. We check for age appropriateness, language accuracy, cultural sensitivity, and educational value before anything is published. AI is used as a creative tool, never to publish content directly to children.",
  },
  {
    q: "How is AI used in the stories?",
    a: "We use AI-assisted tools to support parts of the creative process, such as generating illustration concepts, helping with translations, or supporting the drafting process. Every story is then reviewed and curated by a human educator. We are transparent about this because we believe families deserve to know how their children's content is made.",
  },
  {
    q: "What languages are supported?",
    a: "Right now, stories are in Swedish with English translations. We are working on adding Spanish, Finnish, Polish, and Arabic, with more languages to follow as we grow. Our goal is to serve as many multilingual families and migrant communities as possible.",
  },
  {
    q: "How does the story reader work?",
    a: "Tap anywhere on the screen to advance through the story. Each scene introduces a new Swedish word, shown in the text and read aloud. After the story, a short picture-matching game helps your child review the words they have just heard. No menus, no distractions, just the story.",
  },
  {
    q: "Do you store my child's data?",
    a: "No. We do not collect or store personal data about your child. We use privacy-friendly analytics that work without cookies or personal identifiers, so we can understand how the app is used without tracking individual users. We do not sell any data.",
  },
  {
    q: "Can I use it on a tablet or phone?",
    a: "Yes. Lilla Snigel is designed to work on tablets, phones, and desktop browsers. It works best on a tablet held between parent and child, which is exactly how we imagined it being used.",
  },
  {
    q: "How often do you add new stories?",
    a: "We aim to publish new stories every two weeks. Each story goes through our full review process before it is released. You can follow us on social media or check the library regularly to see what is new.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-snail-ink text-base">{q}</span>
        <span className={`shrink-0 mt-0.5 text-snail-coral font-semibold text-lg transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-snail-ink/70 max-w-2xl">{a}</p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoHeader} alt="lilla snigel" className="-mb-6 h-28 w-auto object-contain md:-mb-8 md:h-36" />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-card/60 px-2 py-1 text-sm md:flex">
            {[{ label: "Home", to: "/" }, { label: "Library", to: "/library" }, { label: "Languages", to: "/" }, { label: "About", to: "/about" }].map((n, i) => (
              <Link key={n.label} to={n.to} className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors ${i === 0 ? "text-snail-ink/80 hover:bg-muted" : "text-snail-ink/80 hover:bg-muted"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-16 pb-24">
        <div className="mb-12 border-t border-border pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-snail-coral">FAQ</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-snail-ink md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>
            Frequently asked questions.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-snail-ink/60 max-w-xl">
            Can't find what you're looking for? Write to us at{" "}
            <a href="mailto:hi@lillasnigel.com" className="text-snail-coral hover:underline">hi@lillasnigel.com</a>.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card px-8 py-2 shadow-[0_2px_0_oklch(0.9_0.02_80)]">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </main>

      <footer className="bg-snail-ink text-snail-cream">
        <div className="border-t border-snail-cream/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm text-snail-cream/60 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <a href="#" className="hover:text-snail-cream">Privacy policy</a>
              <a href="#" className="hover:text-snail-cream">Terms of use</a>
              <a href="#" className="hover:text-snail-cream">Quality & Safety</a>
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
