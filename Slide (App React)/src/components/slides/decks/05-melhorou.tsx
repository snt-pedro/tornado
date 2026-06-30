import { SlideLayout } from "../SlideLayout";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "too-many-statements", antes: 9, depois: 0 },
  { name: "too-many-branches", antes: 19, depois: 4 },
  { name: "too-many-instance-attributes", antes: 18, depois: 7 },
];

export default function Melhorou({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="04 · O que melhorou">
      <div className="grid flex-1 grid-cols-12 gap-16">
        <div className="col-span-5 flex flex-col gap-10">
          <h2 className="slide-display slide-title" style={{ fontWeight: 700 }}>
            Resultados positivos
          </h2>

          <div className="flex flex-col gap-8 mt-4">
            <Stat from="46" to="0" label="Ocorrências dos 3 smells-alvo" />
            <Stat from="54" to="22" label="CC máx · _curl_setup_request" />
            <Stat from="32" to="22" label="CC · HTTP1Connection._read_message" />
          </div>
        </div>

        <div className="col-span-7 flex flex-col">
          <span className="slide-kicker" style={{ opacity: 0.6 }}>
            Ocorrências por smell · antes vs. depois
          </span>
          <div className="flex-1 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 32, right: 24, left: 0, bottom: 60 }} barGap={8}>
                <CartesianGrid strokeDasharray="3 6" stroke="rgba(14,20,48,0.15)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#0E1430", fontSize: 22, fontFamily: "JetBrains Mono" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#0E1430", fontSize: 20 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="antes" fill="#C9A24B" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="antes" position="top" style={{ fill: "#0E1430", fontSize: 28, fontWeight: 700 }} />
                  {data.map((_, i) => <Cell key={i} />)}
                </Bar>
                <Bar dataKey="depois" fill="#2F8F6B" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="depois" position="top" style={{ fill: "#0E1430", fontSize: 28, fontWeight: 700 }} />
                  {data.map((_, i) => <Cell key={i} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-8 mt-2">
            <Legend color="#C9A24B" label="antes" />
            <Legend color="#2F8F6B" label="depois" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Stat({ from, to, label }: { from: string; to: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-5">
        <span
          className="slide-display slide-mono"
          style={{ fontSize: 64, fontWeight: 600, opacity: 0.45, textDecoration: "line-through" }}
        >
          {from}
        </span>
        <span className="slide-display" style={{ fontSize: 36, opacity: 0.5 }}>→</span>
        <span
          className="slide-display slide-mono"
          style={{ fontSize: 80, fontWeight: 700, color: "var(--slide-good)" }}
        >
          {to}
        </span>
      </div>
      <span className="slide-caption" style={{ opacity: 0.7 }}>{label}</span>
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