import { SlideLayout } from "../SlideLayout";

export default function Cover({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="Trabalho Final · 2026.1" tone="ink">
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-10" style={{ maxWidth: 1500 }}>
          <div
            className="slide-kicker slide-display"
            style={{ color: "var(--slide-accent)" }}
          >
            Manutenção de Software
          </div>
          <h1 className="mt-20 slide-display slide-title-lg" style={{ fontWeight: 800 }}>
            Refatorar é<br />
            <span style={{ fontStyle: "italic", color: "var(--slide-accent)" }}>
              melhorar mesmo?
            </span>
          </h1>
          <p
            className="slide-subtitle"
            style={{ opacity: 0.78, maxWidth: 1200, fontWeight: 300 }}
          >
            Um experimento com o framework Tornado
          </p>
        </div>

        <div className="flex items-end justify-between gap-16">
          <div className="flex flex-col gap-2">
          </div>
          <div className="flex flex-col gap-2 text-right">
            <span className="slide-kicker" style={{ opacity: 0.6 }}>Professora</span>
            <span className="slide-body slide-display">
              Dra. Carla Ilane · UFC
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}