import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar';

import Companies from './components/Companies';

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
      <body className='font-sans bg-zinc-950 h-fit backdrop-brightness-75' style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        opacity: '100%',}}>
        <div className='relative min-h-screen flex flex-col'>
          <NavBar></NavBar>
          {children}
          <Companies></Companies>
        </div>
      </body>
    </html>
  )
}
