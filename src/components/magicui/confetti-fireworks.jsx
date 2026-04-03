"use client"

import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"


export function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min, max) =>
  Math.random() * (max - min) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  return (
    <div className="relative">
      <Button
  onClick={handleClick}
  className="
    px-6 py-5 rounded-2xl
    text-white font-semibold text-lg tracking-wide
    border border-white/30
    bg-white/10 backdrop-blur-md
    shadow-[0_4px_24px_rgba(0,0,0,0.15)]
    transition-all duration-300
    hover:bg-white/20 hover:scale-105
    active:scale-95
    font-['Montserrat']
  "
>
  👉 Pencet ini biar heboh! 👈
</Button>
    </div>
  )
}
