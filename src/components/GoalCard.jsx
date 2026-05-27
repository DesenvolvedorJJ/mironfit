import ProgressBar from "./ProgressBar"
import { CheckIcon, TargetIcon, ClockIcon } from "./Icons"

// Card de meta (Funcionalidade 2). Visual muda conforme o status,
// dando o "retorno visual de gamificação" descrito no escopo.
const estilos = {
  concluida: { badge: "bg-success/15 text-success", rotulo: "Concluída", Icone: CheckIcon },
  andamento: { badge: "bg-primary/20 text-text", rotulo: "Em andamento", Icone: TargetIcon },
  expirada: { badge: "bg-danger/15 text-danger", rotulo: "Expirada", Icone: ClockIcon },
}

export default function GoalCard({ meta }) {
  const { tipo, descricao, atual, alvo, unidade, prazo, status } = meta
  const e = estilos[status]
  const cor = status === "concluida" ? "success" : "primary"

  return (
    <div className="rounded-2xl bg-surface border border-border p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
            {tipo}
          </span>
          <h3 className="font-semibold leading-tight">{descricao}</h3>
        </div>
        <span className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${e.badge}`}>
          <e.Icone className="w-3.5 h-3.5" />
          {e.rotulo}
        </span>
      </div>

      <div className="mt-3">
        <ProgressBar atual={atual} alvo={alvo} cor={cor} />
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-semibold">
            {atual} / {alvo} {unidade}
          </span>
          <span className="text-muted">{prazo}</span>
        </div>
      </div>
    </div>
  )
}
