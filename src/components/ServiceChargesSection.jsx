import ServiceChargeCard from './ServiceChargeCard.jsx'
import { useBooking } from '../BookingContext.jsx'

export default function ServiceChargesSection({ data }) {
  const { openBooking } = useBooking()
  const layout = [
    ['Doctor & Visit Charges', 'Dressing', 'Additional Services'],
    ['Injections & Procedures', 'IP Admission Cases'],
    ['Other Nursing & Care Services'],
  ]
  const byName = Object.fromEntries(data.map((c) => [c.category, c]))
  const placed = new Set(layout.flat())
  const columns = layout.map((names) => names.map((n) => byName[n]).filter(Boolean))
  data.filter((c) => !placed.has(c.category)).forEach((c, i) => columns[i % 3].push(c))

  return (
    <section className="section">
      <div className="container">
        {/* <div className="head">
          <h2>Service Charges & Pricing</h2>
          <p>Transparent, affordable healthcare services at your doorstep</p>
        </div> */}

        <div className="charges-grid">
          {columns.map((col, i) => (
            <div key={i} className="charges-col">
              {col.map((category) => (
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
