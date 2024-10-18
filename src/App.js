// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import RulesSection from './components/RulesSection';
import SwissBracket from './components/Bracket';
import Footer from './components/Footer';

function App() {
  const participants = [
    'Team A', 'Team B', 'Team C', 'Team D', 
    'Team E', 'Team F', 'Team G', 'Team H'
  ];

  const [results, ] = useState([
    { name: 'Team A', points: 0, matchesPlayed: 0 },
    { name: 'Team B', points: 0, matchesPlayed: 0 },
    { name: 'Team C', points: 0, matchesPlayed: 0},
    { name: 'Team D', points: 0, matchesPlayed: 0},
    { name: 'Team E', points: 0, matchesPlayed: 0 },
    { name: 'Team F', points: 0, matchesPlayed: 0 },
    { name: 'Team G', points: 0, matchesPlayed: 0 },
    { name: 'Team H', points: 0, matchesPlayed: 0 },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-space-dark text-starlight-white">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <RulesSection />
        <h1 className="text-3xl font-bold">Tournament Bracket</h1>
        <SwissBracket participants={participants} results={results} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
