import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import FAQ from '../components/FAQ.jsx'
import CTASection from '../components/CTASection.jsx'
import FloatingButtons from '../components/FloatingButtons.jsx'
import { SERVICES, WHY, STEPS, STATS, TESTIMONIALS } from '../data.js'
export default function Home() {
  return (<div className="home">
    <Hero title={<>Quality Healthcare,<br /><em>Right at Your Doorstep</em></>} sub="Professional doctor consultations and personalized physiotherapy at home, designed around your comfort and convenience." cta="Book a Home Consultation" service="doctor" secondary={['Explore Physiotherapy', '/physiotherapy']} image="/images/hero.jpg" alt="Doctor consulting a patient at home" />
    <section className="section"><div className="container"><div className="head fancy"><h2>Healthcare at Your Doorstep</h2><p>Professional care from trusted healthcare experts, delivered to the comfort of your home.</p></div><div className="grid-2">{SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}</div></div></section>
    <section className="section alt why"><div className="container"><div className="head fancy"><h2>Why Choose Home Clinic 24?</h2></div><div className="grid-4">{WHY.map(([i, t, x]) => <FeatureCard key={t} icon={i} title={t} text={x} />)}</div></div></section>
    <section className="section steps-sec"><div className="container"><div className="head fancy"><h2>Healthcare Made Simple</h2></div><div className="steps">{STEPS.map((s, i) => <div key={s} className="step"><span>{i + 1}</span><h3>{s}</h3></div>)}</div></div></section>
    <section className="section stats-band"><div className="container"><div className="head fancy"><h2>Care You Can Trust</h2></div><div className="grid-4">{STATS.map(([v, l]) => <div key={l} className="card stat"><b>{v}</b><span>{l}</span></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="head fancy"><h2>What Our Patients Say</h2></div><div className="grid-2 tg">{TESTIMONIALS.map((t) => <TestimonialCard key={t.name} t={t} />)}</div></div></section>
    <section className="section alt"><div className="container narrow"><div className="head fancy"><h2>Frequently Asked Questions</h2></div><FAQ /></div></section>
    <CTASection />
    <FloatingButtons />
  </div>)
}
