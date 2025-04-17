import { useState } from 'react';
import React from 'react';
import AdsterraBanner from '../ads/AdsterraBanner';

export default function AgeGate({ onVerified }) {
  const [error, setError] = useState('');

  const handleClick = () => {
    const isAdult = true
    if (isAdult) onVerified();
    else setError("You must be 18+ to enter.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">18+ Content Warning</h1>
      <p className="mb-4">You must be 18 years or older to enter this site.</p>
      <button onClick={handleClick} className="bg-red-600 px-6 py-2 rounded text-white hover:bg-red-800">
        I am 18+
      </button>
      <AdsterraBanner/>
      {error && <p className="mt-4 text-red-400">{error}</p>}
    </div>
  );
}
