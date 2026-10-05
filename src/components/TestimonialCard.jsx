export default function TestimonialCard({ t }) {
  return <div className="card testimonial"><p>“{t.text}”</p><div><strong>{t.name}</strong><span className="muted"> · {t.loc}</span></div></div>
}
