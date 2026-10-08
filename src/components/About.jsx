import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="bg-cream-soft px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal as="h2" className="font-script text-3xl font-bold text-forest-dark">About Me</Reveal>
        <div className="mt-10 grid items-center gap-10 md:grid-cols-[340px_1fr]">
          <Reveal variant="reveal-left" className="mx-auto w-full max-w-xs">
            <div className="rounded-[2rem] bg-ink p-3 shadow-xl transition duration-500 hover:-rotate-2 hover:scale-105">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-b from-slate-600 to-slate-900">
                {/* Put your photo at public/images/profile.jpg */}
                <img src="/images/profile.jpg" alt="Fairoo" className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
              <p className="mt-3 text-center font-semibold text-white">
                UI/UX DESIGNER<br /><span className="text-[10px] font-normal tracking-widest">BASED IN INDIA</span>
              </p>
            </div>
          </Reveal>
          <Reveal variant="reveal-right">
            <h3 className="font-body text-3xl font-semibold text-forest md:text-4xl">Hello, I'm Fairoo!</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/80 md:text-base">
              Hello, I'm Mohammed Fairoos, a UI/UX designer whose aim is to make creative and complex designs easy to use and interact with. In my opinion, design is a blend of creativity, functionality and empathy where each layout, interaction and visual effect has its purpose. My design process includes analyzing users' requirements, brainstorming, sketching wireframes and prototypes and developing clean interfaces for both websites and mobile apps.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/80 md:text-base">
              In my opinion, each good product begins from a person who uses it — and good design must leave a lasting impression on that person.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <span className="font-logo text-3xl text-forest-dark">Mohammed Fairoos</span>
              <a href="#contact" className="rounded-full border border-ink px-6 py-1.5 text-sm transition hover:bg-ink hover:text-white">Hire Me</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
