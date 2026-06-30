import { SlideLayout } from "../SlideLayout";

export default function Analise({ index, total }: { index: number; total: number }) {
  return (
    <SlideLayout index={index} total={total} kicker="06 · Análise">
      <div className="flex flex-1 flex-col gap-12">
        <h2 className="slide-display slide-title" style={{ fontWeight: 700, maxWidth: 1500 }}>
          Qualidade <em>global</em> piora
        </h2>

        <div className="mt-20 grid flex-1 grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="slide-kicker" style={{ color: "var(--slide-good)" }}>
                Ganhos
              </span>
              <ul className="slide-body flex flex-col gap-4" style={{ opacity: 0.88 }}>
                <li>· As 46 ocorrências dos 3 smells-alvo foram resolvidas.</li>
                <li>· Picos de CC reduzidos nos arquivos mais críticos.</li>
                <li>· ~3.200 linhas modificadas em horas, não semanas.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="slide-kicker" style={{ color: "var(--slide-bad)" }}>
                Efeitos colaterais
              </span>
              <ul className="slide-body flex flex-col gap-4" style={{ opacity: 0.88 }}>
                <li>· Novos smells apareceram: <span className="slide-mono">too-few-public-methods 26→42</span>.</li>
                <li>· Manutenibilidade (MI) de <span className="slide-mono">web.py</span>, <span className="slide-mono">iostream.py</span>, <span className="slide-mono">websocket.py</span> seguiu <strong>0,0</strong>.</li>
                <li>· Pylint score quase inalterado: <span className="slide-mono">7,99 → 7,92</span>.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}