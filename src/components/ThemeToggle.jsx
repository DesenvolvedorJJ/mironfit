import { useTheme } from "./ThemeProvider"
import { SunIcon, MoonIcon } from "./Icons"

// Botão de alternância light/dark.
export default function ThemeToggle({ className = "" }) {
  const { theme, alternar } = useTheme()
  const escuro = theme === "dark"
  return (
    <button
      onClick={alternar}
      aria-label={escuro ? "Ativar modo claro" : "Ativar modo escuro"}
      title={escuro ? "Modo claro" : "Modo escuro"}
      className={`w-9 h-9 grid place-items-center rounded-full bg-surface-2 text-text active:scale-90 transition ${className}`}
    >
      {escuro ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  )
}
