'use client'

import { useEffect, useRef } from 'react'

// ── Canvas dimensions ──────────────────────────────────────────
const CW = 800
const CH = 190
const GROUND = 155

// ── Player ────────────────────────────────────────────────────
const PX = 90        // fixed x
const PH = 38        // height
const PW = 18        // hitbox width
const GRAVITY = 0.68
const JUMP_FORCE = -13.5
const INIT_SPEED = 4.5
const MAX_SPEED = 11
const MIN_GAP = 310
const MAX_GAP = 570

// ── Palette (matches site) ─────────────────────────────────────
const C = {
  bg: '#0A0A0A',
  surface: '#141414',
  ground: '#222222',
  fg: '#EEEAE3',
  muted: '#5A5A5A',
  dim: '#333333',
  accent: '#FF4D1C',
}

// ── Draw helpers ──────────────────────────────────────────────

function drawGround(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = C.ground
  ctx.fillRect(0, GROUND, CW, 2)
  ctx.fillStyle = '#1A1A1A'
  ctx.fillRect(0, GROUND + 4, CW, 1)
}

function drawRunner(
  ctx: CanvasRenderingContext2D,
  y: number,
  frame: number,
  airborne: boolean
) {
  const x = PX
  const stride = Math.floor(frame / 7) % 2 === 0
  ctx.fillStyle = C.accent

  // Head
  ctx.beginPath()
  ctx.arc(x, y + 7, 7, 0, Math.PI * 2)
  ctx.fill()

  // Body
  ctx.fillRect(x - 5, y + 13, 10, 13)

  if (airborne) {
    // Tucked legs
    ctx.fillRect(x - 9, y + 26, 6, 9)
    ctx.fillRect(x + 3, y + 26, 6, 9)
    // Arms raised
    ctx.fillRect(x - 15, y + 13, 11, 4)
    ctx.fillRect(x + 4, y + 13, 11, 4)
  } else if (stride) {
    // Stride A
    ctx.fillRect(x - 10, y + 26, 6, 10)   // back leg
    ctx.fillRect(x + 4, y + 26, 6, 7)     // front leg
    ctx.fillRect(x + 4, y + 30, 10, 4)    // front foot
    ctx.fillRect(x + 4, y + 15, 11, 4)    // front arm
    ctx.fillRect(x - 15, y + 19, 11, 4)   // back arm
  } else {
    // Stride B
    ctx.fillRect(x - 10, y + 26, 6, 7)    // back leg
    ctx.fillRect(x - 10, y + 30, 10, 4)   // back foot
    ctx.fillRect(x + 4, y + 26, 6, 10)    // front leg
    ctx.fillRect(x - 15, y + 15, 11, 4)   // front arm
    ctx.fillRect(x + 4, y + 19, 11, 4)    // back arm
  }
}

function drawVinyl(ctx: CanvasRenderingContext2D, x: number) {
  const cx = x
  const cy = GROUND - 22
  const r = 22

  // Outer disc
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.fillStyle = C.surface
  ctx.fill()
  ctx.strokeStyle = C.fg
  ctx.lineWidth = 2
  ctx.stroke()

  // Grooves
  for (const gr of [r * 0.76, r * 0.57, r * 0.38]) {
    ctx.beginPath()
    ctx.arc(cx, cy, gr, 0, Math.PI * 2)
    ctx.strokeStyle = C.muted
    ctx.lineWidth = 1
    ctx.stroke()
  }

  // Label (orange center)
  ctx.beginPath()
  ctx.arc(cx, cy, r * 0.22, 0, Math.PI * 2)
  ctx.fillStyle = C.accent
  ctx.fill()

  // Center hole
  ctx.beginPath()
  ctx.arc(cx, cy, 2.5, 0, Math.PI * 2)
  ctx.fillStyle = C.bg
  ctx.fill()
}

function drawCoffee(ctx: CanvasRenderingContext2D, x: number) {
  const bx = x - 12
  const by = GROUND - 42
  const bw = 24
  const bh = 37

  // Cup body
  ctx.fillStyle = C.surface
  ctx.fillRect(bx, by, bw, bh)
  ctx.strokeStyle = C.fg
  ctx.lineWidth = 2
  ctx.strokeRect(bx, by, bw, bh)

  // Lid crease
  ctx.strokeStyle = C.muted
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(bx + 1, by + 6)
  ctx.lineTo(bx + bw - 1, by + 6)
  ctx.stroke()

  // Handle
  ctx.beginPath()
  ctx.arc(bx + bw + 8, by + bh * 0.5 + 2, 9, -Math.PI * 0.5, Math.PI * 0.5)
  ctx.strokeStyle = C.fg
  ctx.lineWidth = 2
  ctx.stroke()

  // Steam
  for (let i = 0; i < 2; i++) {
    const sx = bx + 6 + i * 11
    ctx.beginPath()
    ctx.moveTo(sx, by - 3)
    ctx.bezierCurveTo(sx - 3, by - 8, sx + 3, by - 13, sx, by - 18)
    ctx.strokeStyle = C.muted
    ctx.lineWidth = 1.5
    ctx.stroke()
  }

  // "VV" branding
  ctx.fillStyle = C.accent
  ctx.font = 'bold 9px monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('VV', bx + bw / 2, by + bh * 0.58)
}

// ── Collision ─────────────────────────────────────────────────

function hitsVinyl(py: number, ox: number): boolean {
  const px = PX - PW / 2
  const cx = ox, cy = GROUND - 22, r = 19
  const nearX = Math.max(px, Math.min(cx, px + PW))
  const nearY = Math.max(py + 6, Math.min(cy, py + PH))
  return Math.hypot(cx - nearX, cy - nearY) < r
}

