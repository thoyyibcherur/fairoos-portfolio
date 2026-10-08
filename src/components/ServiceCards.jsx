import Reveal from './Reveal'

const cards = [
  { t: 'Website Design', d: 'A Well-Designed Website Helps Businesses Build A Strong Online Presence, Showcase Their Services, Connect With Customers, And Create A Professional Brand Experience Through A Clear, Engaging, And User-Friendly Interface.', g: 'from-[#4b2c6b] to-[#a463d6]', e: '💻', img: 'service-web.png' },
  { t: 'Mobile App Design', d: "Mobile App Design Is Where Function Meets Flow. It's Not Just About Creating Pretty Screens; It's About Crafting Intuitive, Frictionless Micro-Experiences That Feel Like Second Nature In The Palm Of A User's Hand.", g: 'from-[#6bb812] to-[#2b5a06]', e: '📱', img: 'service-app.png' },
  { t: 'Branding', d: 'Branding Means Purpose + Personality. I Create Unique Visual Branding Systems Which Go Way Beyond Aesthetic Appeal And Reach Out To People On A More Emotional Level As Well As Lend A Voice To The Digital Products.', g: 'from-[#4a2c20] to-[#a8664f]', e: '🎨', gallery: ['brand-card.jpg', 'brand-sign.jpg', 'brand-box.jpg', 'brand-poster.jpg'] },
  { t: 'Marketing', d: 'Creative Strategies That Connect Brands With The Right Audience, Build Strong Visibility, And Drive Meaningful Engagement Through Impactful Digital Content And Campaigns.', g: 'from-[#f59a3c] to-[#8a5520]', e: '🚀', img: 'service-marketing.png' },
]

export default function ServiceCards() {
  return (
    <section id="services-detail" className="bg-[#d9d9d9] px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="font-script text-3xl font-bold text-forest-dark">Services</Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 150} className={`group flex min-h-[26rem] flex-col rounded-[2.5rem] bg-gradient-to-br p-8 text-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl md:min-h-[32rem] md:rounded-[3.5rem] ${c.g}`}>
              <h3 className="text-center text-2xl font-semibold text-cream">{c.t}</h3>
              <p className="mt-6 text-sm leading-7 text-white/90 md:px-6">{c.d}</p>
              {c.gallery ? (
                <div className="mt-auto grid grid-cols-4 gap-3 pt-6">
                  {c.gallery.map((g) => (
                    <img key={g} src={`/images/${g}`} alt="Laqtat Arabiya branding" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg transition duration-500 hover:z-10 hover:scale-110 hover:-rotate-2" />
                  ))}
                </div>
              ) : (
                <div className="relative mt-auto flex justify-end pt-6">
                  <span className="absolute bottom-0 right-4 text-7xl opacity-60 transition duration-500 group-hover:scale-110">{c.e}</span>
                  <img src={`/images/${c.img}`} alt={c.t} className="relative max-h-56 object-contain md:max-h-64 transition duration-500 group-hover:scale-110" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
