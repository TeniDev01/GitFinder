import React from 'react';
import star from "../assets/star.svg";

export default function Repos({ repos }) {
  return (
    <>
      {repos.length > 0 && (
        <div className="max-w-xl mx-auto mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📂 Public Repositories:</h3>
          <ul className="space-y-4">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="p-4 bg-white rounded-lg shadow border border-gray-200"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold text-lg hover:underline"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
                )}
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <img src={star} alt="Star icon" className="w-4 h-4 mr-1" />
                  Stars: {repo.stargazers_count}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
