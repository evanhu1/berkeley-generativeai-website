'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import SimplifiedProfile from '../components/SimplifiedProfile';
import profiles from '../components/profiledata';
import useOnScreen from '../components/hooks/useOnScreen'; // Adjust the import path as necessary



const ProfileCardDynamic = dynamic(() => import('../components/ProfileCard'), { ssr: false });

export default function Home() {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProfileClick = (profile) => {
        setSelectedProfile(profile);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProfile(null);
    };

    const profilesBySection = groupProfilesBySection(profiles);

    return (
        <main className="flex flex-col items-center text-white w-full">
            <div className="mt-8">
                {Object.entries(profilesBySection).map(([section, sectionProfiles], index) => {
                    // Create a ref for each section
                    const sectionRef = useRef(null);
                    // Determine if the section is visible
                    const isVisible = useOnScreen(sectionRef);

                    return (
                        <div ref={sectionRef} key={index} className={`sectionContainer ${isVisible ? 'animate-fadeIn' : ''}`} style={{ position: 'relative', paddingTop: '2rem' }}>
                            <h2 className={index % 2 === 0 ? 'headerRight extraLarge' : 'headerLeft extraLarge'}>{section}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1rem">
                                {sectionProfiles.map((profile, profileIndex) => (
                                    <SimplifiedProfile key={profileIndex} profile={profile} onClick={handleProfileClick} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            {isModalOpen && selectedProfile && (
                <div className="modalBackground">
                    <div className="modalContent">
                        {selectedProfile && <ProfileCardDynamic profile={selectedProfile} />}
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </main>
    );
}

function groupProfilesBySection(profiles) {
  return profiles.reduce((acc, profile) => {
    const { section } = profile;
    acc[section] = acc[section] || [];
    acc[section].push(profile);
    return acc;
  }, {});
}
