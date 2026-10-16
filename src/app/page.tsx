'use client'

import React, { useState, useEffect } from 'react'
import FestivalModal from '@/components/FestivalModal'

type FestivalId = 'lgf' | 'dd' | 'bwc'

interface FestivalTab {
  id: FestivalId
  label: string
  dates: string
}

const TABS: FestivalTab[] = [
  { id: 'lgf', label: 'Little Guwahati Festival', dates: '14–15 Nov' },
  { id: 'dd', label: 'Discount Dhamaka', dates: '27 Nov – 2 Dec' },
  { id: 'bwc', label: 'Brahmaputra Winter Carnival', dates: '23–31 Dec' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<FestivalId>('dd')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'vendor' | 'alert'>('vendor')

  // Check URL hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'lgf' || hash === 'dd' || hash === 'bwc') {
        setActiveTab(hash)
      }
    }
  }, [])

  const handleTabClick = (id: FestivalId) => {
    setActiveTab(id)
    if (typeof window !== 'undefined' && window.history.pushState) {
      window.history.pushState(null, '', `#${id}`)
    }
  }

  const openVendorModal = () => {
    setModalMode('vendor')
    setModalOpen(true)
  }

  const openAlertModal = () => {
    setModalMode('alert')
    setModalOpen(true)
  }

  return (
    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: '#111', minHeight: '100vh', background: '#141210' }}>
      {/* Sticky Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, background: '#141210', borderBottom: '1px solid #2a2622' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '12px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <a href="#top" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', color: '#fff' }}>
            <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '0.04em' }}>CITY MELA</span>
            <span style={{ fontSize: 12, color: '#a39b8f' }}>The city comes together</span>
          </a>

          <nav aria-label="Festivals" style={{ display: 'flex', flexWrap: 'wrap', gap: 4, background: '#1d1a17', padding: 4, borderRadius: 999 }}>
            {TABS.map(tab => {
              const isOn = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  type="button"
                  id={`tab-${tab.id}`}
                  className={`tab ${isOn ? `on-${tab.id}` : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                  aria-pressed={isOn}
                >
                  <span>{tab.label}</span>
                  <small>{tab.dates}</small>
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      {/* ============ LITTLE GUWAHATI FESTIVAL ============ */}
      {activeTab === 'lgf' && (
        <main id="top" className="animate-fade-in" style={{ background: '#FFF4DE', color: '#3a0d14' }}>
          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) 24px', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
            <div style={{ flex: '999 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A1F2B' }}>
                City Mela presents · A Children&apos;s Day celebration
              </span>
              <h1 style={{ margin: 0, fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, lineHeight: 0.95, fontSize: 'clamp(52px, 9vw, 120px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ background: '#E8553D', color: '#fff', padding: '4px 22px 0', borderRadius: 22, transform: 'rotate(-2deg)' }}>Little</span>
                <span style={{ background: '#F2B705', color: '#3a0d14', padding: '4px 22px 0', borderRadius: 22, transform: 'rotate(1.5deg)' }}>Guwahati</span>
                <span style={{ background: '#2F6B45', color: '#fff', padding: '4px 22px 0', borderRadius: 22, transform: 'rotate(-1deg)' }}>Festival</span>
              </h1>
              <p style={{ margin: '8px 0 0', fontFamily: "'Baloo 2', sans-serif", fontWeight: 600, fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.2 }}>
                Big plans for little people
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
                <button
                  type="button"
                  id="lgf-register-btn"
                  onClick={openAlertModal}
                  style={{ textDecoration: 'none', background: '#7A1F2B', color: '#fff', fontWeight: 600, padding: '14px 26px', borderRadius: 999, minHeight: 44, boxSizing: 'border-box', border: 'none', cursor: 'pointer', transition: 'transform 0.15s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Register your little one
                </button>
                <button
                  type="button"
                  id="lgf-book-stall-btn"
                  onClick={openVendorModal}
                  style={{ textDecoration: 'none', border: '2px solid #7A1F2B', background: 'transparent', color: '#7A1F2B', fontWeight: 600, padding: '12px 24px', borderRadius: 999, minHeight: 44, boxSizing: 'border-box', cursor: 'pointer', transition: 'transform 0.15s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Book a stall
                </button>
              </div>
            </div>

            <div style={{ flex: '1 1 320px', minWidth: 0, background: '#2F6B45', color: '#fff', borderRadius: 32, padding: 32, display: 'flex', flexDirection: 'column', gap: 20, boxShadow: '10px 10px 0 #3a0d14' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cfe6d6' }}>When</span>
                <span style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 40, lineHeight: 1 }}>14–15 Nov 2026</span>
                <span style={{ color: '#e4f0e8' }}>Children&apos;s Day weekend · Sat &amp; Sun</span>
              </div>
              <div style={{ height: 2, background: '#4c8a63' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cfe6d6' }}>Where</span>
                <span style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 26, lineHeight: 1.1 }}>Sati Radhika Shanti Udyan</span>
                <span style={{ color: '#e4f0e8' }}>Brahmaputra Riverfront, Uzan Bazar, Guwahati</span>
              </div>
              <div style={{ height: 2, background: '#4c8a63' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cfe6d6' }}>Entry</span>
                <span style={{ fontWeight: 600, fontSize: 18 }}>Free entry &amp; open to all families</span>
              </div>
            </div>
          </section>

          <section style={{ background: '#3a0d14', color: '#FFF4DE' }}>
            <div style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) 24px', display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h2 style={{ margin: 0, fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 'clamp(34px, 4.5vw, 56px)', lineHeight: 1 }}>
                What&apos;s in the toybox
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                <div style={{ background: '#FFF4DE', color: '#3a0d14', borderRadius: 28, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 56, height: 56, borderRadius: 18, background: '#E8553D', color: '#fff', fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>01</span>
                  <h3 style={{ margin: 0, fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.05 }}>Kids&apos; Open Mic</h3>
                  <p style={{ margin: 0, lineHeight: 1.5 }}>Sing, dance, tell a joke, recite a poem — the stage is theirs. One open mic winner takes the crown.</p>
                </div>
                <div style={{ background: '#FFF4DE', color: '#3a0d14', borderRadius: 28, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 56, height: 56, borderRadius: 18, background: '#F2B705', color: '#3a0d14', fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>02</span>
                  <h3 style={{ margin: 0, fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.05 }}>Best Dressed Awards</h3>
                  <p style={{ margin: 0, lineHeight: 1.5 }}>Dress up and show up. Awards for the best-dressed little ones of the weekend.</p>
                </div>
                <div style={{ background: '#FFF4DE', color: '#3a0d14', borderRadius: 28, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 56, height: 56, borderRadius: 18, background: '#2F6B45', color: '#fff', fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>03</span>
                  <h3 style={{ margin: 0, fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.05 }}>Prizes for Kids &amp; Parents</h3>
                  <p style={{ margin: 0, lineHeight: 1.5 }}>Small prizes all weekend — because the grown-ups deserve a win too.</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) 24px', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h2 style={{ margin: 0, fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1 }}>
                Brands &amp; vendors: meet Guwahati&apos;s families
              </h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, maxWidth: 620 }}>
                Stalls and spaces are open for kids&apos; brands, food, play, learning and family experiences.
              </p>
            </div>
            <button
              type="button"
              id="lgf-enquire-stalls-btn"
              onClick={openVendorModal}
              style={{ textDecoration: 'none', background: '#E8553D', color: '#fff', fontWeight: 600, fontSize: 18, padding: '16px 30px', borderRadius: 999, minHeight: 44, boxSizing: 'border-box', border: 'none', cursor: 'pointer', transition: 'transform 0.15s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Enquire about stalls
            </button>
          </section>
        </main>
      )}

      {/* ============ DISCOUNT DHAMAKA ============ */}
      {activeTab === 'dd' && (
        <main id="top" className="animate-fade-in" style={{ background: '#FFD400', color: '#111' }}>
          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 8vw, 100px) 24px clamp(40px, 6vw, 72px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
              <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase' }}>City Mela presents</span>
              <span style={{ background: '#111', color: '#FFD400', fontWeight: 800, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 12px' }}>
                The Big Shopping Event
              </span>
            </div>
            <h1 style={{ margin: 0, fontFamily: "'Anton', sans-serif", fontWeight: 400, textTransform: 'uppercase', lineHeight: 0.86, fontSize: 'clamp(72px, 15vw, 210px)', letterSpacing: '-0.01em' }}>
              Discount<br />Dhamaka
            </h1>
            <p style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(20px, 2.6vw, 32px)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Guwahati&apos;s Bumper Shopping Festival
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'stretch', marginTop: 16 }}>
              <div style={{ background: '#D10000', color: '#fff', padding: '20px 28px', transform: 'rotate(-2deg)', boxShadow: '8px 8px 0 #111', display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 800, fontSize: 'clamp(18px, 2vw, 26px)', textTransform: 'uppercase' }}>Up to</span>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(64px, 9vw, 120px)', lineHeight: 0.9 }}>50% OFF*</span>
              </div>
              <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, borderLeft: '4px solid #111', paddingLeft: 20 }}>
                <span style={{ fontSize: 13, fontVariantCaps: 'all-small-caps', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Six days only</span>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1 }}>27 Nov – 2 Dec 2026</span>
                <span style={{ fontWeight: 600 }}>Maniram Dewan Trade Centre / Riverfront, Guwahati</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20 }}>
              <button
                type="button"
                id="dd-deal-alerts-btn"
                onClick={openAlertModal}
                style={{ textDecoration: 'none', background: '#111', color: '#FFD400', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', padding: '16px 28px', minHeight: 44, boxSizing: 'border-box', border: 'none', cursor: 'pointer', transition: 'transform 0.15s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Get deal alerts
              </button>
              <button
                type="button"
                id="dd-retailers-space-btn"
                onClick={openVendorModal}
                style={{ textDecoration: 'none', border: '3px solid #111', background: 'transparent', color: '#111', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', padding: '13px 25px', minHeight: 44, boxSizing: 'border-box', cursor: 'pointer', transition: 'transform 0.15s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Retailers: book a space
              </button>
            </div>
          </section>

          <section style={{ background: '#111', color: '#FFD400', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1240, margin: '0 auto', padding: '22px 24px', display: 'flex', flexWrap: 'wrap', gap: '14px 28px', justifyContent: 'center', fontFamily: "'Anton', sans-serif", fontSize: 'clamp(22px, 2.6vw, 32px)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              <span>50+ Retail Brands</span>
              <span style={{ color: '#D10000' }} aria-hidden="true">●</span>
              <span>Limited-Time Deals</span>
              <span style={{ color: '#D10000' }} aria-hidden="true">●</span>
              <span>One Shopping Destination</span>
            </div>
          </section>

          <section style={{ background: '#fff8cc' }}>
            <div style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) 24px', display: 'flex', flexDirection: 'column', gap: 28 }}>
              <h2 style={{ margin: 0, fontFamily: "'Anton', sans-serif", fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1 }}>
                Shop it all under one roof
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                <div style={{ background: '#111', color: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: 'uppercase' }}>Fashion</span>
                  <span style={{ color: '#FFD400', fontSize: 14 }}>Festive &amp; everyday wear</span>
                </div>
                <div style={{ background: '#111', color: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: 'uppercase' }}>Footwear</span>
                  <span style={{ color: '#FFD400', fontSize: 14 }}>Sneakers to sandals</span>
                </div>
                <div style={{ background: '#111', color: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: 'uppercase' }}>Accessories</span>
                  <span style={{ color: '#FFD400', fontSize: 14 }}>Bags, watches &amp; more</span>
                </div>
                <div style={{ background: '#111', color: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: 'uppercase' }}>Kidswear</span>
                  <span style={{ color: '#FFD400', fontSize: 14 }}>For the little shoppers</span>
                </div>
                <div style={{ background: '#111', color: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: 'uppercase' }}>Home</span>
                  <span style={{ color: '#FFD400', fontSize: 14 }}>Decor, linen &amp; kitchen</span>
                </div>
                <div style={{ background: '#111', color: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: 'uppercase' }}>Lifestyle</span>
                  <span style={{ color: '#FFD400', fontSize: 14 }}>Clearance &amp; festival deals</span>
                </div>
              </div>
            </div>
          </section>

          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) 24px', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h2 style={{ margin: 0, fontFamily: "'Anton', sans-serif", fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(34px, 4.5vw, 56px)', lineHeight: 1 }}>
                Retailers — be one of the 50+
              </h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, maxWidth: 620 }}>
                Brands from Guwahati, Shillong and across the Northeast. Clear stock, launch festive offers and meet thousands of shoppers in six days.
              </p>
            </div>
            <button
              type="button"
              id="dd-book-space-btn"
              onClick={openVendorModal}
              style={{ textDecoration: 'none', background: '#D10000', color: '#fff', fontWeight: 800, textTransform: 'uppercase', fontSize: 18, padding: '18px 32px', minHeight: 44, boxSizing: 'border-box', boxShadow: '6px 6px 0 #111', border: 'none', cursor: 'pointer', transition: 'transform 0.15s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Book your space
            </button>
          </section>

          <p style={{ margin: 0, maxWidth: 1240, marginInline: 'auto', padding: '0 24px 40px', fontSize: 13, lineHeight: 1.5, color: '#3a3500' }}>
            *Only where participating retailers can substantiate the advertised discount.
          </p>
        </main>
      )}

      {/* ============ BRAHMAPUTRA WINTER CARNIVAL ============ */}
      {activeTab === 'bwc' && (
        <main id="top" className="animate-fade-in" style={{ background: '#2A1612', color: '#F7EBDD' }}>
          <section className="bwc-snow" style={{ position: 'relative' }}>
            {/* Hanging festoon / bulb string light decorative SVG */}
            <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block', width: '100%', height: 70 }}>
              <path d="M0 10 Q180 70 360 14 T720 14 T1080 14 T1440 10" fill="none" stroke="#5a3a2c" strokeWidth="2"></path>
              <circle cx="60" cy="30" r="7" fill="#F5C46B" className="glow-bulb" />
              <circle cx="150" cy="44" r="7" fill="#E07A3C" />
              <circle cx="250" cy="38" r="7" fill="#F7EBDD" />
              <circle cx="330" cy="20" r="7" fill="#F5C46B" className="glow-bulb" />
              <circle cx="430" cy="32" r="7" fill="#E07A3C" />
              <circle cx="530" cy="44" r="7" fill="#F5C46B" className="glow-bulb" />
              <circle cx="620" cy="34" r="7" fill="#F7EBDD" />
              <circle cx="700" cy="17" r="7" fill="#E07A3C" />
              <circle cx="790" cy="32" r="7" fill="#F5C46B" className="glow-bulb" />
              <circle cx="890" cy="44" r="7" fill="#F7EBDD" />
              <circle cx="980" cy="34" r="7" fill="#E07A3C" />
              <circle cx="1060" cy="17" r="7" fill="#F5C46B" className="glow-bulb" />
              <circle cx="1150" cy="32" r="7" fill="#E07A3C" />
              <circle cx="1250" cy="43" r="7" fill="#F5C46B" className="glow-bulb" />
              <circle cx="1340" cy="32" r="7" fill="#F7EBDD" />
              <circle cx="1420" cy="14" r="7" fill="#E07A3C" />
            </svg>

            <div style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(40px, 7vw, 96px) 24px clamp(56px, 9vw, 120px)', display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5C46B' }}>
                City Mela presents
              </span>
              <h1 style={{ margin: 0, fontFamily: "'DM Serif Display', serif", fontWeight: 400, lineHeight: 0.95, fontSize: 'clamp(56px, 10vw, 140px)', color: '#F7EBDD' }}>
                Brahmaputra<br />
                <em style={{ color: '#F5C46B', fontStyle: 'italic' }}>Winter Carnival</em>
              </h1>
              <p style={{ margin: 0, fontSize: 'clamp(18px, 2vw, 24px)', maxWidth: 660, lineHeight: 1.45, color: '#e6d3c0' }}>
                Nine cosy days to close the year — warm food, live music, bonfire glow and the whole city wrapped up in shawls by the river.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 8 }}>
                <div style={{ background: '#F7EBDD', color: '#2A1612', padding: '16px 28px', borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 2, boxShadow: '0 0 0 6px #9E2A2B' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9E2A2B' }}>Dates</span>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28 }}>23–31 Dec 2026</span>
                </div>
                <div style={{ background: '#F7EBDD', color: '#2A1612', padding: '16px 28px', borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 2, boxShadow: '0 0 0 6px #2F5240' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2F5240' }}>Venue</span>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28 }}>Riverfront, Guwahati</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 16 }}>
                <button
                  type="button"
                  id="bwc-get-notified-btn"
                  onClick={openAlertModal}
                  style={{ textDecoration: 'none', background: '#E07A3C', color: '#2A1612', fontWeight: 600, padding: '14px 28px', borderRadius: 999, minHeight: 44, boxSizing: 'border-box', border: 'none', cursor: 'pointer', transition: 'transform 0.15s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Get notified
                </button>
                <button
                  type="button"
                  id="bwc-stalls-btn"
                  onClick={openVendorModal}
                  style={{ textDecoration: 'none', border: '2px solid #F5C46B', background: 'transparent', color: '#F5C46B', fontWeight: 600, padding: '12px 26px', borderRadius: 999, minHeight: 44, boxSizing: 'border-box', cursor: 'pointer', transition: 'transform 0.15s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Stalls &amp; sponsorship
                </button>
              </div>
            </div>
          </section>

          <div className="bwc-knit" aria-hidden="true"></div>

          <section style={{ background: '#F7EBDD', color: '#2A1612' }}>
            <div style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) 24px', display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h2 style={{ margin: 0, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 58px)', lineHeight: 1, color: '#9E2A2B' }}>
                Grab a shawl. Come out.
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                <div style={{ background: '#fffaf3', border: '2px solid #ead6bf', borderRadius: 28, padding: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 56, height: 56, borderRadius: '50%', background: '#9E2A2B', color: '#F7EBDD', fontFamily: "'DM Serif Display', serif", fontSize: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    I
                  </span>
                  <h3 style={{ margin: 0, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 30 }}>
                    Winter food &amp; drink
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.55, color: '#5a3a2c' }}>
                    Smoky grills, traditional winter pitha, gourmet hot chocolate, artisanal tea &amp; coffee, and 35+ curated food stalls facing the river.
                  </p>
                </div>
                <div style={{ background: '#fffaf3', border: '2px solid #ead6bf', borderRadius: 28, padding: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 56, height: 56, borderRadius: '50%', background: '#E07A3C', color: '#2A1612', fontFamily: "'DM Serif Display', serif", fontSize: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    II
                  </span>
                  <h3 style={{ margin: 0, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 30 }}>
                    Live music nights
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.55, color: '#5a3a2c' }}>
                    Acoustic riverfront stages, indie singer-songwriters, folk fusion ensembles, and cozy bonfire music sessions under the winter stars.
                  </p>
                </div>
                <div style={{ background: '#fffaf3', border: '2px solid #ead6bf', borderRadius: 28, padding: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ width: 56, height: 56, borderRadius: '50%', background: '#2F5240', color: '#F7EBDD', fontFamily: "'DM Serif Display', serif", fontSize: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    III
                  </span>
                  <h3 style={{ margin: 0, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 30 }}>
                    New Year&apos;s Eve finale
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.55, color: '#5a3a2c' }}>
                    The carnival closes on 31 December with fireworks over the Brahmaputra, midnight countdown, and an unforgettable celebration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bwc-knit" aria-hidden="true"></div>

          <section style={{ background: '#2F5240', color: '#F7EBDD' }}>
            <div style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) 24px', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h2 style={{ margin: 0, fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05 }}>
                  Be part of Guwahati&apos;s year-end
                </h2>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, maxWidth: 620, color: '#dfe9e2' }}>
                  Food stalls, retail spaces and sponsorship slots open for brands that want the last nine days of the year.
                </p>
              </div>
              <button
                type="button"
                id="bwc-enquire-now-btn"
                onClick={openVendorModal}
                style={{ textDecoration: 'none', background: '#F5C46B', color: '#2A1612', fontWeight: 600, fontSize: 18, padding: '16px 30px', borderRadius: 999, minHeight: 44, boxSizing: 'border-box', border: 'none', cursor: 'pointer', transition: 'transform 0.15s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Enquire now
              </button>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer style={{ background: '#141210', color: '#a39b8f', borderTop: '1px solid #2a2622' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 24px', display: 'flex', flexWrap: 'wrap', gap: '12px 32px', justifyContent: 'space-between', fontSize: 14 }}>
          <span>
            <strong style={{ color: '#fff', letterSpacing: '0.04em' }}>CITY MELA</strong> · The city comes together
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="https://wa.me/919957995530" target="_blank" rel="noopener noreferrer" style={{ color: '#a39b8f' }}>
              WhatsApp: +91 99579 95530
            </a>
            <a href="https://www.citymela.shop" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD400' }}>
              www.citymela.shop
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Modal */}
      <FestivalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        festivalId={activeTab}
      />
    </div>
  )
}
