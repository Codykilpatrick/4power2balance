import React from 'react';
import teamData from './teamData';
import playerData from './playerData';

const Leaderboard = () => {
  // Sortiere Teams nach EP absteigend
  const sortedTeams = [...teamData].sort((a, b) => b.EP - a.EP);

  // Sortiere Spieler nach EP absteigend
  const sortedPlayers = [...playerData].sort((a, b) => b.EP - a.EP);

  return (
    <div className="space-y-12 mb-12">
      {/* Teams Leaderboard */}
      <div>
        <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2">
          Leaderboard - Teams
        </h2>
        <ul className="space-y-6">
          {sortedTeams.map((team, index) => {
            const players = playerData.filter(player => player.currentTeam === team.name);
            return (
              <li key={team.name} className="bg-space-dark p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-starlight-white text-2xl font-semibold">
                    {index + 1}. {team.name}
                  </div>
                  <div className="bg-ionized-blue text-space-dark px-4 py-2 rounded-full font-bold">
                    {team.EP} EP
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-starlight-white">
                  {players.map((player) => (
                    <div key={player.name} className="flex flex-col items-center bg-space-light rounded-md p-2">
                      <div className="font-medium">{player.name}</div>
                      <div className="text-sm text-metallic-grey">{player.EP} EP</div>
                    </div>
                  ))}
                  {/* Leere Felder für fehlende Spieler */}
                  {Array.from({ length: Math.max(0, 4 - players.length) }).map((_, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-space-light rounded-md p-2">
                      <div className="font-medium text-metallic-grey">Empty</div>
                      <div className="text-sm text-metallic-grey">-</div>
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Players Leaderboard */}
      // Players Leaderboard - 3 Columns, 10 per Column
      <div>
        <h2 className="text-2xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2 mt-8">
          Leaderboard - Top 30 Players
        </h2>
      
        {/* 3 Spalten Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Jede Spalte separat */}
          {[0, 1, 2].map((columnIndex) => (
            <ul key={columnIndex} className="space-y-3">
              {sortedPlayers
                .slice(columnIndex * 10, (columnIndex + 1) * 10) // 10 Spieler pro Spalte
                .map((player, index) => (
                  <li key={player.name} className="flex justify-between items-center bg-space-light p-3 rounded-md shadow-sm">
                    <div className="text-starlight-white text-base">
                      {(columnIndex * 10) + index + 1}. {player.name}
                      <span className="text-sm text-metallic-grey"> ({player.currentTeam})</span>
                    </div>
                    <div className="bg-ionized-blue text-space-dark px-2 py-1 rounded-full text-sm font-semibold">
                      {player.EP} EP
                    </div>
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Leaderboard;
