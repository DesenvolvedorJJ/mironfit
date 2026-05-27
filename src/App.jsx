import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Inicio from "./screens/Inicio"
import Treino from "./screens/Treino"
import Exercicio from "./screens/Exercicio"
import Evolucao from "./screens/Evolucao"
import Historico from "./screens/Historico"
import Metas from "./screens/Metas"
import Perfil from "./screens/Perfil"

export default function App() {
  return (
    <Routes>
      {/* Todas as telas compartilham o Layout (moldura + navegação global) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/treino" element={<Treino />} />
        <Route path="/exercicio/:id" element={<Exercicio />} />
        <Route path="/evolucao" element={<Evolucao />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  )
}
