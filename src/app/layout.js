import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Umair Portfolio',
  description: 'Developed By Umair Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
