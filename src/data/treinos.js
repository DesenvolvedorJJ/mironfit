// Treino do dia + estrutura de exercícios.
// Cada exercício carrega "ultimaSessao" para o Comparativo de Evolução
// (Funcionalidade 3 / Conteúdo 3 do documento de escopo).

export const treinoDoDia = {
  id: "treino-a",
  nome: "Treino A — Peito e Tríceps",
  foco: "Superior",
  duracaoEstimada: 55, // minutos
  exercicios: [
    {
      id: 1,
      nome: "Supino reto com barra",
      grupo: "Peito",
      series: 4,
      repsAlvo: 12,
      cargaAlvo: 40,
      descanso: 90, // segundos
      ultimaSessao: { reps: 10, carga: 37.5 },
    },
    {
      id: 2,
      nome: "Supino inclinado halteres",
      grupo: "Peito",
      series: 3,
      repsAlvo: 12,
      cargaAlvo: 18,
      descanso: 75,
      ultimaSessao: { reps: 12, carga: 16 },
    },
    {
      id: 3,
      nome: "Crucifixo na máquina",
      grupo: "Peito",
      series: 3,
      repsAlvo: 15,
      cargaAlvo: 35,
      descanso: 60,
      ultimaSessao: { reps: 15, carga: 35 },
    },
    {
      id: 4,
      nome: "Tríceps na polia",
      grupo: "Tríceps",
      series: 4,
      repsAlvo: 12,
      cargaAlvo: 25,
      descanso: 60,
      ultimaSessao: { reps: 12, carga: 22.5 },
    },
    {
      id: 5,
      nome: "Tríceps francês",
      grupo: "Tríceps",
      series: 3,
      repsAlvo: 12,
      cargaAlvo: 14,
      descanso: 60,
      ultimaSessao: { reps: 10, carga: 14 },
    },
  ],
}

// Lista de treinos da rotina semanal (tela Início / seleção).
export const treinosSemana = [
  { id: "treino-a", nome: "Treino A", foco: "Peito e Tríceps", dia: "Seg/Qui", exercicios: 5 },
  { id: "treino-b", nome: "Treino B", foco: "Costas e Bíceps", dia: "Ter/Sex", exercicios: 6 },
  { id: "treino-c", nome: "Treino C", foco: "Pernas e Ombro", dia: "Qua/Sáb", exercicios: 7 },
]
