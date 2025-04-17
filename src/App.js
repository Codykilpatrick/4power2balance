// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import RulesSection from './components/RulesSection';
import SwissBracket from './components/Bracket';
import Footer from './components/Footer';
import teamData from './components/teamData'; // 
import Leaderboard from './components/leaderboard'; 


function App() {

  const [results, ] = useState(teamData); 
  return (
    <div className="flex flex-col min-h-screen bg-image text-starlight-white">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Leaderboard />
        <SwissBracket results={results} />
        <RulesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
