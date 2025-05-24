import React, { useState } from 'react';
import SearchBar from './Component/SearchBar';
import ProfileCard from './Component/ProfileCard';
import RepoList from './Component/ReposList';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setUsername(username);
    setLoading(true);
    setError(null);
    setUserData(null);
    setRepos([]);

    try {
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      if (!profileRes.ok) throw new Error('User not found');
      const profileData = await profileRes.json();

      const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposRes.ok) throw new Error('Could not fetch repositories');
      const reposData = await reposRes.json();

      setUserData(profileData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-black font-bold text-center text-3xl mb-6">GitHub Profile Viewer</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        {userData && <ProfileCard user={userData} />}
        {repos.length > 0 && <RepoList repos={repos} />}
      </div>
    </div>
  );
}

export default App;
