// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-nebula-purple to-space-dark text-starlight-white p-6 text-center shadow-md shadow-black">
      <h1 className="text-4xl font-extrabold tracking-wide">
        <img src="public/4Power2BalanceWhite.png" alt="4 Power 2 Balance"/>
      </h1>
      <div className="mt-2 border-t-2 border-starlight-white w-1/4 mx-auto"></div>
    </header>
  );
}

export default Header;
