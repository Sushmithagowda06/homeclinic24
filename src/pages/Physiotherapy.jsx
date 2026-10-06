import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import PhysioCard from '../components/PhysioCard.jsx'
import PricingCard from '../components/PricingCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { PHYSIO_CONDITIONS, PRICING } from '../data.js'
const WHYP = ['One-on-One Attention', 'Convenient Home Sessions', 'Personalized Treatment', 'Qualified Physiotherapists', 'Comfortable Recovery Environment', 'Progress-Focused Care']
export default function Physiotherapy() {
  return (<>
    <Hero title="Expert Physiotherapy at Home" sub="Personalized physiotherapy sessions delivered to your doorstep." cta="Book Physiotherapy" service="physio" image="/images/physio.jpg" alt="Physiotherapist treating a patient at home" />
    <section className="section"><div className="container"><div className="head"><h2>Conditions We Help With</h2></div><div className="grid-4">{PHYSIO_CONDITIONS.map(([t, x]) => <PhysioCard key={t} title={t} text={x} />)}</div></div></section>
    <section className="section alt"><div className="container"><div className="head"><h2>Our Physiotherapy Approach</h2></div><div className="flow">{['Assessment', 'Personalized Plan', 'Home Sessions', 'Progress Tracking'].map((s, i) => <div key={s} className="flow-item"><div className="card">{s}</div>{i < 3 && <span className="arrow">→</span>}</div>)}</div></div></section>
    <section className="section"><div className="container"><div className="head"><h2>Why Home Physiotherapy?</h2></div><div className="grid-3">{WYHP()}</div></div></section>
    {/* <section className="section alt"><div className="container"><div className="head"><h2>Simple Pricing</h2><p>Sample pricing. Edit in <code>src/data.js</code>.</p></div><div className="grid-3">{PRICING.map((p) => <PricingCard key={p.id} p={p} />)}</div></div></section> */}
    <CTASection service="physio" />
  </>)
  function WYHP() { return WHYP.map((t) => <FeatureCard key={t} icon="heart" title={t} />) }
}
