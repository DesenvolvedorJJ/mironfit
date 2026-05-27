// Metas pessoais (Funcionalidade 2).
// status: "andamento" | "concluida" | "expirada"
// Para demonstrar o "estado vazio", basta exportar [] em vez desta lista.
export const metas = [
  {
    id: 1,
    tipo: "Frequência semanal",
    descricao: "Treinar 5 vezes por semana",
    atual: 4,
    alvo: 5,
    unidade: "treinos",
    prazo: "Esta semana",
    status: "andamento",
  },
  {
    id: 2,
    tipo: "Carga-alvo",
    descricao: "Supino reto: atingir 45 kg",
    atual: 40,
    alvo: 45,
    unidade: "kg",
    prazo: "30 dias",
    status: "andamento",
  },
  {
    id: 3,
    tipo: "Treinos no mês",
    descricao: "Completar 20 treinos em maio",
    atual: 20,
    alvo: 20,
    unidade: "treinos",
    prazo: "Maio",
    status: "concluida",
  },
  {
    id: 4,
    tipo: "Frequência semanal",
    descricao: "Treinar 6 vezes por semana",
    atual: 3,
    alvo: 6,
    unidade: "treinos",
    prazo: "Encerrada",
    status: "expirada",
  },
]
