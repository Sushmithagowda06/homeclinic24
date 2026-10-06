import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { useBooking } from '../BookingContext.jsx'
export default function ServiceCard({ s }) {
  const { openBooking } = useBooking()
  return (
    <div className="card service-card">
      {s.img && <div className="svc-photo"><img src={s.img} alt={s.title} /></div>}
      <h3>{s.title}</h3><p>{s.desc}</p>
      <ul className="ticks">{s.features.map((f) => <li key={f}><Icon name="check" size={18} />{f}</li>)}</ul>
      {/* <div className="btn-row"><button className="btn btn-primary" onClick={() => openBooking(s.id)}>{s.cta}</button><Link to={s.to} className="btn btn-ghost">Learn more</Link></div> */}
    </div>
  )
}
