import './globals.css'
import { Work_Sans} from 'next/font/google'
import Head from 'next/head'

const w = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Carefinder',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
