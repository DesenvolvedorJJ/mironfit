import { Link } from "react-router-dom"
import { ChevronRightIcon } from "./Icons"

// Card de exercício na lista do treino. Mostra alvo de séries/reps/carga
// e o comparativo da última sessão (Conteúdo 3). Leva ao registro rápido.
export default function ExerciseCard({ exercicio }) {
  const { id, nome, grupo, series, repsAlvo, cargaAlvo, ultimaSessao } = exercicio
  return (
    <Link
      to={`/exercicio/${id}`}
      className="block rounded-2xl bg-surface border border-border p-4 active:scale-[0.99] transition"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-accent-fg">
            {grupo}
          </span>
          <h3 className="font-semibold leading-tight truncate">{nome}</h3>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-muted shrink-0" />
      </div>

      <div className="mt-3 flex items-center gap-2 text-sm">
        <span className="rounded-lg bg-surface-2 px-2.5 py-1 font-medium">
          {series} × {repsAlvo}
        </span>
        <span className="rounded-lg bg-surface-2 px-2.5 py-1 font-medium">
          {cargaAlvo} kg
        </span>
      </div>

      {ultimaSessao && (
        <p className="mt-2.5 text-xs text-muted">
          Última sessão: {ultimaSessao.reps} reps · {ultimaSessao.carga} kg
        </p>
      )}
    </Link>
  )
}
