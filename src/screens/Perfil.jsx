import Header from "../components/Header"
import { useTheme } from "../components/ThemeProvider"
import { usuario } from "../data/usuario"
import { metas } from "../data/metas"
import { historico } from "../data/historico"
import { SettingsIcon, ChevronRightIcon, FlameIcon, SunIcon, MoonIcon } from "../components/Icons"

export default function Perfil() {
  const { theme, alternar } = useTheme()
  const escuro = theme === "dark"
  const concluidas = metas.filter((m) => m.status === "concluida").length

  const itensMenu = [
    "Editar perfil",
    "Notificações",
    "Preferências de treino",
    "Privacidade",
    "Ajuda e suporte",
  ]

  return (
    <div className="pb-6">
      <Header
        titulo="Perfil"
        acao={
          <button
            aria-label="Configurações"
            className="w-9 h-9 grid place-items-center rounded-full bg-surface-2 text-text active:scale-90 transition"
          >
            <SettingsIcon className="w-5 h-5" />
          </button>
        }
      />

      <div className="px-5 space-y-5">
        {/* Cabeçalho do usuário */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary text-black grid place-items-center text-xl font-extrabold">
            {usuario.iniciais}
          </div>
          <div>
            <h2 className="text-lg font-extrabold leading-tight">{usuario.nome}</h2>
            <span className="inline-flex items-center gap-1 mt-1 rounded-full bg-primary/20 text-accent-fg px-2.5 py-0.5 text-xs font-semibold">
              <FlameIcon className="w-3.5 h-3.5" /> Plano {usuario.plano}
            </span>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { valor: historico.length, rotulo: "Treinos" },
            { valor: usuario.diasSeguidos, rotulo: "Sequência" },
            { valor: concluidas, rotulo: "Metas batidas" },
          ].map((s) => (
            <div key={s.rotulo} className="rounded-2xl bg-surface border border-border p-3 text-center">
              <p className="text-xl font-extrabold">{s.valor}</p>
              <p className="text-[11px] text-muted">{s.rotulo}</p>
            </div>
          ))}
        </div>

        {/* Alternância de tema */}
        <div className="rounded-2xl bg-surface border border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 grid place-items-center rounded-full bg-surface-2 text-accent-fg">
              {escuro ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </span>
            <div>
              <p className="text-sm font-semibold">Aparência</p>
              <p className="text-xs text-muted">{escuro ? "Modo escuro" : "Modo claro"}</p>
            </div>
          </div>
          <button
            onClick={alternar}
            role="switch"
            aria-checked={escuro}
            aria-label="Alternar tema"
            className={`relative w-12 h-7 rounded-full transition-colors ${
              escuro ? "bg-primary" : "bg-surface-2"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                escuro ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu */}
        <div className="rounded-2xl bg-surface border border-border overflow-hidden divide-y divide-border">
          {itensMenu.map((item) => (
            <button
              key={item}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left active:bg-surface-2 transition"
            >
              <span className="text-sm font-medium">{item}</span>
              <ChevronRightIcon className="w-5 h-5 text-muted" />
            </button>
          ))}
        </div>

        <button className="w-full rounded-xl border border-border text-danger font-semibold py-3 active:scale-[0.98] transition">
          Sair da conta
        </button>
      </div>
    </div>
  )
}
