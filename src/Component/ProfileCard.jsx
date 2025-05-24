import React from 'react';
import GitHub from '../icons/github';
// import GitHub from '../icons/github';

function ProfileCard({ user }) {
  return (
   <div id='look' className="bg-white rounded-lg shadow-md p-6 mt-8 max-w-xl mx-auto text-center">
      <img
        src={<GitHub/>}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600 mt-2">{user.bio}</p>
      <p className="text-sm text-gray-500 mt-1">{user.location}</p>
      <p className="mt-3 font-bold text-gray-700">👥 Followers: {user.followers}</p>
    </div>
)}

export default ProfileCard;