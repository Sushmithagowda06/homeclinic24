import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { CONTACT } from '../data.js'
export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section className="section"><div className="container">
      <div className="head"><h1 className="h1s">Need Help?</h1><p>We’re happy to answer your questions.</p></div>
      <div className="grid-2 contact">
        <div className="card info">{[['phone', 'Phone', CONTACT.phone], ['mail', 'Email', CONTACT.email], ['chat', 'WhatsApp', CONTACT.whatsapp], ['pin', 'Location', CONTACT.location]].map(([i, l, v]) => <div key={l}><div className="icon-wrap"><Icon name={i} /></div><div><small>{l}</small><b>{v}</b></div></div>)}</div>
        {/* <form className="card" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          {sent ? <p className="success">Thank you! Your message has been recorded for demonstration purposes.</p> : <>
            <label className="field">Name<input required /></label><label className="field">Phone<input type="tel" required /></label><label className="field">Email<input type="email" /></label><label className="field">Message<textarea rows="4" required /></label>
            <button className="btn btn-primary">Send Message</button></>}
        </form> */}
      </div>
    </div></section>
  )
}
