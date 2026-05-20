import { createFileRoute, Link } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2 } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

export const Route = createFileRoute("/library/tomten-och-skogen")({
  component: TomtenOchSkogen,
});

const SCENES = [
  {
    word: "skogen",
    wordEn: "the forest",
    sv: ["Det är vinter.", "Skogen", " är vit. Tomten går i ", "skogen", "."],
    sp: "Det är vinter. Skogen är vit. Tomten går i skogen.",
    en: "It is winter. The forest is white. The tomte walks in the forest.",
    img: "https://drive.google.com/thumbnail?id=18VZk54Q1beFbmoC2sQFl-lQOtNrvJ70g&sz=w800",
  },
  {
    word: "snön",
    wordEn: "the snow",
    sv: ["Titta! Det är ", "snö", "! Haren hoppar i ", "snön", "."],
    sp: "Titta! Det är snö! Haren hoppar i snön.",
    en: "Look! There is snow! The hare jumps in the snow.",
    img: "https://drive.google.com/thumbnail?id=1XW_zEe7Qabuhp6dbwkT-AVkLmKjVCIrw&sz=w800",
  },
  {
    word: "stugan",
    wordEn: "the cottage",
    sv: ["Det är ", "stugan", ". ", "Stugan", " är röd. Tomten och haren går hem."],
    sp: "Det är stugan. Stugan är röd. Tomten och haren går hem.",
    en: "This is the cottage. The cottage is red. The tomte and the hare go home.",
    img: "https://drive.google.com/thumbnail?id=1QWCmpVzVXmjgoQzRY7X4lj3jDlIF4U1S&sz=w800",
  },
  {
    word: "elden",
    wordEn: "the fire",
    sv: ["Det är kallt ute. Inne finns en ", "eld", ". ", "Elden", " är varm."],
    sp: "Det är kallt ute. Inne finns en eld. Elden är varm.",
    en: "It is cold outside. Inside there is a fire. The fire is warm.",
    img: "https://drive.google.com/thumbnail?id=1rVfuIeA-Dv2na_n4H8IH2E8h8ENxRnpN&sz=w800",
  },
  {
    word: "gröt",
    wordEn: "porridge",
    sv: ["Tomten äter ", "gröt", ". ", "Gröt", " är gott! Haren tittar på."],
    sp: "Tomten äter gröt. Gröt är gott! Haren tittar på.",
    en: "The tomte eats porridge. Porridge is good! The hare watches.",
    img: "https://drive.google.com/thumbnail?id=1pZyIDMI4KKkHgeLPnNdmBaV-xaB96BPO&sz=w800",
  },
  {
    word: "natt",
    wordEn: "night",
    sv: ["Nu är det ", "natt", ". Skogen sover. God ", "natt", "!"],
    sp: "Nu är det natt. Skogen sover. God natt!",
    en: "Now it is night. The forest is sleeping. Good night!",
    img: "https://drive.google.com/thumbnail?id=1nuZBBKH4OpcsNlvc7GQcKbft52-3-Wgf&sz=w800",
  },
];

const QUIZ = [
  { word: "skogen", correct: 0, opts: [0, 2, 4] },
  { word: "snön", correct: 1, opts: [3, 1, 5] },
  { word: "stugan", correct: 2, opts: [0, 4, 2] },
  { word: "elden", correct: 3, opts: [1, 3, 5] },
  { word: "gröt", correct: 4, opts: [2, 3, 4] },
  { word: "natt", correct: 5, opts: [0, 5, 2] },
];

type Screen = "story" | "quiz" | "end";

function speak(text: string, rate = 0.82) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "sv-SE";
  u.rate = rate;
  window.speechSynthesis.speak(u);
}

