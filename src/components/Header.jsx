import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useBooking } from '../BookingContext.jsx'
import Icon from './Icon.jsx'
const LINKS = [['/', 'Home'], ['/about', 'About Us'], ['/doctor-consultation', 'Doctor Consultation'], ['/physiotherapy', 'Physiotherapy'], ['/pricing', 'Pricing'], ['/contact', 'Contact']]
export default function Header() {
  const [open, setOpen] = useState(false)
  const { openBooking } = useBooking()
  return (<>
    <div className="promo">Now serving Mysuru: Book your home visit today <Link to="/contact">Contact us</Link></div>
    <header className="header">
      <div className="container header-row">
        <Link to="/" className="logo-link" onClick={() => setOpen(false)}><img src="/images/logo.png" alt="Home Clinic 24 – Health care at your Door Step" /></Link>
        <span className="loc"><Icon name="pin" size={18} />Mysuru</span>
        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
        <nav className={'nav' + (open ? ' open' : '')}>
          <div className="nav-head"><span>Menu</span><button type="button" className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button></div>
          {LINKS.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{l}</NavLink>)}
        </nav>
        <div className="header-actions">
          {/* <button className="btn btn-primary btn-sm" onClick={() => openBooking()}>Book Now<span className="dot">→</span></button> */}
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        </div>
      </div>
    </header>
  </>)
}
