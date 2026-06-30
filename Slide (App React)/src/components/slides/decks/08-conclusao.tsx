import { SlideLayout } from "../SlideLayout";

export default function Conclusao({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="07 · Aprendizados" tone="ink">
      <div className="grid flex-1 grid-cols-12 gap-16">
        <div className="col-span-7 flex flex-col gap-10">
          <h2 className="slide-display slide-title" style={{ fontWeight: 700 }}>
            O que fica
          </h2>
          <ul className="slide-body-lg flex flex-col gap-6" style={{ opacity: 0.9, maxWidth: 900 }}>
            <li>
              <strong style={{ color: "var(--slide-accent)" }}>Métricas isoladas mentem.</strong> {" "}
              Importância da análise de várias em conjunto.
            </li>
            <li>
              <strong style={{ color: "var(--slide-accent)" }}>LLM acelera</strong>, mas...
            </li>
          </ul>
        </div>

        <div
          className="col-span-5 flex flex-col justify-between"
          style={{
            borderLeft: "1px solid rgba(244,239,230,0.25)",
            paddingLeft: 56,
          }}
        >
          <div className="flex flex-col gap-6">
            <span className="slide-kicker" style={{ color: "var(--slide-accent)" }}>
              Pull requests
            </span>
            <ul className="slide-body slide-mono flex flex-col gap-3" style={{ opacity: 0.85 }}>
              <li>tornadoweb/tornado #3655</li>
              <li>tornadoweb/tornado #3656</li>
              <li>tornadoweb/tornado #3657</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="slide-kicker" style={{ opacity: 0.55 }}>Obrigado</span>
            <span className="slide-display" style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.03em" }}>
              Perguntas?
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}