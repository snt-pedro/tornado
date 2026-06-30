import { SlideLayout } from "../SlideLayout";

const metrics = [
  { tool: "Radon", value: "54", label: "CC máx · _curl_setup_request", tone: "bad" },
  { tool: "Radon", value: "0.0", label: "MI · web.py (pior caso)", tone: "bad" },
  { tool: "Pylint", value: "7,99", label: "score do projeto / 10", tone: "ok" },
  { tool: "Pytest", value: "1.263 / 0", label: "passaram · falharam", tone: "good" },
  { tool: "Pytest", value: "79,6%", label: "cobertura de linhas", tone: "good" },
  { tool: "CodeCarbon", value: "17,5 s", label: "duração da execução", tone: "ok" },
] as const;

const toneColor = {
  good: "var(--slide-good)",
  bad: "var(--slide-bad)",
  ok: "var(--slide-ink)",
} as const;

export default function Baseline({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="02 · Ponto de partida">
      <div className="flex flex-1 flex-col gap-12">
        <div className="flex items-end justify-between gap-12">
          <h2 className="slide-display slide-title" style={{ fontWeight: 700, maxWidth: 1200 }}>
            Antes do experimento
          </h2>
          <div
            className="slide-caption slide-mono"
            style={{ opacity: 0.6, textAlign: "right", maxWidth: 380 }}
          >
            LLM: Claude Haiku 4.5
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-8">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col justify-between"
              style={{
                background: "rgba(14,20,48,0.04)",
                border: "1px solid rgba(14,20,48,0.12)",
                padding: "32px 36px",
              }}
            >
              <span className="slide-kicker" style={{ color: "var(--slide-accent)" }}>
                {m.tool}
              </span>
              <div className="flex flex-col gap-3">
                <span
                  className="slide-display"
                  style={{
                    fontSize: 96,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: toneColor[m.tone],
                    lineHeight: 0.95,
                  }}
                >
                  {m.value}
                </span>
                <span className="slide-caption" style={{ opacity: 0.7 }}>
                  {m.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}