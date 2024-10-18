import React, { useState, useEffect } from 'react';

const SwissBracket = ({ participants, results }) => {
  const [rounds, setRounds] = useState([]);
  const [standings, setStandings] = useState(
    participants.map((team) => ({
      name: team,
      points: 0,
      matchesPlayed: 0,
    }))
  );



  const startNextRound = () => {
    const newRounds = [...rounds];
    const currentRound = pairTeams(standings);
    newRounds.push(currentRound);
    setRounds(newRounds);
  };

  const pairTeams = (teams) => {
    // Sort by points, then by name
    const sortedTeams = [...teams].sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      return a.name.localeCompare(b.name);
    });

    // Pair teams with similar points
    const pairs = [];
    for (let i = 0; i < sortedTeams.length; i += 2) {
      pairs.push({
        team1: sortedTeams[i],
        team2: sortedTeams[i + 1] || null,
      });
    }
    return pairs;
  };


  const currentRound = rounds[rounds.length - 1] || [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Swiss Tournament</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Current Week's Matches</h2>
        {
          currentRound.map((match, matchIndex) => (
            <div
              key={matchIndex}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div className="p-2">
                <span>{match.team1.name}</span>
              </div>
              {match.team2 && (
                <div className="p-2">
                  <span>{match.team2.name}</span>
                </div>
              )}
            </div>
          ))
        }
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={startNextRound}
        disabled={rounds.length >= 3}
      >
        Start Next Round
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Standings</h2>
        <ul className="space-y-2">
          {standings
            .sort((a, b) => b.points - a.points || a.name.localeCompare(b.name))
            .map((team, index) => (
              <li key={team.name} className="flex justify-between">
                <span>{index + 1}. {team.name}</span>
                <span>{team.points} points</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SwissBracket;
