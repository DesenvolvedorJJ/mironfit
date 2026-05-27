import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { treinoDoDia } from "../data/treinos"
import { MinusIcon, PlusIcon, CheckIcon, TrendUpIcon } from "../components/Icons"

// Stepper numérico (reduz cliques e tempo de preenchimento — req. Funcionalidade 1).
function Stepper({ rotulo, valor, passo, sufixo, onChange }) {
  return (
    <div className="flex-1">
      <p className="text-[11px] text-muted mb-1.5 text-center">{rotulo}</p>
      <div className="flex items-center justify-between rounded-xl bg-surface-2 px-1 py-1">
        <button
          onClick={() => onChange(Math.max(0, +(valor - passo).toFixed(1)))}
          className="w-8 h-8 rounded-lg bg-bg grid place-items-center text-text active:scale-90 transition"
          aria-label={`Diminuir ${rotulo}`}
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <span className="font-bold tabular-nums">
          {valor}
          {sufixo && <span className="text-xs text-muted ml-0.5">{sufixo}</span>}
        </span>
        <button
          onClick={() => onChange(+(valor + passo).toFixed(1))}
          className="w-8 h-8 rounded-lg bg-bg grid place-items-center text-text active:scale-90 transition"
          aria-label={`Aumentar ${rotulo}`}
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default function Exercicio() {
  const { id } = useParams()
  const navigate = useNavigate()
  const exercicio = treinoDoDia.exercicios.find((e) => e.id === Number(id))

  // Estado alternativo: exercício inexistente (ausência de resultado).
  if (!exercicio) {
    return (
      <div className="pb-6">
        <Header titulo="Exercício" voltar />
        <div className="px-5 py-16 text-center text-muted">
          <p>Exercício não encontrado.</p>
        </div>
      </div>
    )
  }

  // Inicializa as séries com os valores-alvo (pré-preenchimento p/ rapidez).
  const [series, setSeries] = useState(
    Array.from({ length: exercicio.series }, () => ({
      reps: exercicio.repsAlvo,
      carga: exercicio.cargaAlvo,
      feita: false,
    }))
  )
  const [salvo, setSalvo] = useState(false)

  const atualizar = (i, campo, valor) =>
    setSeries((prev) => prev.map((s, idx) => (idx === i ? { ...s, [campo]: valor } : s)))

  const alternarFeita = (i) =>
    setSeries((prev) => prev.map((s, idx) => (idx === i ? { ...s, feita: !s.feita } : s)))

  const concluidas = series.filter((s) => s.feita).length

  // Comparativo com a última sessão (Conteúdo 3).
  const evoluiu =
    exercicio.ultimaSessao && exercicio.cargaAlvo > exercicio.ultimaSessao.carga
  const difCarga = exercicio.ultimaSessao
    ? +(exercicio.cargaAlvo - exercicio.ultimaSessao.carga).toFixed(1)
    : 0

  const salvar = () => {
    // Protótipo: registro fica só em memória (some ao recarregar).
    setSalvo(true)
    setTimeout(() => navigate("/treino"), 1100)
  }

  return (
    <div className="pb-6">
      <Header titulo={exercicio.nome} subtitulo={exercicio.grupo} voltar />

      <div className="px-5 space-y-4">
        {/* Comparativo da última sessão */}
        {exercicio.ultimaSessao && (
          <div className="rounded-2xl bg-surface border border-border p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
              Última sessão
            </p>
            <div className="mt-1 flex items-center justify-between">
              <p className="font-semibold">
                {exercicio.ultimaSessao.reps} reps · {exercicio.ultimaSessao.carga} kg
              </p>
              {difCarga !== 0 && (
                <span
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${
                    evoluiu ? "text-success" : "text-muted"
                  }`}
                >
                  <TrendUpIcon className="w-4 h-4" />
                  {difCarga > 0 ? `+${difCarga}` : difCarga} kg
                </span>
              )}
            </div>
          </div>
        )}

        {/* Séries */}
        <div className="space-y-2.5">
          {series.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-3 transition ${
                s.feita ? "bg-primary/10 border-primary/40" : "bg-surface border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 shrink-0 grid place-items-center rounded-lg bg-surface-2 text-sm font-bold">
                  {i + 1}
                </span>
                <Stepper
                  rotulo="Reps"
                  valor={s.reps}
                  passo={1}
                  onChange={(v) => atualizar(i, "reps", v)}
                />
                <Stepper
                  rotulo="Carga"
                  valor={s.carga}
                  passo={2.5}
                  sufixo="kg"
                  onChange={(v) => atualizar(i, "carga", v)}
                />
                <button
                  onClick={() => alternarFeita(i)}
                  aria-label="Concluir série"
                  className={`w-9 h-9 shrink-0 grid place-items-center rounded-xl transition active:scale-90 ${
                    s.feita ? "bg-primary text-black" : "bg-surface-2 text-muted"
                  }`}
                >
                  <CheckIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted">
          {concluidas} de {series.length} séries concluídas
        </p>

        <button
          onClick={salvar}
          disabled={salvo}
          className="w-full rounded-xl bg-primary text-black font-bold py-3.5 active:scale-[0.98] transition disabled:opacity-70"
        >
          {salvo ? "Registrado! ✓" : "Concluir exercício"}
        </button>
      </div>
    </div>
  )
}
