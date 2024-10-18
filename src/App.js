// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import RulesSection from './components/RulesSection';
import SwissBracket from './components/Bracket';
import Footer from './components/Footer';
import resultsData from './components/resultsData'; // 


function App() {
  const participants = [
    'Team A', 'Team B', 'Team C', 'Team D', 
    'Team E', 'Team F', 'Team G', 'Team H'
  ];


  const [results, ] = useState(resultsData); 
  return (
    <div className="flex flex-col min-h-screen bg-space-dark text-starlight-white">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <SwissBracket participants={participants} results={results} />
        <RulesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
