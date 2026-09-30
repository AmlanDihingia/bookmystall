import ApplicationForm from '@/components/ApplicationForm'
import { MapPin, Calendar, Store, Clock, Tag, Award, HelpCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF4] text-[#2A1320]">
      {/* Hero Section */}
      <header className="bg-[#B3122A] text-[#FFF6EA] relative overflow-hidden">
        <div className="bunting-pattern w-full" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-12">
          <div className="text-xs font-bold tracking-[0.22em] uppercase text-[#F2A900] font-heading mb-1">
            City Mela presents
          </div>
          <h1 className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] my-2">
            PET PUJA<span className="text-[#F2A900]">.</span>
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-[#FFE3C9]">
            Guwahati&apos;s Puja Food Festival · On the Brahmaputra
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                30 kitchens. One riverfront.<br />
                <em className="not-italic text-[#F2A900]">Seven nights.</em>
              </h2>
              <p className="text-lg text-[#FFE3C9] max-w-xl leading-relaxed">
                Applications are open to Guwahati&apos;s food brands: restaurants, street food, sweet shops, cafés, home chefs and cloud kitchens. Only 30 make it in.
              </p>
              <div className="pt-2">
                <a
                  href="#apply"
                  className="inline-block bg-[#F2A900] hover:bg-[#e09d00] text-[#2A1320] font-heading font-bold px-8 py-3.5 rounded-full text-lg shadow-lg transition transform hover:-translate-y-0.5"
                >
                  Apply for a stall
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-3">
              <div className="flex justify-between items-start pb-3 border-b border-white/20">
                <span className="text-white/80 text-base flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F2A900]" /> When
                </span>
                <b className="text-right font-bold text-white">15–21 October 2026</b>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-white/20">
                <span className="text-white/80 text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F2A900]" /> Where
                </span>
                <b className="text-right font-bold text-white">
                  Sati Radhika Shanti Udyan<br />
                  <span className="text-sm font-normal text-white/90">Brahmaputra Riverfront, Uzan Bazar</span>
                </b>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-white/80 text-base flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#F2A900]" /> Stalls
                </span>
                <b className="text-right font-bold text-white">30 only</b>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-white/20">
                <span className="text-white/80 text-base flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#F2A900]" /> From
                </span>
                <b className="text-right font-bold text-white">
                  ₹30,000 + GST<br />
                  <span className="text-sm font-normal text-white/90">for all seven nights</span>
                </b>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-base flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F2A900]" /> Timing
                </span>
                <b className="text-right font-bold text-white">Evening to late</b>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-16 py-12">
        {/* Zones Section */}
        <section className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Six zones, one riverfront
          </h2>
          <p className="text-[#6B5560] text-lg max-w-2xl mt-2 mb-8">
            Every stall sits in a named zone, so visitors know where to find you and no two stalls sell the same hero dish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white border-t-4 border-[#B3122A] border-x border-b border-[#EADDD3] rounded-xl p-5 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#2A1320] mb-1">Bhojan Ghat</h3>
              <p className="text-[#6B5560] text-sm">Riverfront seating and the stage, facing the river.</p>
            </div>
            <div className="bg-white border-t-4 border-[#EE6B1F] border-x border-b border-[#EADDD3] rounded-xl p-5 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#2A1320] mb-1">Khau Galli</h3>
              <p className="text-[#6B5560] text-sm">Momos, rolls, biryani, Indo-Chinese, chaat and grills.</p>
            </div>
            <div className="bg-white border-t-4 border-[#4E9A2F] border-x border-b border-[#EADDD3] rounded-xl p-5 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#2A1320] mb-1">Niramish Galli</h3>
              <p className="text-[#6B5560] text-sm">Pure veg and Navratri-friendly, with its own seating.</p>
            </div>
            <div className="bg-white border-t-4 border-[#7B3FA0] border-x border-b border-[#EADDD3] rounded-xl p-5 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#2A1320] mb-1">Ghar Se Galli</h3>
              <p className="text-[#6B5560] text-sm">Six home chefs and cloud kitchens with their own lane.</p>
            </div>
            <div className="bg-white border-t-4 border-[#159A92] border-x border-b border-[#EADDD3] rounded-xl p-5 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#2A1320] mb-1">Rajbari</h3>
              <p className="text-[#6B5560] text-sm">Two seated dining spaces facing the main gate.</p>
            </div>
            <div className="bg-white border-t-4 border-[#E0306A] border-x border-b border-[#EADDD3] rounded-xl p-5 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#2A1320] mb-1">Mishti Corner</h3>
              <p className="text-[#6B5560] text-sm">Sweets, desserts, ice cream and cafés.</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            What a stall costs
          </h2>
          <p className="text-[#6B5560] text-lg max-w-2xl mt-2 mb-8">
            Prices are for all seven nights and exclude GST. Prime and premium spots go first.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-[#EADDD3] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-[#B3122A]">Standard</div>
                <div className="font-heading font-bold text-3xl text-[#2A1320] my-2">
                  ₹21,000 <span className="text-xl text-[#9A8C93] line-through ml-1">₹30,000</span>
                </div>
              </div>
              <div className="text-sm text-[#6B5560]">16 stalls · fixed price</div>
            </div>

            <div className="bg-white border border-[#EADDD3] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-[#B3122A]">Prime aisle</div>
                <div className="font-heading font-bold text-3xl text-[#2A1320] my-2">
                  ₹42,000 <span className="text-xl text-[#9A8C93] line-through ml-1">₹50,000</span>
                </div>
              </div>
              <div className="text-sm text-[#6B5560]">8 stalls · fixed price</div>
            </div>

            <div className="bg-white border border-[#EADDD3] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-[#B3122A]">Premium corner</div>
                <div className="font-heading font-bold text-3xl text-[#2A1320] my-2">
                  ₹63,000 <span className="text-xl text-[#9A8C93] line-through ml-1">₹75,000</span>
                </div>
              </div>
              <div className="text-sm text-[#6B5560]">4 stalls · from</div>
            </div>

            <div className="bg-[#B3122A] text-white border border-[#B3122A] rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-[#F2A900]">Rajbari</div>
                <div className="font-heading font-bold text-3xl text-white my-2">
                  ₹70,000 <span className="text-xl text-[#FFD9C9] opacity-70 line-through ml-1">₹1,00,000</span>
                </div>
              </div>
              <div className="text-sm text-[#FFD9C9]">First Few Slots Only</div>
            </div>
          </div>

          <div className="bg-[#FFF3D6] border border-[#F2A900]/30 rounded-xl p-5 mt-6 text-sm md:text-base leading-relaxed text-[#2A1320]">
            <b className="font-bold">Included:</b> your stall, lighting and a base power connection, shared seating, security, common-area cleaning, a brand announcement on our channels, a food spotlight feature, and your listing on the Pet Puja food map. Home chefs can share a half-counter from ₹18,000.
          </div>
        </section>

        {/* Numbers & Profitability Section */}
        <section className="max-w-6xl mx-auto px-5">
          <div className="bg-[#2A1320] text-[#F7ECEF] rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl">
            <div className="md:col-span-3 text-center md:text-left">
              <span className="font-heading font-bold text-7xl lg:text-8xl text-[#F2A900] leading-none">
                90
              </span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <p className="text-xl md:text-2xl text-[#E3D2D8] font-medium leading-relaxed">
                <b className="text-white font-bold">orders a day is your break-even</b> on a ₹30,000 stall at an average order of ₹200.
              </p>
              <p className="text-base text-[#E3D2D8]/80 leading-relaxed">
                Seven nights on a riverfront the city already walks every evening, through the busiest days of Durga Puja. Everything above 90 a day is yours. We run the press, creator and pandal-route marketing that brings the crowd.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="max-w-6xl mx-auto px-5 scroll-mt-8" id="apply">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
                  Apply for a stall
                </h2>
                <p className="text-[#6B5560] text-lg mt-2">
                  Two minutes. Free, and it doesn&apos;t commit you to anything.
                </p>
              </div>

              <ol className="space-y-5">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#B3122A] text-white font-heading font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <b className="block text-[#2A1320] font-bold text-base">Apply here</b>
                    <span className="text-[#6B5560] text-sm">Tell us what you cook and which stall you want.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#B3122A] text-white font-heading font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <b className="block text-[#2A1320] font-bold text-base">We call you</b>
                    <span className="text-[#6B5560] text-sm">We talk through your menu, your slot and the numbers.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#B3122A] text-white font-heading font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <b className="block text-[#2A1320] font-bold text-base">Confirm your stall</b>
                    <span className="text-[#6B5560] text-sm">Menus are approved, then the stall is yours for seven nights.</span>
                  </div>
                </li>
              </ol>

              <div className="bg-[#FCEBEE] border border-[#B3122A]/15 rounded-xl p-4 text-sm text-[#7A0C1E] font-medium leading-relaxed">
                Only 30 stalls, and most categories have one to three slots. Once a category fills, it closes.
              </div>
            </div>

            <div className="lg:col-span-7">
              <ApplicationForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-6 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-[#B3122A]" />
            Questions vendors ask
          </h2>

          <div className="space-y-4">
            <details className="group bg-white border border-[#EADDD3] rounded-xl p-5 cursor-pointer transition">
              <summary className="font-semibold text-lg text-[#2A1320] list-none flex justify-between items-center">
                <span>What exactly do I get for the stall fee?</span>
                <span className="text-[#B3122A] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-[#6B5560] text-base leading-relaxed">
                A built stall in the Pet Puja design, lighting and a base power connection, shared seating, event security, common-area cleaning, and marketing: a brand announcement, a food spotlight feature and a listing on the food map. Extra power load, your staff, equipment and raw material are yours.
              </p>
            </details>

            <details className="group bg-white border border-[#EADDD3] rounded-xl p-5 cursor-pointer transition">
              <summary className="font-semibold text-lg text-[#2A1320] list-none flex justify-between items-center">
                <span>Can I share a stall with another kitchen?</span>
                <span className="text-[#B3122A] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-[#6B5560] text-base leading-relaxed">
                Home chefs and cloud kitchens can share a half-counter in Ghar Se Galli from ₹18,000 each. Other categories take a full stall.
              </p>
            </details>

            <details className="group bg-white border border-[#EADDD3] rounded-xl p-5 cursor-pointer transition">
              <summary className="font-semibold text-lg text-[#2A1320] list-none flex justify-between items-center">
                <span>Do I need an FSSAI licence?</span>
                <span className="text-[#B3122A] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-[#6B5560] text-base leading-relaxed">
                Yes, every stall needs one before the event. If you don&apos;t have one, basic registration is inexpensive and quick for small kitchens, and we can point you to the process.
              </p>
            </details>

            <details className="group bg-white border border-[#EADDD3] rounded-xl p-5 cursor-pointer transition">
              <summary className="font-semibold text-lg text-[#2A1320] list-none flex justify-between items-center">
                <span>What are the timings?</span>
                <span className="text-[#B3122A] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-[#6B5560] text-base leading-relaxed">
                Evening to late, across all seven nights, as permitted at the venue. Saptami to Navami evenings are expected to be the busiest.
              </p>
            </details>

            <details className="group bg-white border border-[#EADDD3] rounded-xl p-5 cursor-pointer transition">
              <summary className="font-semibold text-lg text-[#2A1320] list-none flex justify-between items-center">
                <span>How is my slot decided?</span>
                <span className="text-[#B3122A] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-[#6B5560] text-base leading-relaxed">
                Each category has a fixed number of slots. We check menus so no two stalls sell the same hero dish, then confirm on a first-paid basis for standard and prime stalls. Premium corners and pavilions go by bid and menu together.
              </p>
            </details>

            <details className="group bg-white border border-[#EADDD3] rounded-xl p-5 cursor-pointer transition">
              <summary className="font-semibold text-lg text-[#2A1320] list-none flex justify-between items-center">
                <span>When do I have to pay?</span>
                <span className="text-[#B3122A] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-[#6B5560] text-base leading-relaxed">
                Nothing at this stage. Applying is free. Payment terms are explained on the call once your slot is confirmed.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2A1320] text-[#F5E9EC] py-8 border-t border-white/10 mt-12 text-sm">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            Pet Puja 2026 · A City Mela festival · Sati Radhika Shanti Udyan, Uzan Bazar, Guwahati
          </div>
          <div className="flex items-center gap-3">
            <span>Questions?</span>
            <a
              href="https://wa.me/919957995530"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2A900] hover:underline font-bold"
            >
              WhatsApp 99579 95530
            </a>
            <span>·</span>
            <a
              href="https://www.citymela.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2A900] hover:underline font-bold"
            >
              citymela.shop
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
