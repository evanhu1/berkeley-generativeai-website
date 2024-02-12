import React from 'react';
import Image from 'next/image';


function Companies() {
  const logos = [
    { src: '/y-combinator.png', alt: 'Y Combinator Logo' },
    { src: '/microsoft.png', alt: 'Microsoft Logo' },
    { src: '/heroicstory.png', alt: 'HeroicStory Logo' },
    { src: '/sameday.svg', alt: 'Sameday Logo' },
    { src: '/Quizlet-Logo.png', alt: 'Quizlet Logo' },
    { src: '/OpenAI_Logo.svg.webp', alt: 'Quizlet Logo' },
    // ... other logos
  ];
  
  return (
    <div className="flex flex-col items-center w-full mt-4" style={{ backgroundColor: '#1a1a1a'}}>
      <h2 className="bg-gradient-to-r from-[#b18dff] to-[#cf44ba] text-transparent bg-clip-text" style={{  marginTop: 12 }}>Who we work with</h2>
      <div className="flex justify-around items-center w-full px-10">
        {logos.map((logo, index) => (
          <div key={index} className="relative h-16 w-24"> {/* Updated height to h-16 */}
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
