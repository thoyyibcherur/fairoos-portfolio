import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Service', '#service'],
  ['Project', '#project'],
  ['Contact Us', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a href="#home" className="font-logo text-2xl text-forest-dark">Fairoo</a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => (
            <li key={l}>
              <a href={h} className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-forest after:transition-all hover:after:w-full">{l}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-forest px-5 py-1.5 text-sm text-cream transition hover:scale-105 hover:bg-forest-dark md:block">Contact Me</a>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-3xl text-forest-dark md:hidden">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div className={`mx-5 overflow-hidden rounded-2xl bg-forest text-cream transition-all duration-300 md:hidden ${open ? 'max-h-80 py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        {links.map(([l, h]) => (
          <a key={l} href={h} onClick={() => setOpen(false)} className="block px-6 py-2.5">{l}</a>
        ))}
      </div>
    </header>
  )
}
