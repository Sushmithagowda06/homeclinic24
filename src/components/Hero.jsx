import { Link } from 'react-router-dom'
import ImageBox from './ImageBox.jsx'
import Icon from './Icon.jsx'
import { useBooking } from '../BookingContext.jsx'
export default function Hero({ title, sub, cta, service, image, alt, secondary }) {
  const { openBooking } = useBooking()
  return (
    <section className="hero2"><div className="container hero2-grid">
      <div className="hero2-left fade-up">
        {secondary && <div className="chips">
          <div className="chip"><span className="star">★</span><div><b>4.9</b><small>Patient Rating</small></div></div>
          <div className="chip"><div className="avs">{['A', 'R', 'S', 'M'].map((x) => <i key={x}>{x}</i>)}</div><div><b>1,000+</b><small>Patients Served</small></div></div>
        </div>}
        <h1>{title}</h1><p className="lead">{sub}</p>
        <div className="btn-row">
          {/* <button className="btn btn-primary" onClick={() => openBooking(service)}>{cta}<span className="dot">→</span></button> */}
          {secondary && <Link className="btn btn-outline" to={secondary[1]}>{secondary[0]}</Link>}
        </div>
        {secondary && <div className="trust-row">{['Trusted Healthcare Professionals', 'Personalized Care', 'Convenient Home Visits'].map((t) => <span key={t}><Icon name="check" size={18} />{t}</span>)}</div>}
      </div>
      <ImageBox src={image} alt={alt} className="hero2-img" />
    </div></section>
  )
}
