// In components/SimplifiedProfile.jsx
import React from 'react';
import Image from 'next/image';
import './css/Profile.css'; // Ensure this path is correct

const SimplifiedProfile = ({ profile, onClick }) => {
    return (
        <div className="cursor-pointer" onClick={() => onClick(profile)}>
            <div className="profileImageContainer">
                <Image
                    src={profile.imageUrl}
                    alt={`${profile.name} Profile Picture`}
                    width={200} // These dimensions are now handled by the container
                    height={200}
                    className="profileImage"
                />
            </div>
            <p style={{ fontWeight: 'bold',marginTop: '1rem', marginBottom:'0.5em', marginRight:'0px'}}>{profile.name}</p>
            <p style={{ color: 'gray', fontSize: 'small' ,marginBottom:'1rem'}}>{profile.position}</p>
        </div>
    );
};

export default SimplifiedProfile;