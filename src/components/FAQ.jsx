import { useState } from 'react'
import { FAQS } from '../data.js'
export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {FAQS.map(([q, a], i) => (
        <div key={q} className={'faq-item' + (open === i ? ' open' : '')}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{q}<span>+</span></button>
          <div className="faq-body"><p>{a}</p></div>
        </div>
      ))}
    </div>
  )
}
