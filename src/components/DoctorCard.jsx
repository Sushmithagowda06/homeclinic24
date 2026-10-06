import { useBooking } from '../BookingContext.jsx'
export default function DoctorCard({ d }) {
  const { openBooking } = useBooking()
  const initials = d.name.replace('Dr. ', '').split(' ').map((w) => w[0]).join('')
  return (
    <div className="card doctor">
      <div className="avatar">{initials}</div>
      <h3>{d.name}</h3><p className="muted">{d.qual}</p><p><strong>{d.spec}</strong></p><p className="muted">{d.exp}</p>
      <p className="stars">★★★★★ <span>{d.rating}</span></p>
      <div className="btn-row center"><button className="btn btn-outline btn-sm">View Profile</button>
      {/* <button className="btn btn-primary btn-sm" onClick={() => openBooking('doctor')}>Book Consultation</button> */}
      </div>
    </div>
  )
}
