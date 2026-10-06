import { useEffect, useRef, useState } from 'react'
export default function PhotoCarousel({ items }) {
  const track = useRef(null)
  const [paused, setPaused] = useState(false)
  const step = (dir) => {
    const el = track.current
    if (!el) return
    const w = el.firstElementChild.getBoundingClientRect().width + 20
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    if (dir > 0 && end) el.scrollTo({ left: 0, behavior: 'smooth' })
    else if (dir < 0 && el.scrollLeft <= 8) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    else el.scrollBy({ left: dir * w, behavior: 'smooth' })
  }
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => step(1), 3500)
    return () => clearInterval(id)
  }, [paused])
  return (
    <div className="pcar" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <button className="pcar-btn prev" onClick={() => step(-1)} aria-label="Previous">‹</button>
      <div className="pcar-track" ref={track}>
        {items.map(([src, t]) => <figure key={src}><img src={src} alt={t} loading="lazy" /><figcaption>{t}</figcaption></figure>)}
      </div>
      <button className="pcar-btn next" onClick={() => step(1)} aria-label="Next">›</button>
    </div>
  )
}