function SvText({ parts }: { parts: string[] }) {
  return (
    <p className="font-serif text-lg leading-[1.8] text-snail-ink md:text-xl" style={{ fontFamily: "Fraunces, serif" }}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="not-italic font-semibold text-snail-coral">{part}</em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

function TomtenOchSkogen() {
  const [screen, setScreen] = useState<Screen>("story");
  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);

  const autoSpeak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setPlaying(true);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "sv-SE";
    u.rate = 0.82;
    u.onend = () => setPlaying(false);
    u.onerror = () => setPlaying(false);
    uttRef.current = u;
    window.speechSynthesis.speak(u);
  }, []);

  useEffect(() => {
    if (screen === "story") {
      const timer = setTimeout(() => autoSpeak(SCENES[cur].sp), 400);
      return () => clearTimeout(timer);
    }
  }, [cur, screen, autoSpeak]);

  useEffect(() => {
    if (screen === "quiz") {
      const timer = setTimeout(() => speak(QUIZ[qi].word, 0.75), 300);
      return () => clearTimeout(timer);
    }
  }, [qi, screen]);

  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  function toggleAudio() {
    if (!window.speechSynthesis) return;
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
    } else {
      autoSpeak(SCENES[cur].sp);
    }
  }

  function advance() {
    if (cur < SCENES.length - 1) {
      setCur((c) => c + 1);
    } else {
      window.speechSynthesis?.cancel();
      setScreen("quiz");
      setQi(0);
      setScore(0);
    }
  }

  function goBack() {
    if (cur > 0) setCur((c) => c - 1);
  }

  function pickAnswer(isCorrect: boolean) {
    if (answered) return;
    setAnswered(true);
    if (isCorrect) setScore((s) => s + 1);
    if (!isCorrect) setTimeout(() => speak(QUIZ[qi].word, 0.75), 300);
    setTimeout(() => {
      setAnswered(false);
      if (qi < QUIZ.length - 1) {
        setQi((q) => q + 1);
      } else {
        setScreen("end");
      }
    }, 1400);
  }

  // ── STORY ──
  if (screen === "story") {
    const scene = SCENES[cur];
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-start py-6 px-4">
        <div className="w-full max-w-md">
          {/* Exit button */}
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/library"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-snail-ink/70 hover:bg-muted transition-colors"
              onClick={() => window.speechSynthesis?.cancel()}
            >
              <X className="h-4 w-4" /> Exit
            </Link>
            <span className="text-xs text-snail-ink/40 font-medium">
              {cur + 1} / {SCENES.length}
            </span>
          </div>

          {/* Card */}
          <div className="rounded-[1.5rem] border border-border bg-card overflow-hidden shadow-sm">
            <img
              src={scene.img}
              alt=""
              className="w-full h-56 object-cover cursor-pointer md:h-64"
              onClick={advance}
            />
            <div className="p-5 cursor-pointer" onClick={advance}>
              {/* Word pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 mb-4">
                <span className="font-semibold text-snail-coral" style={{ fontFamily: "Fraunces, serif" }}>{scene.word}</span>
                <span className="text-border">·</span>
                <span className="text-xs text-snail-ink/60 italic">{scene.wordEn}</span>
              </div>

              {/* Swedish text */}
              <SvText parts={scene.sv} />

              {/* English */}
              <p className="mt-2 text-sm text-snail-ink/50 leading-relaxed">{scene.en}</p>

              {/* Progress pips */}
              <div className="flex gap-1.5 mt-4">
                {SCENES.map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-[3px] rounded-full transition-all duration-300 ${i <= cur ? "bg-snail-coral" : "bg-border"}`}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-5 pb-5 pt-3 border-t border-border">
              <button
                onClick={goBack}
                disabled={cur === 0}
                className="inline-flex items-center gap-1 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-snail-ink/60 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>

              <button
                onClick={toggleAudio}
                className="grid h-11 w-11 place-items-center rounded-full bg-snail-coral text-white shadow-[0_6px_16px_-6px_oklch(0.72_0.17_22/0.6)] transition hover:brightness-105"
              >
                {playing ? <Pause className="h-4 w-4 fill-white" /> : <Play className="h-4 w-4 fill-white" />}
              </button>

              <button
                onClick={advance}
                className="inline-flex items-center gap-1 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-snail-ink/60 hover:bg-muted transition-colors"
              >
                {cur === SCENES.length - 1 ? "Quiz" : "Next"} <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ ──
  if (screen === "quiz") {
    const q = QUIZ[qi];
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-start py-6 px-4">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/library"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-snail-ink/70 hover:bg-muted transition-colors"
              onClick={() => window.speechSynthesis?.cancel()}
            >
              <X className="h-4 w-4" /> Exit
            </Link>
            <span className="text-xs text-snail-ink/40 font-medium">{qi + 1} / {QUIZ.length}</span>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-snail-ink/40 text-center mb-1">Which picture shows...</p>
            <p className="text-3xl font-semibold text-snail-coral text-center mb-3" style={{ fontFamily: "Fraunces, serif" }}>{q.word}</p>

            {/* Listen button */}
            <div className="flex justify-center mb-5">
              <button
                onClick={() => speak(q.word, 0.75)}
                className="inline-flex items-center gap-2 rounded-full bg-snail-coral-soft px-4 py-2 text-sm font-semibold text-snail-coral hover:brightness-95 transition"
              >
                <Volume2 className="h-4 w-4" /> Lyssna
              </button>
            </div>

            {/* Image cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {q.opts.map((si, i) => {
                const isCorrect = si === q.correct;
                return (
                  <button
                    key={i}
                    onClick={() => pickAnswer(isCorrect)}
                    disabled={answered}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      answered && isCorrect
                        ? "border-snail-green scale-105"
                        : answered && !isCorrect
                        ? "border-snail-coral opacity-50"
                        : "border-border hover:border-snail-coral hover:scale-[1.03]"
                    }`}
                  >
                    <img
                      src={SCENES[si].img}
                      alt=""
                      className="w-full h-24 object-cover"
                    />
                    <div className="py-1.5 px-1 text-center text-[11px] font-semibold text-snail-ink/70 italic bg-background">
                      {SCENES[si].wordEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {answered && (
              <p className={`text-center text-sm font-bold ${score > qi ? "text-snail-green" : "text-snail-coral"}`}>
                {score > qi ? "✅ Rätt! Well done!" : "❌ Not quite — listen again."}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── END ──
  const pct = Math.round((score / QUIZ.length) * 100);
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-sm text-center">
          <div className="text-5xl mb-3">⭐</div>
          <h2 className="text-2xl font-semibold text-snail-ink mb-1" style={{ fontFamily: "Fraunces, serif" }}>Fantastiskt!</h2>
          <p className="text-snail-ink/50 text-sm mb-2">Tomten och skogen</p>
          <p className="text-5xl font-semibold text-snail-coral mb-1" style={{ fontFamily: "Fraunces, serif" }}>{score}/{QUIZ.length}</p>
          <p className="text-sm text-snail-ink/60 mb-6 leading-relaxed">
            {pct >= 83
              ? "You remembered all the words. Fantastiskt!"
              : pct >= 50
              ? "Good effort! Read the story again to practise more."
              : "Keep reading — every story helps!"}
          </p>

          {/* Words learned grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {SCENES.map((s) => (
              <div key={s.word} className="rounded-xl bg-snail-coral-soft/40 border border-snail-coral/10 py-2 px-1 text-center">
                <div className="font-semibold text-snail-coral text-sm" style={{ fontFamily: "Fraunces, serif" }}>{s.word}</div>
                <div className="text-[10px] text-snail-ink/50 italic mt-0.5">{s.wordEn}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/library/tomten-och-skogen"
              onClick={() => { setCur(0); setScreen("story"); setQi(0); setScore(0); }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-snail-coral px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
            >
              Read again 🔄
            </Link>
            <Link
              to="/library"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-snail-ink/70 hover:bg-muted transition-colors"
            >
              Back to library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
