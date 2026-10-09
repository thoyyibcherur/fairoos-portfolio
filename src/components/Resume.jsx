import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaBehance, FaHtml5, FaWordpress, FaWhatsapp } from 'react-icons/fa'
import { SiFigma, SiShopify } from 'react-icons/si'
import Reveal from './Reveal'

const contacts = [
  [MdEmail, 'Mohammedfairoos2002@Gmail.Com', 'mailto:mohammedfairoos2002@gmail.com'],
  [FaLinkedin, 'Linkedin.Com/In/Mohammed-Fairoos-/', '#'],
  [FaBehance, 'Behance.Net/Mohammedfairoos', '#'],
  [FaWhatsapp, '+91 9946403700', 'https://wa.me/919946403700'],
]
const education = [
  ['2025-2026', 'Advanced Diploma In Uiux & Web Development', 'Skillz Hub The Learning'],
  ['2024-2025', 'Advanced Diploma Digital Marketing & Graphic Design', 'Adsin The Learning Hub'],
  ['2021-2024', 'Bachelor Of Commerce', 'Gems Arts & Science College'],
]
const experience = [
  ['2026-2026', 'Uiux Intern', 'Dfine Digital Solutions'],
  ['2025-2025', 'Junior Creative Designer', 'Wafae Group'],
]

// [icon, tile classes, icon color]
const skills = [
  [SiFigma, 'bg-[#2c2c2c]', '#f24e1e'],
  [FaHtml5, 'bg-white', '#e34f26'],
  [SiShopify, 'bg-white', '#95bf47'],
  [FaWordpress, 'bg-white', '#21759b'],
  [() => <b className="text-2xl">Ps</b>, 'bg-[#001e36]', '#31a8ff'],
  [() => <b className="text-2xl">Ai</b>, 'bg-[#330000]', '#ff9a00'],
  [() => <i className="font-logo text-base font-normal not-italic">Canva</i>, 'bg-gradient-to-br from-[#00c4cc] to-[#7d2ae8]', '#fff'],
  [() => <span className="flex gap-1"><span className="h-2 w-2 rounded-full bg-white" /><span className="h-2 w-2 rounded-full bg-white" /></span>, 'bg-gradient-to-br from-black to-[#3b2a8f]', '#fff'],
]

const Title = ({ children }) => <h3 className="font-body text-2xl font-bold text-forest">{children}</h3>

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
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-ink transition group-hover:bg-forest group-hover:text-cream"><I /></span>
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <Title>Technical Skill</Title>
            <div className="mt-4 grid max-w-[17rem] grid-cols-4 gap-3">
              {skills.map(([I, bg, c], i) => (
                <span key={i} className={`grid h-14 w-14 place-items-center rounded-xl text-3xl shadow-md transition hover:-translate-y-2 hover:rotate-6 ${bg}`} style={{ color: c }}><I /></span>
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
