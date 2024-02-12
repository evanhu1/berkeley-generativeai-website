import React from 'react';
import Image from 'next/image';
import './css/Profile.css'; // Ensure this path is correct

const ProfileCard = ({ profile }) => { // Accept a single profile as a prop
    // Handler to redirect
    const handleRedirect = () => {
        window.location.href = profile.redirectUrl; // Use the redirectUrl from the passed-in profile
    };

    // Check if profile exists before rendering
    if (!profile) {
        return null; // Or some placeholder content
    }

    return (
        <div className="cardContainer">
            <div className="card">
                <button className="topRightButton" onClick={handleRedirect}>Coffee Chat</button>
                
                
                <Image 
                    className="profilePicture"
                    src={profile.imageUrl}
                    alt={`${profile.name} Profile Picture`} 
                    width={200} 
                    height={200}
                    style={{ borderRadius: '10%' }} // Note: Inline styles may not apply to Next.js Image. Use className and CSS instead.
                />
                <div className="PositionContainer">
                    <p className="position">{profile.position}</p>
                </div>
                
                <p className="name">{profile.name}</p>
                <p className="email">{profile.email}</p>
                <p className='class'>{profile.classYear}</p>
                
                <p className="funfact">{profile.funFact}</p>
                <div className="minmaxContainer">
                    <div className="min">
                        <p className="hometownHeading">Hometown</p>
                        <p className="hometown">{profile.hometown}</p>
                    </div>
                    <div className="max">
                        <p className="majorHeading">Major</p>
                        <p className="major">{profile.major}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
