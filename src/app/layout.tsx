import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'City Mela Festivals · Guwahati',
  description:
    'Guwahati comes together: Little Guwahati Festival (14–15 Nov), Discount Dhamaka (27 Nov – 2 Dec), and Brahmaputra Winter Carnival (23–31 Dec).',
  openGraph: {
    title: 'City Mela Festivals · Guwahati',
    description:
      'Guwahati comes together: Little Guwahati Festival, Discount Dhamaka, and Brahmaputra Winter Carnival.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Baloo+2:wght@600;800&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
