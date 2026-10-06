import { useState } from 'react'
import { FAQS } from '../data.js'
const VISIBLE = 5
export default function FAQ() {
  const [open, setOpen] = useState(-1)
  const [all, setAll] = useState(false)
  const items = all ? FAQS : FAQS.slice(0, VISIBLE)
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className={'faq-item' + (open === i ? ' open' : '')}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{q}<span>+</span></button>
          <div className="faq-body"><p>{a}</p></div>
        </div>
      ))}
      {FAQS.length > VISIBLE && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <button className="btn btn-outline" onClick={() => { setAll(!all); setOpen(-1) }}>{all ? 'View less' : 'View more'}</button>
        </div>
      )}
    </div>
  )
}
