import Reveal from './Reveal'

const words = ['web design', 'app design', 'prototyping', 'wire framing', 'frontend development', 'branding']

export default function Hero() {
  const row = words.flatMap((w) => [w, '>>'])
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 md:grid-cols-2 md:px-10 md:pb-24 md:pt-10">
        <Reveal variant="reveal-left">
          <span className="inline-block border border-forest-dark px-2 py-0.5 font-body text-xs">Hello There</span>
          <h1 className="mt-5 font-body text-4xl font-medium leading-tight text-forest md:text-6xl">
            I'M <span className="underline decoration-1 underline-offset-4">Mohammed Fairoos</span>,
            <br />Ui / Ux Designer
            <br />Based In India
          </h1>
          <a href="#contact" className="mt-8 inline-block rounded-full border border-forest px-8 py-2 text-forest transition hover:bg-forest hover:text-cream">Hire Me</a>
        </Reveal>

        <Reveal variant="reveal-right" className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 animate-blob bg-forest/20" />
          <div className="relative flex aspect-square animate-float items-center justify-center">
            {/* Put your illustration at public/images/hero.png */}
            <img src="/images/hero.png" alt="Fairoo" className="relative z-10 h-full w-full object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden border-y border-forest/10 bg-cream-soft py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap font-script text-lg text-forest">
          {[...row, ...row].map((w, i) => (
            <span key={i} className="mx-4">{w}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
