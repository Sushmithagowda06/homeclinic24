import { useState } from 'react'
// Shows /public/images/<src>; falls back to a soft placeholder if the photo isn't added yet.
export default function ImageBox({ src, alt, className = '' }) {
  const [ok, setOk] = useState(true)
  return <div className={'imgbox ' + className}>{ok && <img src={src} alt={alt} onError={() => setOk(false)} />}{!ok && <span>Add photo: {src}</span>}</div>
}
