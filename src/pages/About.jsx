import FeatureCard from '../components/FeatureCard.jsx'
import CTASection from '../components/CTASection.jsx'
export default function About() {
  return (<>
    <section className="hero small-hero"><div className="container narrow center"><h1>Healthcare That Comes to You</h1><p className="lead">Home Clinic 24 is focused on making quality healthcare more convenient by bringing professional medical consultation and physiotherapy directly to your doorstep.</p></div></section>
    <section className="section"><div className="container"><div className="grid-3">
      <FeatureCard icon="heart" title="Our Mission" text="To make trusted healthcare simple and accessible at home." />
      <FeatureCard icon="shield" title="Our Approach" text="Personalized, professional care built around each patient." />
      <FeatureCard icon="home" title="Our Commitment" text="Comfort, clarity and respect in every home visit." />
    </div></div></section>
    <section className="section about-story"><div className="container about-split">
      <div className="about-story-card">
        <span className="about-tag">Our Story</span>
        <h2>Care that started with a simple idea</h2>
        <p>Visiting a clinic is not always easy, especially for the elderly, for patients recovering from surgery, or for families managing busy schedules. Home Clinic 24 was started in Mysuru to remove that burden by bringing qualified doctors and physiotherapists directly to your home.</p>
        <p>From a simple fever or BP check to ongoing care for bedridden patients, our team delivers professional, compassionate care in the comfort and privacy of your own space.</p>
      </div>
      <div className="about-photo"><img src="/images/hero-care.jpg" alt="Doctor assisting a patient at home" /><div className="about-quote-chip">“Healthcare should come to you, not the other way around.”</div></div>
    </div></section>
    <section className="section alt"><div className="container"><div className="head"><h2>Our Values</h2></div><div className="grid-4">
      <FeatureCard icon="heart" title="Compassion" text="We treat every patient like family." />
      <FeatureCard icon="shield" title="Professionalism" text="Qualified, experienced and respectful care teams." />
      <FeatureCard icon="calendar" title="Punctuality" text="On-time visits at slots that suit you." />
      <FeatureCard icon="home" title="Privacy & Comfort" text="Care that respects your home and your dignity." />
    </div></div></section>
    <section className="section about-serve"><div className="container"><div className="head"><h2>Who We Serve</h2><p>Currently serving Mysuru and nearby areas.</p></div>
      <div className="serve-grid">{[['👴', 'Elderly Patients'], ['🛏️', 'Bedridden & Post-Surgery'], ['🩺', 'BP & Diabetes Care'], ['👨‍👩‍👧', 'Busy Families']].map(([e, t]) => <div key={t} className="serve-item"><i>{e}</i><h3>{t}</h3></div>)}</div>
      <p className="serve-note">And anyone who prefers quality medical care at home.</p>
    </div></section>
    <section className="section banner-sec"><div className="container"><div className="clinic-banner"><img src="/images/home-clinic.jpg" alt="Home Clinic – Quality healthcare, right at your doorstep" loading="lazy" /></div></div></section>
    <CTASection />
  </>)
}