function hitsCoffee(py: number, ox: number): boolean {
  const px = PX - PW / 2
  const bx = ox - 12, by = GROUND - 42, bw = 22, bh = 36
  return px < bx + bw - 2 && px + PW > bx + 2 && py + 6 < by + bh && py + PH > by + 2
}

// ── Component ─────────────────────────────────────────────────

export default function RunnerGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    if (!ctx) return

    const gs = {
      phase: 'idle' as 'idle' | 'playing' | 'dead',
      py: GROUND - PH,
      pvy: 0,
      obstacles: [] as { x: number; type: 'vinyl' | 'coffee' }[],
      frame: 0,
      speed: INIT_SPEED,
      nextObs: 520,
      score: 0,
      highScore: 0,
    }

    let raf = 0

    function reset() {
      gs.phase = 'playing'
      gs.py = GROUND - PH
      gs.pvy = 0
      gs.obstacles = []
      gs.frame = 0
      gs.speed = INIT_SPEED
      gs.nextObs = 520
      gs.score = 0
    }

    function handleInput() {
      if (gs.phase === 'idle' || gs.phase === 'dead') {
        reset()
      } else if (gs.phase === 'playing' && gs.py >= GROUND - PH - 2) {
        gs.pvy = JUMP_FORCE
      }
    }

    function update() {
      if (gs.phase !== 'playing') return
      gs.frame++
      gs.speed = Math.min(MAX_SPEED, INIT_SPEED + gs.frame * 0.003)

      // Physics
      gs.pvy += GRAVITY
      gs.py = Math.min(gs.py + gs.pvy, GROUND - PH)
      if (gs.py >= GROUND - PH) gs.pvy = 0

      // Spawn
      gs.nextObs -= gs.speed
      if (gs.nextObs <= 0) {
        gs.obstacles.push({ x: CW + 40, type: Math.random() < 0.5 ? 'vinyl' : 'coffee' })
        gs.nextObs = MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP)
      }

      gs.obstacles = gs.obstacles
        .map(o => ({ ...o, x: o.x - gs.speed }))
        .filter(o => o.x > -70)

      // Collide
      for (const obs of gs.obstacles) {
        if ((obs.type === 'vinyl' ? hitsVinyl : hitsCoffee)(gs.py, obs.x)) {
          gs.phase = 'dead'
          gs.score = Math.floor(gs.frame / 8)
          if (gs.score > gs.highScore) gs.highScore = gs.score
          return
        }
      }

      gs.score = Math.floor(gs.frame / 8)
    }

    function draw() {
      // Background
      ctx.fillStyle = C.bg
      ctx.fillRect(0, 0, CW, CH)

      drawGround(ctx)

      // Obstacles
      for (const obs of gs.obstacles) {
        if (obs.type === 'vinyl') drawVinyl(ctx, obs.x)
        else drawCoffee(ctx, obs.x)
      }

      // Player
      drawRunner(ctx, gs.py, gs.frame, gs.py < GROUND - PH - 3)

      // Score HUD
      ctx.textBaseline = 'top'
      ctx.textAlign = 'right'
      if (gs.highScore > 0) {
        ctx.fillStyle = C.dim
        ctx.font = '12px monospace'
        ctx.fillText(`HI  ${String(gs.highScore).padStart(5, '0')}`, CW - 16, 14)
      }
      ctx.fillStyle = C.muted
      ctx.font = '12px monospace'
      ctx.fillText(String(gs.score).padStart(5, '0'), CW - 16, gs.highScore > 0 ? 30 : 14)

      // Overlay text
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      if (gs.phase === 'idle') {
        ctx.fillStyle = C.fg
        ctx.font = 'bold 14px monospace'
        ctx.fillText('PRESS SPACE OR TAP TO RUN', CW / 2, CH / 2 - 12)
        ctx.fillStyle = C.muted
        ctx.font = '11px monospace'
        ctx.fillText('JUMP OVER VINYL RECORDS & COFFEE CUPS', CW / 2, CH / 2 + 11)
      } else if (gs.phase === 'dead') {
        ctx.fillStyle = C.accent
        ctx.font = 'bold 19px monospace'
        ctx.fillText('GAME OVER', CW / 2, CH / 2 - 14)
        ctx.fillStyle = C.fg
        ctx.font = '13px monospace'
        ctx.fillText(`SCORE  ${gs.score}`, CW / 2, CH / 2 + 8)
        ctx.fillStyle = C.muted
        ctx.font = '11px monospace'
        ctx.fillText('PRESS SPACE OR TAP TO RETRY', CW / 2, CH / 2 + 28)
      }
    }

    function tick() {
      update()
      draw()
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    const onKey = (e: KeyboardEvent) => {
      if (['Space', 'ArrowUp', 'Enter'].includes(e.code)) {
        e.preventDefault()
        handleInput()
      }
    }
    const onClick = () => handleInput()
    const onTouch = (e: TouchEvent) => { e.preventDefault(); handleInput() }

    window.addEventListener('keydown', onKey)
    canvas.addEventListener('click', onClick)
    canvas.addEventListener('touchstart', onTouch, { passive: false })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKey)
      canvas.removeEventListener('click', onClick)
      canvas.removeEventListener('touchstart', onTouch)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={CW}
      height={CH}
      className="w-full block cursor-pointer select-none"
      style={{ imageRendering: 'pixelated' }}
      aria-label="Mini runner game — press Space or tap to jump"
    />
  )
}
