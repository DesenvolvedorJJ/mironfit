import { Outlet } from "react-router-dom"
import PhoneFrame from "./PhoneFrame"
import BottomNav from "./BottomNav"

// Layout principal: moldura de celular + área de conteúdo rolável + nav global.
// As telas filhas são renderizadas no <Outlet />.
export default function Layout() {
  return (
    <PhoneFrame>
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet />
      </main>
      <BottomNav />
    </PhoneFrame>
  )
}
