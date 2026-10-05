import Icon from './Icon.jsx'
export default function FeatureCard({ icon, title, text }) {
  return <div className="card feature">{icon && <div className="icon-wrap"><Icon name={icon} /></div>}<h3>{title}</h3>{text && <p>{text}</p>}</div>
}
