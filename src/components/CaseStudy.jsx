import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import Reveal from './Reveal'

const studies = [
  ['Back Packers', 'A World Of Ways To Travel The World', 'A Smarter Way To Explore, Plan, And Experience Every Journey. Discover Destinations, Manage Trips, And Turn Travel Ideas Into Seamless Adventures—All In One Modern App.', '🏝️', 'case-1.jpg'],
  ['Medi Queue', 'Skip The Queue. Stay In Control.', 'A Seamless Healthcare Solution That Lets Patients Book Appointments, Track Queues, And Manage Their Visits Effortlessly.', '🏥', 'case-2.jpg'],
  ['Table Now', 'Your Table, Just A Tap Away.', 'A Modern Dining Experience That Makes Discovering Restaurants And Booking Tables Quick, Simple, And Enjoyable.', '🍴', 'case-3.jpg'],
]

export default function CaseStudy() {
  return (
    <section className="bg-forest px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="font-script text-3xl font-bold text-white">Case Study</Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {studies.map(([n, t, d, e, img], i) => (
            <Reveal key={n} delay={i * 150} className="group flex flex-col rounded-[2rem] bg-sage p-6 text-center text-cream transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <p className="text-lg opacity-90">{n}</p>
              <h3 className="mt-4 flex min-h-[4.5rem] items-center justify-center text-2xl font-semibold">{t}</h3>
              <p className="mt-5 flex-1 text-left text-xs leading-6">{d}</p>
              <div className="relative mt-6 grid aspect-[16/10] place-items-center overflow-hidden rounded-3xl bg-forest-dark/40">
                <img src={`/images/${img}`} alt={n} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" onError={(ev) => (ev.currentTarget.style.display = 'none')} />
              </div>
              <a href="#" className="ml-auto mt-6 inline-flex items-center gap-1 rounded-full border border-cream/60 px-4 py-1 text-[11px] transition hover:bg-cream hover:text-forest">Explore More <HiOutlineArrowLongRight className="text-base" /></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
