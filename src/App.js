// src/App.js
import React from 'react';
import Header from './components/Header';
import RulesSection from './components/RulesSection';
import SwissBracket from './components/Bracket';
import Footer from './components/Footer';

function App() {
  const participants = [
    'Team A', 'Team B', 'Team C', 'Team D', 
    'Team E', 'Team F', 'Team G', 'Team H'
  ];
  return (
    <div className="flex flex-col min-h-screen bg-space-dark text-starlight-white">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <RulesSection />
        <h1 className="text-3xl font-bold">Tournament Bracket</h1>
        <SwissBracket participants={participants} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
