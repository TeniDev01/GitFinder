import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
