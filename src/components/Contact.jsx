import { useState } from 'react'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import Reveal from './Reveal'

const field = 'mt-1 w-full rounded-md bg-forest/80 px-3 py-2 text-sm text-white outline-none ring-forest-dark transition focus:ring-2'
const dot = 'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-cream'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend on Vercel static hosting, so the form opens the visitor's mail app.
  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    const body = `${f.message}\n\n${f.name}\n${f.email}\n${f.phone}`
    window.location.href = `mailto:mohammedfairoos2002@gmail.com?subject=${encodeURIComponent('Project enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="overflow-hidden bg-cream px-5 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal variant="reveal-left">
          <h2 className="text-3xl font-semibold text-forest-dark md:text-4xl">Let'S Talk For <span className="font-normal">Your Next Projects</span></h2>
          <h3 className="mt-8 text-sm font-semibold">Contact us</h3>
          <p className="text-xs text-ink/60">Looking for a web developer for your next contract.</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3"><span className={dot}><FaWhatsapp /></span>+91 9946403700</li>
            <li className="flex items-center gap-3 break-all"><span className={dot}><MdEmail /></span>mohammedfairoos2002@gmail.com</li>
            <li className="flex items-center gap-3"><span className={dot}><MdLocationOn /></span>Malappuram, Kerala</li>
          </ul>
        </Reveal>

        <Reveal variant="reveal-right">
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold">Your Name *<input required name="name" className={field} /></label>
            <label className="text-xs font-semibold">Email *<input required type="email" name="email" className={field} /></label>
            <label className="text-xs font-semibold">Phone *<input required name="phone" className={field} /></label>
            <label className="text-xs font-semibold">Country *
              <select name="country" className={field} defaultValue="">
                <option value="" disabled>Select Country</option>
                <option>India</option>
                <option>UAE</option>
                <option>Other</option>
              </select>
            </label>
            <label className="text-xs font-semibold sm:col-span-2">Your Message *<textarea required name="message" rows={5} className={field} /></label>
            <div className="flex items-center gap-2 sm:col-span-2">
              <button className="rounded-full bg-forest px-6 py-1.5 text-xs text-cream transition hover:bg-forest-dark">{sent ? 'Sent ✓' : 'Submit'}</button>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-xs text-cream"><FaArrowRight /></span>
            </div>
          </form>
        </Reveal>
      </div>

      <p className="mt-10 select-none text-center font-logo text-[28vw] leading-none text-transparent md:text-[16rem]" style={{ WebkitTextStroke: '2px #4b6845' }}>Fairoo</p>
    </section>
  )
}
