import Hero from '../components/Hero.jsx'
import ServiceChargesSection from '../components/ServiceChargesSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { SERVICE_CHARGES } from '../data.js'

export default function Pricing() {
  return (<>
    <div className="section small-hero">
      <div className="container center">
        <h1>Service Charges & Pricing</h1>
        <p className="lead">Transparent pricing for all Home Clinic services. No hidden charges—what you see is what you pay.</p>
      </div>
    </div>
    <ServiceChargesSection data={SERVICE_CHARGES} />
    <CTASection service="doctor" title="Ready to Book a Service?" text="Contact us today or book your appointment online" />
  </>)
}
