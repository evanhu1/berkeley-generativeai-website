import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar';

export const metadata: Metadata = {
  title: 'Generative AI at Berkeley',
  description: 'Generative AI at Berkeley Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-sans bg-zinc-950'>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
