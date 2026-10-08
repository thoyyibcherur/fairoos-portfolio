import { MdEmail, MdPhone } from 'react-icons/md'
import { FaLinkedin, FaBehance, FaHtml5, FaWordpress } from 'react-icons/fa'
import { SiFigma, SiShopify } from 'react-icons/si'
import Reveal from './Reveal'

const contacts = [
  [MdEmail, 'mohammedfairooz2002@gmail.com', 'mailto:mohammedfairooz2002@gmail.com'],
  [FaLinkedin, 'Linkedin.Com/In/Mohammed-Fairooz-', '#'],
  [FaBehance, 'Behance.Net/Mohammedfairooz', '#'],
  [MdPhone, '+91 9544402700', 'tel:+919544402700'],
]
const education = [
  ['2025-2026', 'Advanced Diploma In UI/Ux & Front-End Development', 'Skills Hub The Learning'],
  ['2024-2025', 'Advanced Diploma Digital Marketing & Graphic Design', 'Adam The Learning Hub'],
  ['2021-2024', 'Bachelor Of Commerce', 'Gems Arts & Science College'],
]
const experience = [
  ['2025-2026', 'Ulus Intern', 'Olive Digital Solutions'],
  ['2025-2025', 'Junior Creative Designer', 'Wafaa Group'],
]
const skills = [
  [SiFigma, '#a259ff'],
  [FaHtml5, '#e34f26'],
  [SiShopify, '#95bf47'],
  [FaWordpress, '#21759b'],
  [() => <b className="text-lg">Ps</b>, '#31a8ff'],
  [() => <b className="text-lg">Ai</b>, '#ff9a00'],
  [() => <b className="text-lg">Cv</b>, '#00c4cc'],
]

const Title = ({ children }) => <h3 className="font-body text-xl font-semibold text-forest-dark">{children}</h3>

function Timeline({ items }) {
  return (
    <ul className="mt-4 space-y-4">
      {items.map(([y, t, s]) => (
        <li key={t} className="grid grid-cols-[80px_1fr] gap-4 text-xs md:text-sm">
          <span className="font-medium">{y}</span>
          <span>
            <b className="block">{t}</b>
            <span className="text-ink/60">{s}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Resume() {
  return (
    <section className="bg-cream-soft px-5 pb-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div className="space-y-12">
          <Reveal>
            <Title>CONTACT</Title>
            <ul className="mt-4 space-y-3">
              {contacts.map(([I, t, h]) => (
                <li key={t}>
                  <a href={h} className="group flex items-center gap-3 break-all text-sm">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-forest/20 text-forest transition group-hover:bg-forest group-hover:text-cream"><I /></span>
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <Title>Technical Skill</Title>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map(([I, c], i) => (
                <span key={i} className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-2xl transition hover:-translate-y-2 hover:rotate-6" style={{ color: c }}><I /></span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="space-y-12">
          <Reveal delay={150}><Title>Education</Title><Timeline items={education} /></Reveal>
          <Reveal delay={250}><Title>Experience</Title><Timeline items={experience} /></Reveal>
        </div>
      </div>
    </section>
  )
}
