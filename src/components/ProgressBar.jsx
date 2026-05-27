// Barra de progresso. cor: "primary" (amarelo) ou "success" (verde, meta concluída).
export default function ProgressBar({ atual, alvo, cor = "primary" }) {
  const pct = Math.min(100, Math.round((atual / alvo) * 100))
  const fill = cor === "success" ? "bg-success" : "bg-primary"
  return (
    <div className="h-2 w-full rounded-full bg-surface-2 overflow-hidden">
      <div className={`h-full rounded-full ${fill} transition-all`} style={{ width: `${pct}%` }} />
    </div>
  )
}
