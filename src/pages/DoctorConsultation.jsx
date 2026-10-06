import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import PhysioCard from '../components/PhysioCard.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { DOCTORS, DOCTOR_CONDITIONS } from '../data.js'
const WHYD = [['home', 'Convenient Home Visits'], ['shield', 'Experienced Doctors'], ['heart', 'Personalized Attention'], ['calendar', 'Comfortable Environment']]
export default function DoctorConsultation() {
  return (<>
    <Hero title="Doctor Consultation at Home" sub="Professional medical consultation from the comfort of your home." cta="Book a Home Consultation" service="doctor" image="/images/doctor.jpg" alt="Doctor consulting a patient at home" />
    <section className="section"><div className="container"><div className="head"><h2>Why Choose a Home Doctor Consultation?</h2></div><div className="grid-4">{WHYD.map(([i, t]) => <FeatureCard key={t} icon={i} title={t} />)}</div></div></section>
    <section className="section alt"><div className="container"><div className="head"><h2>Conditions We Can Help With</h2></div><div className="grid-4">{DOCTOR_CONDITIONS.map(([t, x]) => <PhysioCard key={t} title={t} text={x} />)}</div></div></section>
    <section className="section"><div className="container"><div className="head"><h2>Meet Our Doctors</h2><p>Sample profiles for demonstration.</p></div><div className="grid-3">{DOCTORS.map((d) => <DoctorCard key={d.name} d={d} />)}</div></div></section>
    <CTASection service="doctor" />
  </>)
}
