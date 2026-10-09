import { FaArrowRight } from 'react-icons/fa'
import Reveal from './Reveal'

const projects = [
  { name: 'Back Packers', title: 'Your Prefect Trip Partners Is Here...!', text: 'A modern travel app designed to make every journey simple, seamless, and exciting. It brings essential travel features together in an intuitive experience, helping users discover destinations, plan trips, manage bookings, and navigate with ease.', bg: 'bg-navy', card: 'bg-[#1f5a96]', btn: 'bg-[#0f3d6e] text-white', emoji: '🧳' },
  { name: 'Medi Queue', title: 'A Smarter Way To See Your Doctor...!', text: 'Designed around patient convenience, Medi Queue makes healthcare visits more organized and predictable. From appointment booking to real-time queue updates, every interaction is designed to save time and reduce uncertainty.', bg: 'bg-teal', card: 'bg-[#1f5d58]', btn: 'bg-[#2fb5a6] text-white', emoji: '🩺' },
  { name: 'Table Now', title: 'Discover Your Next Dining Experience...!', text: 'Table Now is a modern restaurant discovery and reservation app created to simplify the journey from finding a restaurant to securing the perfect table. With intuitive discovery, menus, availability tracking, and quick reservations, it makes dining out faster, personal, and enjoyable.', bg: 'bg-rust', card: 'bg-[#cf6a42]', btn: 'bg-white text-rust', emoji: '🍽️' },
]

export default function Projects() {
  return (
    <section id="project">
      <div className="bg-navy px-5 pt-14 md:px-10">
        <h2 className="mx-auto max-w-6xl font-script text-3xl font-bold text-white">Project</h2>
      </div>
      {projects.map((p, i) => (
        <div key={p.name} className={`${p.bg} px-5 py-10 md:px-10 md:py-16`}>
          <Reveal className={`mx-auto grid max-w-5xl items-center gap-8 rounded-[2rem] p-6 shadow-2xl md:grid-cols-2 md:p-12 ${p.card}`}>
            <div className={`${i % 2 ? 'md:order-2' : ''} text-white`}>
              <p className="font-semibold">{p.name}</p>
              <h3 className="mt-6 text-2xl font-bold leading-snug text-cream md:text-3xl">{p.title}</h3>
              <p className="mt-5 text-xs leading-relaxed text-white/85 md:text-sm">{p.text}</p>
              <div className="mt-8 flex items-center justify-between rounded-full bg-black/20 p-2 pl-4">
                <span className="text-sm">{p.name}</span>
                <a href="#" className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs transition-all hover:gap-3 ${p.btn}`}>View More <FaArrowRight /></a>
              </div>
            </div>
            {/* Put mockups at public/images/project-1.png, project-2.png, project-3.png */}
            <div className="relative flex aspect-square items-center justify-center">
              <img src={`/images/project-${i + 1}.png`} alt={p.name} className="relative max-h-full animate-float object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
          </Reveal>
        </div>
      ))}
    </section>
  )
}
