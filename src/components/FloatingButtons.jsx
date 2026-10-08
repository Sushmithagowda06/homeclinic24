import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { CONTACT } from '../data.js'
const WA_MESSAGE = 'Hello Home Clinic 24, I would like to book an appointment. Could I get a call back, please?'
export default function FloatingButtons() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (<div className="floating">
    <button type="button" className={'fab fab-top' + (show ? ' show' : '')} aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Icon name="up" /></button>
    <a className="fab fab-wa" href={'https://wa.me/' + CONTACT.whatsapp.replace(/\D/g, '') + '?text=' + encodeURIComponent(WA_MESSAGE)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 00-8.46 15.05L2 22l5.1-1.34A9.92 9.92 0 1012.04 2zm0 18.1a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.03.8.81-2.95-.2-.31a8.2 8.2 0 1111 3.78 8.1 8.1 0 01-4.1 0zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 01-3.3-2.88c-.25-.43.25-.4.71-1.32.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 00-.66.31 2.77 2.77 0 00-.86 2.06c0 1.21.88 2.38 1 2.55.12.16 1.73 2.64 4.2 3.7 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.29z" /></svg>
    </a>
    <a className="fab fab-call" href={'tel:' + CONTACT.phone.replace(/[^\d+]/g, '')} aria-label="Call us"><Icon name="phone" /></a>
  </div>)
}
