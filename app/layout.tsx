import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Generative AI at Berkeley',
  description: 'Generative AI at Berkeley Official Website',
  icons: [{ rel: "icon", url: "/favicon.ico" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-fit">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className='font-sans bg-zinc-950 h-fit'>
        <div className='relative min-h-screen'>
          <div className='pb-64'>
            <NavBar></NavBar>
            {children}
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
