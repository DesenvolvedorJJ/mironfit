// Moldura de celular para visualizar o protótipo mobile em uma tela de desktop.
// Centraliza o app, simula tela ~390x844 (iPhone) com notch e cantos arredondados.
export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-canvas">
      <div className="relative w-full max-w-[390px] h-[844px] max-h-[92vh] rounded-[2.6rem] bg-bg border border-border shadow-2xl shadow-black/20 dark:shadow-black/60 overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-32 h-6 bg-black rounded-b-2xl" />
        {children}
      </div>
    </div>
  )
}
