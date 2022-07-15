import { useRef, useState, useEffect, useCallback, MouseEvent } from 'react'

export default function App ({ width, height, draw, onClick, className }: {
  width?: number
  height?: number
  draw?: (canvasContext: CanvasRenderingContext2D) => void
  onClick?: ({ event, canvas }: { event: MouseEvent, canvas: HTMLCanvasElement }) => void
  className?: string
}): JSX.Element {
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null)

  const handleClick = useCallback((event: MouseEvent) => {
    if (canvasRef.current == null) return

    onClick?.({ event, canvas: canvasRef.current })
  }, [onClick])

  useEffect(() => {
    let animationFrameId: number
    function render (): void {
      if (canvasContext == null || draw == null) return
      draw(canvasContext)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, canvasContext])

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas == null) return

    const context = canvas.getContext('2d')
    setCanvasContext(context)
  }, [canvasRef])

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      width={width}
      height={height}
      className={className}
    />
  )
}
