'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SimplifiedProfile from '../components/SimplifiedProfile';
import profiles from '../components/profiledata';

const ProfileCardDynamic = dynamic(() => import('../components/ProfileCard'), { ssr: false });

// Assuming Profile interface is defined as shown before
interface Profile {
  section: string;
  name: string;
  email: string;
  classYear: string;
  imageUrl: string;
  position: string;
  funFact: string;
  hometown: string;
  major: string;
  redirectUrl: string;
}

function groupProfilesBySection(profiles: Profile[]) {
  return profiles.reduce((acc: { [key: string]: Profile[] }, profile: Profile) => {
    const { section } = profile;
    acc[section] = acc[section] || [];
    acc[section].push(profile);
    return acc;
  }, {});
}

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  const profilesBySection = groupProfilesBySection(profiles as Profile[]);

  return (
    <main className="flex flex-col text-white w-full ">
      <div className="mt-8 flex flex-col">
        {Object.entries(profilesBySection).map(([section, sectionProfiles], index) => (
          <div key={index} className="sectionContainer" style={{ position: 'relative', paddingTop: '2rem' }}>
            <h2 className={`extraLarge ${index % 2 === 0 ? 'headerRight' : 'headerLeft'}`}>{section}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sectionProfiles.map((profile, profileIndex) => (
                <SimplifiedProfile key={profileIndex} profile={profile} onClick={() => handleProfileClick(profile)} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedProfile && (
        <div className="modalBackground">
          <div className="modalContent space-y-4">
            <ProfileCardDynamic profile={selectedProfile} />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
