import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar';

import Companies from './components/Companies';
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
      <body className='font-sans bg-gray-900 h-fit backdrop-brightness-75' style={{
        opacity: '100%',}}>
        <div className='relative min-h-screen flex flex-col'>
          <NavBar></NavBar>
          {children}
          
        </div>
        
      </body>


    </html>
  )
}
