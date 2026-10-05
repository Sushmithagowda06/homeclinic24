import ServiceChargeCard from './ServiceChargeCard.jsx'
import { useBooking } from '../BookingContext.jsx'

export default function ServiceChargesSection({ data }) {
  const { openBooking } = useBooking()

  return (
    <section className="section">
      <div className="container">
        {/* <div className="head">
          <h2>Service Charges & Pricing</h2>
          <p>Transparent, affordable healthcare services at your doorstep</p>
        </div> */}

        <div className="charges-grid">
          {data.map((category) => (
            <div key={category.category} className="charge-category card">
              <h3 className="category-title">{category.category}</h3>
              <div className="services-list">
                {category.services.map((service) => (
                  <ServiceChargeCard key={service.name} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="cta" style={{ marginTop: '56px' }}>
          <h2 style={{ color: '#fff', marginBottom: '16px' }}>Ready to Book a Service?</h2>
          <p style={{ color: '#fff', marginBottom: '28px', opacity: 0.9 }}>
            Contact us or book your appointment online
          </p>
          <div className="btn-row center">
            <button className="btn btn-white" onClick={() => openBooking('doctor')}>
              Book Service
            </button>
            <a href="/contact" className="btn btn-white">
              Contact Us
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}
