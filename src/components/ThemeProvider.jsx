import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "light", alternar: () => {} })

const STORAGE_KEY = "mironfit-theme"

function temaInicial() {
  if (typeof window === "undefined") return "light"
  const salvo = localStorage.getItem(STORAGE_KEY)
  if (salvo) return salvo
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const alternar = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, alternar }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext)
