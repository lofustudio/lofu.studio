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
      <body className="w-full p-2 bg-neutral-100 dark:bg-black">
        <Providers>
          <Nav />
          <div className="flex flex-col items-center justify-center w-full">
            {children}
          </div>
          <div className='items-center justify-center w-full text-center'>
            <p>
              <span className="text-neutral-500 dark:text-neutral-400">
                Designed and developed by @tygerxqt
              </span>
            </p>
          </div>
        </Providers>
      </body>
    </html>
  )
}
