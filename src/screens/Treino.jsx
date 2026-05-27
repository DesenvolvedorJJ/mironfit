import Header from "../components/Header"
import ExerciseCard from "../components/ExerciseCard"
import { treinoDoDia } from "../data/treinos"
import { DumbbellIcon, ClockIcon } from "../components/Icons"

export default function Treino() {
  return (
    <div className="pb-6">
      <Header titulo={treinoDoDia.nome} subtitulo={treinoDoDia.foco} />

      <div className="px-5">
        <div className="flex items-center gap-4 text-sm text-muted mb-4">
          <span className="inline-flex items-center gap-1.5">
            <DumbbellIcon className="w-4 h-4" /> {treinoDoDia.exercicios.length} exercícios
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4" /> ~{treinoDoDia.duracaoEstimada} min
          </span>
        </div>

        <div className="space-y-3">
          {treinoDoDia.exercicios.map((ex) => (
            <ExerciseCard key={ex.id} exercicio={ex} />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          Toque em um exercício para registrar suas séries.
        </p>
      </div>
    </div>
  )
}
