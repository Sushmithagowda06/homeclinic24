import Icon from './Icon.jsx'
const JOURNEY = ['Consult', 'Test', 'Treat', 'Recover']
const CORE = [['heart', 'Doctor at Your Door', 'Consultations for the whole family'], ['home', 'Home Nursing', 'Trained nurses for round-the-clock needs']]
const HOT = [['shield', 'Diagnostic Support', 'ECG, sugar, BP & lab tests, without a clinic visit'], ['calendar', 'Sample Collection', 'Painless sampling at home, reports shared with you']]
const MORE = ['Injections & IV fluids', 'Dressings & wound care', 'Follow-up visits', 'Physiotherapy']
export default function HospitalCard() {
  return (
    <div className="hosp">
      <div className="hosp-photo">
        <img src="/images/hospital-diagnose.jpg" alt="Doctor examining a patient for diagnosis" />
        <span className="hosp-tag">Complete Hospital at Home</span>
      </div>
      <div className="hosp-body">
        <h3>Why travel to a hospital when the hospital can come to you?</h3>
        <p>We go beyond a home visit. Doctors, nurses, diagnostics and sample collection work together as one team, so every step of your care is handled under your own roof.</p>
        <div className="hosp-journey">{JOURNEY.map((t, i) => <span key={t}><b>{i + 1}</b>{t}</span>)}</div>
        <div className="hosp-core">{CORE.map(([i, t, x]) => <div key={t}><Icon name={i} size={22} /><div><b>{t}</b><span>{x}</span></div></div>)}</div>
        <div className="hosp-hot">{HOT.map(([i, t, x]) => <div key={t}><i><Icon name={i} size={24} /></i><div><b>{t}</b><span>{x}</span></div></div>)}</div>
        <div className="hosp-more">{MORE.map((t) => <span key={t}><Icon name="check" size={16} />{t}</span>)}</div>
        <span className="tc-tag">* Terms &amp; Conditions Apply</span>
      </div>
    </div>
  )
}
