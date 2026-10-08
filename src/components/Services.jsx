import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'

const items = [
  ['01', 'App & Web Design', ['Prototyping', 'Wireframing', 'Responsive', 'User Research']],
  ['02', 'Frontend Development', ['Css', 'Javascript', 'Html', 'Bootstrap']],
  ['03', 'Brand Design', ['Brand strategy', 'Visual Identity', 'Brand Assets', 'Brand Guidelines']],
  ['04', 'Marketing Services', ['SMM', 'SEO', 'Content Marketing', 'Video Shooting']],
]

export default function Services() {
  return (
    <section id="service" className="rounded-t-[3rem] bg-forest px-5 py-16 text-cream md:rounded-t-[5rem] md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="text-center font-script text-3xl font-bold">Service</Reveal>
        <Reveal as="p" className="mx-auto mt-4 max-w-xl text-center text-xs text-cream/70">
          I'm Mohammed Fairoos, a UI/UX designer with a passion for intuitive solutions and seamless interactions.
        </Reveal>
        <div className="mt-12 grid gap-10 rounded-[2rem] border border-cream/10 bg-cream/5 p-6 md:grid-cols-2 md:p-12">
          {items.map(([n, t, tags], i) => (
            <Reveal key={n} delay={i * 120} className="group relative pt-10">
              <span className="absolute left-0 top-0 text-7xl font-bold text-cream/10 transition group-hover:text-cream/25 md:text-8xl">{n}</span>
              <h3 className="relative text-3xl font-medium text-cream/70 transition group-hover:text-cream md:text-4xl">{t}</h3>
              <ul className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-5 text-xs text-cream/70">
                {tags.map((x) => (
                  <li key={x} className="flex items-center gap-2 transition group-hover:text-cream"><FiArrowUpRight className="shrink-0" />{x}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#services-detail" className="inline-flex items-center gap-2 rounded-full border border-cream/60 px-6 py-2 text-sm transition-all hover:gap-3 hover:bg-cream hover:text-forest">
            View More <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
