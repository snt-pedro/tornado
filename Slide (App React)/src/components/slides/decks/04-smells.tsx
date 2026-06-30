import { SlideLayout } from "../SlideLayout";

const smells = [
  {
    code: "too-many-statements",
    count: 9,
    why: "Método ou função com mais comandos que o limite permitido.",
  },
  {
    code: "too-many-branches",
    count: 19,
    why: "Método ou função com mais ramificações que o limite permitido.",
  },
  {
    code: "too-many-instance-attributes",
    count: 18,
    why: "Classe com mais atributos de instância que o limite permitido.",
  },
];

export default function Smells({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="03 · Code smells refatorados">
      <div className="flex flex-1 flex-col gap-14">

        <div className="grid flex-1 grid-cols-3 gap-10">
          {smells.map((s, i) => (
            <div
              key={s.code}
              className="flex flex-col justify-between"
              style={{
                background: "var(--slide-ink)",
                color: "var(--slide-paper)",
                padding: "44px 40px",
              }}
            >
              <div className="flex flex-col gap-6">
                <span
                  className="slide-display"
                  style={{
                    fontSize: 28,
                    opacity: 0.5,
                    fontStyle: "italic",
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  className="slide-mono"
                  style={{ fontSize: 28, color: "var(--slide-accent)" }}
                >
                  {s.code}
                </span>
              </div>
              <div className="flex flex-col gap-6 mt-10">
                <span
                  className="slide-display"
                  style={{
                    fontSize: 140,
                    fontWeight: 700,
                    letterSpacing: "-0.05em",
                    lineHeight: 0.9,
                  }}
                >
                  {s.count}
                </span>
                <span className="slide-caption" style={{ opacity: 0.6 }}>
                  ocorrências
                </span>
                <p className="slide-body" style={{ opacity: 0.88 }}>
                  {s.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}