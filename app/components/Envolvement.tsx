import React from 'react';
import Image from 'next/image';

const Envolvement: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Berkeley Students Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Berkeley Students</h2>
            <p className="text-sm">
              Applications will open for student developers at the beginning of each semester. 
              Follow our <a href="#" className="text-blue-300">Facebook page</a> to stay updated!
            </p>
            <a href="#" className="text-blue-300 hover:underline">Learn More &rarr;</a>
          </div>
          <div className="relative h-56 md:h-96">
            <Image
              src="/microsoft.png" // Update the path to your image
              alt="Berkeley Students"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Nonprofit Organizations Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Nonprofit Organizations</h2>
            <p className="text-sm">
              If you’re a nonprofit organization with a project in mind, we encourage you to apply! 
              We accept NPO applications every June. Follow our <a href="#" className="text-blue-300">Facebook page</a> to stay updated!
            </p>
            <a href="#" className="text-blue-300 hover:underline">Learn More &rarr;</a>
          </div>
          <div className="relative h-56 md:h-96">
            <Image
              src="/Quizlet-Logo.png" // Update the path to your image
              alt="Nonprofit Organizations"
              layout="fill"
              objectFit="cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Envolvement;
