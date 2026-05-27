import Header from "../components/Header"
import { historico } from "../data/historico"
import { ClockIcon, DumbbellIcon, TrendUpIcon } from "../components/Icons"

export default function Historico() {
  return (
    <div className="pb-6">
      <Header titulo="Histórico" subtitulo={`${historico.length} treinos recentes`} />

      <div className="px-5 space-y-3">
        {historico.map((h) => (
          <div key={h.id} className="rounded-2xl bg-surface border border-border p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold leading-tight truncate">{h.treino}</h3>
              <span className="text-xs text-muted shrink-0">{h.data}</span>
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4" /> {h.duracao} min
              </span>
              <span className="inline-flex items-center gap-1.5">
                <DumbbellIcon className="w-4 h-4" /> {h.exercicios} exerc.
              </span>
              <span className="inline-flex items-center gap-1.5 text-success font-medium">
                <TrendUpIcon className="w-4 h-4" /> {h.volume}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
