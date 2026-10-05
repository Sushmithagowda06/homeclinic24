import { useBooking } from '../BookingContext.jsx'
export default function CTASection({ service = '', title = 'Ready for care at your doorstep?', text = 'Book a home visit in a few simple steps.' }) {
  const { openBooking } = useBooking()
  return <section className="section">
    <div className="container">
      {/* <div className="cta">
        <h2>{title}</h2>
        <p>{text}</p>
      <button className="btn btn-white" onClick={() => openBooking(service)}>Book Now</button>
      </div> */}
      </div>
      </section>
}