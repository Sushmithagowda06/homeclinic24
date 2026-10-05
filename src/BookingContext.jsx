import { createContext, useContext, useState } from 'react'
const Ctx = createContext()
export const useBooking = () => useContext(Ctx)
export function BookingProvider({ children }) {
  const [state, setState] = useState({ open: false, service: '', plan: '' })
  const openBooking = (service = '', plan = '') => setState({ open: true, service, plan })
  const closeBooking = () => setState((s) => ({ ...s, open: false }))
  return <Ctx.Provider value={{ ...state, openBooking, closeBooking }}>{children}</Ctx.Provider>
}
