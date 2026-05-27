import { Link } from "react-router-dom"
import { usuario } from "../data/usuario"
import { treinoDoDia } from "../data/treinos"
import { metas } from "../data/metas"
import ProgressBar from "../components/ProgressBar"
import ThemeToggle from "../components/ThemeToggle"
import { FlameIcon, DumbbellIcon, ClockIcon, ChevronRightIcon } from "../components/Icons"

export default function Inicio() {
  const metasAtivas = metas.filter((m) => m.status === "andamento")

  return (
    <div className="px-5 pt-12 pb-6 space-y-5">
      {/* Saudação */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">Olá, bom treino 👋</p>
          <h1 className="text-2xl font-extrabold">{usuario.nome.split(" ")[0]}</h1>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="w-11 h-11 rounded-full bg-primary text-black grid place-items-center font-bold">
            {usuario.iniciais}
          </div>
        </div>
      </div>

      {/* Sequência + treinos no mês */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-surface border border-border p-4">
          <FlameIcon className="w-5 h-5 text-accent-fg" />
          <p className="mt-2 text-2xl font-extrabold">{usuario.diasSeguidos}</p>
          <p className="text-xs text-muted">dias seguidos</p>
        </div>
        <div className="rounded-2xl bg-surface border border-border p-4">
          <DumbbellIcon className="w-5 h-5 text-accent-fg" />
          <p className="mt-2 text-2xl font-extrabold">{usuario.treinosNoMes}</p>
          <p className="text-xs text-muted">treinos no mês</p>
        </div>
      </div>

      {/* Treino do dia (CTA principal) */}
      <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-5 text-black">
        <p className="text-sm font-semibold/90 opacity-80">Treino de hoje</p>
        <h2 className="mt-1 text-xl font-extrabold leading-tight">{treinoDoDia.nome}</h2>
        <div className="mt-2 flex items-center gap-4 text-sm font-medium opacity-90">
          <span className="inline-flex items-center gap-1">
            <DumbbellIcon className="w-4 h-4" /> {treinoDoDia.exercicios.length} exercícios
          </span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon className="w-4 h-4" /> ~{treinoDoDia.duracaoEstimada} min
          </span>
        </div>
        <Link
          to="/treino"
          className="mt-4 block w-full text-center rounded-xl bg-black/90 text-primary font-bold py-3 active:scale-[0.98] transition"
        >
          Iniciar treino
        </Link>
      </div>

      {/* Meta da semana */}
      <div className="rounded-2xl bg-surface border border-border p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Meta da semana</h3>
          <span className="text-sm text-muted">
            {usuario.treinosNaSemana}/{usuario.metaSemanal}
          </span>
        </div>
        <ProgressBar atual={usuario.treinosNaSemana} alvo={usuario.metaSemanal} />
      </div>

      {/* Atalho para metas */}
      <Link
        to="/metas"
        className="flex items-center justify-between rounded-2xl bg-surface border border-border p-4 active:scale-[0.99] transition"
      >
        <div>
          <h3 className="font-semibold">Minhas metas</h3>
          <p className="text-sm text-muted">{metasAtivas.length} em andamento</p>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-muted" />
      </Link>
    </div>
  )
}
