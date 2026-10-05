import { useEffect } from 'react'
import { useBooking } from '../BookingContext.jsx'
import BookingForm from './BookingForm.jsx'
export default function BookingModal() {
  const { open, closeBooking, service, plan } = useBooking()
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const k = (e) => e.key === 'Escape' && closeBooking(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [open])
  if (!open) return null
  return (
    <div className="modal-bg" onClick={closeBooking}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-x" onClick={closeBooking} aria-label="Close">×</button>
        <BookingForm initialService={service} initialPlan={plan} onDone={closeBooking} />
      </div>
    </div>
  )
}
