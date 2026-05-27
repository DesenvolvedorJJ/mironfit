import { NavLink } from "react-router-dom"
import { HomeIcon, DumbbellIcon, ChartIcon, HistoryIcon, UserIcon } from "./Icons"

// Navegação GLOBAL (Sistema de Navegação - Seção 3.1c).
// Sempre visível, ícone + texto (Sistema de Rotulagem - Seção 3.1b),
// para o usuário sempre saber onde está.
const itens = [
  { para: "/", rotulo: "Início", Icone: HomeIcon },
  { para: "/treino", rotulo: "Treino", Icone: DumbbellIcon },
  { para: "/evolucao", rotulo: "Evolução", Icone: ChartIcon },
  { para: "/historico", rotulo: "Histórico", Icone: HistoryIcon },
  { para: "/perfil", rotulo: "Perfil", Icone: UserIcon },
]

export default function BottomNav() {
  return (
    <nav className="shrink-0 bg-surface/95 backdrop-blur border-t border-border">
      <ul className="flex">
        {itens.map(({ para, rotulo, Icone }) => (
          <li key={para} className="flex-1">
            <NavLink
              to={para}
              end={para === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2 text-[11px] font-medium transition-colors ${
                  isActive ? "text-text font-semibold" : "text-muted hover:text-text"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`grid place-items-center w-12 h-7 rounded-full transition-colors ${
                      isActive ? "bg-primary text-black" : "text-current"
                    }`}
                  >
                    <Icone className="w-5 h-5" />
                  </span>
                  {rotulo}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
