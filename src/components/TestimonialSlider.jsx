import { useEffect, useState } from 'react'
const INTERVAL = 6500
export default function TestimonialSlider({ items }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = items.length
  const go = (k) => setI((k + n) % n)
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setI((x) => (x + 1) % n), INTERVAL)
    return () => clearTimeout(id)
  }, [i, paused, n])
  return (
    <div className="tslider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel">
      <button type="button" className="tnav prev" aria-label="Previous story" onClick={() => go(i - 1)}>‹</button>
      <div className="tstage">
        {items.map((t, k) => (
          <figure key={t.name} className={'tslide' + (k === i ? ' active' : '')} aria-hidden={k !== i}>
            {t.tag && <span className="ttag">{t.tag}</span>}
            <div className="tstars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>{t.text}</blockquote>
            <figcaption><i className="tavatar">{t.name[0]}</i><span><strong>{t.name}</strong><small>{t.loc}</small></span></figcaption>
          </figure>
        ))}
      </div>
      <button type="button" className="tnav next" aria-label="Next story" onClick={() => go(i + 1)}>›</button>
      <div className="tdots" role="tablist">
        {items.map((t, k) => <button key={t.name} type="button" role="tab" aria-selected={k === i} aria-label={'Story ' + (k + 1)} className={k === i ? 'on' : ''} onClick={() => go(k)} />)}
      </div>
    </div>
  )
}
