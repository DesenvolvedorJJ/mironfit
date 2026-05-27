import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"
import Header from "../components/Header"
import { useTheme } from "../components/ThemeProvider"
import { evolucaoCarga, frequenciaSemanal, resumoEvolucao } from "../data/evolucao"
import { TrendUpIcon } from "../components/Icons"

export default function Evolucao() {
  const { theme } = useTheme()
  const escuro = theme === "dark"

  // Cores dos gráficos seguem o tema (Recharts não usa classes do Tailwind).
  const c = {
    primary: "#FFD60A",
    primaryDark: "#E6B800",
    grid: escuro ? "#2C313B" : "#E3E6EB",
    axis: escuro ? "#9098A6" : "#6E7682",
    tip: {
      background: escuro ? "#232830" : "#FFFFFF",
      border: `1px solid ${escuro ? "#2C313B" : "#E3E6EB"}`,
      borderRadius: 12,
      color: escuro ? "#F2F4F7" : "#14161B",
      fontSize: 12,
    },
  }

  return (
    <div className="pb-6">
      <Header titulo="Evolução" subtitulo="Seu progresso nas últimas 6 semanas" />

      <div className="px-5 space-y-5">
        {/* Cartões de resumo */}
        <div className="grid grid-cols-3 gap-2.5">
          {resumoEvolucao.map((r) => (
            <div key={r.rotulo} className="rounded-2xl bg-surface border border-border p-3">
              <p className="text-lg font-extrabold leading-none">{r.valor}</p>
              <p className="mt-1 text-[10px] text-muted leading-tight">{r.rotulo}</p>
              <span
                className={`mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-semibold ${
                  r.positivo ? "text-success" : "text-danger"
                }`}
              >
                <TrendUpIcon className="w-3 h-3" />
                {r.variacao}
              </span>
            </div>
          ))}
        </div>

        {/* Evolução de carga */}
        <div className="rounded-2xl bg-surface border border-border p-4">
          <h3 className="font-semibold mb-1">Carga — Supino reto</h3>
          <p className="text-xs text-muted mb-3">Evolução do peso (kg)</p>
          <ResponsiveContainer width="100%" height={170}>
            <LineChart data={evolucaoCarga} margin={{ top: 5, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={c.grid} vertical={false} />
              <XAxis dataKey="semana" stroke={c.axis} fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke={c.axis} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={c.tip} cursor={{ stroke: c.primary, strokeWidth: 1 }} />
              <Line
                type="monotone"
                dataKey="carga"
                stroke={c.primary}
                strokeWidth={3}
                dot={{ r: 3, fill: c.primary }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Frequência semanal */}
        <div className="rounded-2xl bg-surface border border-border p-4">
          <h3 className="font-semibold mb-1">Frequência semanal</h3>
          <p className="text-xs text-muted mb-3">Treinos por semana</p>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={frequenciaSemanal} margin={{ top: 5, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={c.grid} vertical={false} />
              <XAxis dataKey="semana" stroke={c.axis} fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke={c.axis} fontSize={11} tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip contentStyle={c.tip} cursor={{ fill: escuro ? "#232830" : "#ECEEF2" }} />
              <Bar dataKey="treinos" fill={c.primaryDark} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
