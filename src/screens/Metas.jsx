import { useState } from "react"
import Header from "../components/Header"
import GoalCard from "../components/GoalCard"
import { metas as metasIniciais } from "../data/metas"
import { PlusIcon, TargetIcon } from "../components/Icons"

export default function Metas() {
  // Estado local: permite "limpar" para demonstrar o estado vazio do protótipo.
  const [metas, setMetas] = useState(metasIniciais)

  const ativas = metas.filter((m) => m.status === "andamento")
  const outras = metas.filter((m) => m.status !== "andamento")

  return (
    <div className="pb-6">
      <Header
        titulo="Metas"
        subtitulo={`${ativas.length} em andamento`}
        acao={
          <button
            aria-label="Nova meta"
            className="w-9 h-9 grid place-items-center rounded-full bg-primary text-black active:scale-90 transition"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        }
      />

      <div className="px-5">
        {metas.length === 0 ? (
          // Estado vazio (Funcionalidade 2): convida a criar a primeira meta.
          <div className="py-16 text-center">
            <div className="mx-auto w-16 h-16 grid place-items-center rounded-2xl bg-surface-2 text-muted mb-4">
              <TargetIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Nenhuma meta ainda</h3>
            <p className="mt-1 text-sm text-muted">
              Crie sua primeira meta e acompanhe seu progresso.
            </p>
            <button className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-primary text-black font-bold px-5 py-3 active:scale-95 transition">
              <PlusIcon className="w-5 h-5" /> Criar meta
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <section className="space-y-3">
              {ativas.map((m) => (
                <GoalCard key={m.id} meta={m} />
              ))}
            </section>

            {outras.length > 0 && (
              <section>
                <h2 className="text-sm font-semibold text-muted mb-3">Anteriores</h2>
                <div className="space-y-3">
                  {outras.map((m) => (
                    <GoalCard key={m.id} meta={m} />
                  ))}
                </div>
              </section>
            )}

            {/* Botão de demonstração do estado vazio (apenas no protótipo) */}
            <button
              onClick={() => setMetas([])}
              className="w-full text-center text-xs text-muted/70 underline underline-offset-2 py-2"
            >
              (demo: ver estado vazio)
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
