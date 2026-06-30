import type { ReactNode } from "react";
import { CountdownTimer } from "./CountdownTimer";

type Props = {
  children: ReactNode;
  index: number;
  total: number;
  kicker?: string;
  tone?: "paper" | "ink";
};

export function SlideLayout({ children, index, total, kicker, tone = "paper" }: Props) {
  const isInk = tone === "ink";
  return (
    <div
      className="slide-content"
      style={{
        background: isInk ? "var(--slide-ink)" : "var(--slide-paper)",
        color: isInk ? "var(--slide-paper)" : "var(--slide-ink)",
      }}
    >
      {/* header */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between"
        style={{ padding: "56px 96px 0 96px" }}
      >
        <div className="slide-kicker slide-display" style={{ opacity: 0.7 }}>
          {kicker ?? "Manutenção de Software · UFC"}
        </div>
        <div className="slide-page slide-mono flex items-center" style={{ gap: "24px" }}>
          <span style={{ opacity: 0.55 }}>
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <CountdownTimer className="slide-page slide-mono tabular-nums" />
        </div>
      </div>

      {/* body */}
      <div
        className="absolute inset-0 flex flex-col"
        style={{ padding: "150px 96px 110px 96px" }}
      >
        {children}
      </div>

      {/* footer */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between"
        style={{ padding: "0 96px 48px 96px", opacity: 0.55 }}
      >
        <span className="slide-footer slide-mono">Tornado Web Server</span>
        <span className="slide-footer slide-mono">Pedro Santana · 2026.1</span>
      </div>
    </div>
  );
}