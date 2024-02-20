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
  ];
  
  return (
    <div className="py-16 flex flex-col items-center w-full mt-4 bg-[#1a1a1a]">
      {/* <h2 className="md:text-4xl mb-8 bg-gradient-to-r from-[#b18dff] to-[#cf44ba] text-transparent bg-clip-text" style={{  marginTop: 12 }}>Who We Work With</h2> */}
      <div className="flex flex-col space-y-8 md:flex-row justify-around items-center w-full px-10">
        {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={1000}
              height={20}
              style={{ filter: 'brightness(0) invert(1)' }}
              className='relative h-12 w-auto'
            />
        ))}
      </div>
    </div>
  );
}

export default Companies;
