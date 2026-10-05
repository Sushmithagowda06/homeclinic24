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
    <CTASection />
  </>)
}
