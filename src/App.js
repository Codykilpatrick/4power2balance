// src/App.js
import React from 'react';
import Header from './components/Header';
import RulesSection from './components/RulesSection';
import Bracket from './components/Bracket';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-space-dark text-starlight-white">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <RulesSection />
        {/* <Bracket /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
