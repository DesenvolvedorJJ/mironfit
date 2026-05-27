import { useNavigate } from "react-router-dom"
import { ChevronLeftIcon } from "./Icons"

// Cabeçalho de tela. Quando "voltar" é true, mostra botão de retorno
// (navegação contextual/local - Seção 3.1c). "acao" renderiza algo à direita.
export default function Header({ titulo, subtitulo, voltar = false, acao = null }) {
  const navigate = useNavigate()
  return (
    <header className="shrink-0 px-5 pt-12 pb-4 flex items-center gap-3 bg-bg">
      {voltar && (
        <button
          onClick={() => navigate(-1)}
          aria-label="Voltar"
          className="w-9 h-9 -ml-1 flex items-center justify-center rounded-full bg-surface-2 text-text active:scale-95 transition"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
      )}
      <div className="flex-1 min-w-0">
        <h1 className="text-xl font-bold leading-tight truncate">{titulo}</h1>
        {subtitulo && <p className="text-sm text-muted truncate">{subtitulo}</p>}
      </div>
      {acao}
    </header>
  )
}
