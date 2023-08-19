import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
    <html lang="en" className="h-fit">
      <body className='font-sans bg-zinc-950 h-fit'>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
