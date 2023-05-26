import { forwardRef } from "react"
import './contact.css'
const Contact = forwardRef((_, ref) => {
  return (
    <div className="contact" ref={ref}>Contact</div>
  )
})

export default Contact