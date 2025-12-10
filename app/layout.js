import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Deposure - Localhost Tunneling That Just Works',
  description: 'Secure tunneling to localhost in seconds. No complexity, no setup time. Just fast, reliable tunnels.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
