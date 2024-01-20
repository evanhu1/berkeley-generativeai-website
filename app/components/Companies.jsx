import React from 'react';
import Image from 'next/image';

function Companies() {
  return (
    <div className="flex flex-col place-content-center sm:flex-row  w-full mt-6">
      <div className="flex flex-col my-8 p-4 bg-purple-100/60 rounded-md space-y-4">
        <div className="flex flex-row place-content-center space-x-4">
          <Image src="/yc.png" alt="Y Combinator Logo" width={200} height={64}/>
          <Image src="/bair.png" alt="BAIR Logo" width={200} height={64} />
        </div>
        <div className="flex flex-row brightness-125">
          <Image src="/scet.png" alt="SCET Logo" width={500} height={20} />
        </div>
      </div>
    </div>
  );
}

export default Companies;
