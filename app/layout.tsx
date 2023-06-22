import './globals.css'

import localFont from 'next/font/local';
import Nav from './nav';
import Providers from './providers';

const inter = localFont({ src: "../fonts/Inter.woff2", display: "swap", variable: "--font-inter" });
const montserrat = localFont({ src: "../fonts/Montserrat.woff2", display: "swap", variable: "--font-montserrat" });
const rubik = localFont({ src: "../fonts/Rubik.woff2", display: "swap", variable: "--font-rubik" });

export const metadata = {
  title: 'Lofu Studio',
  description: 'Only up from here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${rubik.variable} ${inter.variable}`}>
      <body className="bg-neutral-100 dark:bg-black">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
