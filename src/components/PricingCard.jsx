import Icon from './Icon.jsx'
import { useBooking } from '../BookingContext.jsx'
export default function PricingCard({ p }) {
  const { openBooking } = useBooking()
  return (
    <div className={'card pricing' + (p.popular ? ' popular' : '')}>
      {p.popular && <span className="badge">Most Popular</span>}
      <h3>{p.name}</h3><div className="price">₹{p.price.toLocaleString('en-IN')}</div>
      <ul className="ticks">{p.features.map((f) => <li key={f}><Icon name="check" size={18} />{f}</li>)}</ul>
      <button className={'btn ' + (p.popular ? 'btn-primary' : 'btn-outline')} onClick={() => openBooking('physio', p.id)}>{p.cta}</button>
    </div>
  )
}
