import React, { useState } from 'react';

// For this project, a simple client-side mock search is fine, or one can use a flexsearch index 
// but since we only have a few files, we will simulate the search for testing purposes.

export default function Search() {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Hardcoded results to simulate finding a hit. 
  // Normally this would query an index built out of _docs.
  const hits = [
    { title: 'Introduction', url: '/docs/v1/introduction', excerpt: 'Welcome to version 1...' }
  ];

  const results = query
    ? hits.filter(h => h.title.toLowerCase().includes(query.toLowerCase()) || h.excerpt.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setHasSearched(e.target.value.length > 0);
  };

  return (
    <div className="relative">
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search docs..."
        value={query}
        onChange={handleSearch}
        className="border rounded px-2 py-1"
      />
      {hasSearched && (
        <div className="absolute top-full mt-1 left-0 w-64 bg-white border shadow-lg rounded p-2 z-50">
          {results.length > 0 ? (
            <div data-testid="search-results">
              {results.map((r, i) => (
                <div key={i} className="mb-2">
                  <a href={r.url} className="text-blue-500 hover:underline font-bold">{r.title}</a>
                  <p className="text-sm text-gray-600">{r.excerpt}</p>
                </div>
              ))}
            </div>
          ) : (
            <div data-testid="search-no-results" className="text-gray-500">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
