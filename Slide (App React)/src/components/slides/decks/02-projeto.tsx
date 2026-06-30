import { SlideLayout } from "../SlideLayout";

const stats = [
  { k: "43.931", l: "linhas de código" },
  { k: "1.242", l: "testes automatizados" },
  { k: "~15 anos", l: "de história" },
];

export default function Projeto({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="01 · O projeto">
      <div className="grid flex-1 grid-cols-12 gap-16">
        <div className="col-span-7 flex flex-col gap-16">
          <h2 className="slide-display slide-title" style={{ fontWeight: 700 }}>
            Tornado
          </h2>
          <p className="slide-body-lg" style={{ maxWidth: 900, opacity: 0.85 }}>
            Framework web e biblioteca de rede{" "}
            <em className="slide-display">assíncrona</em> em Python
          </p>
          <ul
            className="slide-body flex flex-col gap-4"
            style={{ maxWidth: 880, opacity: 0.85 }}
          >
            <li>· Cliente e servidor HTTP assíncronos</li>
            <li>· Chats, notificações em tempo real, i18n</li>
          </ul>
        </div>

        <div className="col-span-5 flex flex-col justify-center gap-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="flex items-baseline justify-between border-t pt-6"
              style={{ borderColor: "rgba(14,20,48,0.18)" }}
            >
              <span
                className="slide-display"
                style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.04em" }}
              >
                {s.k}
              </span>
              <span className="slide-caption" style={{ opacity: 0.6, maxWidth: 220, textAlign: "right" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}