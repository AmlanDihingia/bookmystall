import type { Metadata } from 'next'
import { Poppins, Mukta } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const mukta = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mukta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pet Puja 2026 · Apply for a food stall · Guwahati',
  description: "Pet Puja, Guwahati's Puja food festival on the Brahmaputra riverfront, 15–21 October 2026. 30 kitchens only. Stalls from ₹30,000. Apply now.",
  openGraph: {
    title: 'Pet Puja 2026 · 30 kitchens on the Brahmaputra',
    description: "Guwahati's Puja food festival, 15–21 October 2026 at Sati Radhika Shanti Udyan. Food brands can apply for a stall from ₹30,000.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${mukta.variable} scroll-smooth`}>
      <body className="bg-[#FFFBF4] text-[#2A1320] font-sans antialiased selection:bg-[#F2A900] selection:text-[#2A1320]">
        {children}
      </body>
    </html>
  )
}
