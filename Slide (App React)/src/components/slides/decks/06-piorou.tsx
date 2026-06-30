import { SlideLayout } from "../SlideLayout";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const coverage = [
  { name: "Linhas", antes: 79.6, depois: 59.8 },
  { name: "Branches", antes: 72.9, depois: 47.8 },
];

export default function Piorou({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="05 · O que piorou" tone="ink">
      <div className="grid flex-1 grid-cols-12 gap-16">
        <div className="col-span-7 flex flex-col gap-12">
          <h2 className="slide-display slide-title" style={{ fontWeight: 700 }}>
            Resultados negativos
          </h2>

          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-6">
              <span
                className="slide-display"
                style={{ fontSize: 220, fontWeight: 800, color: "var(--slide-bad)", lineHeight: 0.9, letterSpacing: "-0.05em" }}
              >
                698
              </span>
              <span className="slide-subtitle" style={{ opacity: 0.7 }}>
                testes falhando
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <RegressionCard label="Pylint score" from="7,99" to="7,92" />
            <RegressionCard label="LOC do projeto" from="43.931" to="47.214" arrow="↑" />
            <RegressionCard label="Energia (CodeCarbon)" from="1,4e-4" to="7,7e-4" arrow="↑" />
            <RegressionCard label="too-many-arguments" from="24" to="33" arrow="↑" />
          </div>
        </div>

        <div className="col-span-5 flex flex-col">
          <span className="slide-kicker" style={{ opacity: 0.6 }}>
            Cobertura de testes (%)
          </span>
          <div className="flex-1 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={coverage} margin={{ top: 32, right: 16, left: 0, bottom: 60 }} barGap={6}>
                <CartesianGrid strokeDasharray="3 6" stroke="rgba(244,239,230,0.18)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#F4EFE6", fontSize: 24, fontFamily: "JetBrains Mono" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#F4EFE6", fontSize: 20 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Bar dataKey="antes" fill="#C9A24B" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="antes" position="top" formatter={(v) => `${v}%`} style={{ fill: "#F4EFE6", fontSize: 26, fontWeight: 700 }} />
                </Bar>
                <Bar dataKey="depois" fill="#C8462B" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="depois" position="top" formatter={(v) => `${v}%`} style={{ fill: "#F4EFE6", fontSize: 26, fontWeight: 700 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-2">
            <Legend color="#C9A24B" label="antes" />
            <Legend color="#C8462B" label="depois" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function RegressionCard({ label, from, to, arrow = "↓" }: { label: string; from: string; to: string; arrow?: string }) {
  return (
    <div
      className="flex flex-col gap-2"
      style={{ borderTop: "1px solid rgba(244,239,230,0.25)", paddingTop: 18 }}
    >
      <span className="slide-caption" style={{ opacity: 0.6 }}>{label}</span>
      <div className="flex items-baseline gap-3 slide-mono">
        <span style={{ fontSize: 32, opacity: 0.55 }}>{from}</span>
        <span style={{ fontSize: 26, opacity: 0.5 }}>{arrow}</span>
        <span style={{ fontSize: 40, fontWeight: 700, color: "var(--slide-bad)" }}>{to}</span>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span style={{ width: 22, height: 22, background: color, borderRadius: 4, display: "inline-block" }} />
      <span className="slide-caption slide-mono">{label}</span>
    </div>
  );
}