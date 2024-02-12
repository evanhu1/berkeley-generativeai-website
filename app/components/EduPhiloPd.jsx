import React from 'react';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';

const font = Open_Sans({ subsets: ['latin'], weight: '300' });

const EduPhiloPd = () => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '50px 0' }}>
      <div style={{ maxWidth: '50vw', paddingLeft: '15px', paddingRight: '15px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'left' }}>Give your technology language</h1>
        <p style={{ fontSize: '24px', marginBottom: '30px', textAlign: 'left' }}>
          Cohere’s world-class large language models (LLMs) help enterprises build powerful, secure applications that search,
          understand meaning and converse in text.
        </p>
        <button style={{
          backgroundColor: 'transparent',
          border: '2px solid #fff',
          borderRadius: '4px',
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'inline-block',
          textAlign: 'left',
          color: '#fff'
        }}>
          TRY THE PLAYGROUND
        </button>
      </div>
    </div>
  );
};

export default EduPhiloPd;



