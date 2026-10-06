import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { CONTACT } from '../data.js'
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
    <a className="fab fab-call" href={'tel:' + CONTACT.phone.replace(/[^\d+]/g, '')} aria-label="Call us"><Icon name="phone" /></a>
  </div>)
}
