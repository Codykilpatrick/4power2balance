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

  useEffect(() => {
    if (results) {
      updateStandings(results);
    } else {
      startNewRound();
    }
  }, [results]);

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

  const updateStandings = (results) => {
    const newStandings = standings.map((team) => {
      const result = results.find((r) => r.name === team.name);
      if (result) {
        return {
          ...team,
          points: result.points,
          matchesPlayed: result.matchesPlayed,
        };
      }
      return team;
    });

    setStandings(newStandings);
    startNewRound(newStandings);
  };

  const startNewRound = (updatedStandings = standings) => {
    // Create a new round of matches based on the standings
    const newRounds = [...rounds];
    const currentRound = pairTeams(updatedStandings);
    newRounds.push(currentRound);
    setRounds(newRounds);
  };

  const currentRound = rounds[rounds.length - 1] || [];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2 out">Current Week's Matches</h2>
            <div
              className="bg-space-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white"
            >
              <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>Panda</span>
              </div>
                <div className="p-2 text-starlight-white text-xl font-semibold">
                  <span>Loong</span>
                </div>
            </div>
            <div
              className="bg-space-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white"
            
            >
                <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>Frontier Negotiator</span>
              </div>
                <div className="p-2 text-starlight-white text-xl font-semibold">
                  <span>Suneaters</span>
                </div>
            </div>
            <div
              className="bg-space-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white"
            >
                <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>I'd Sin for that Solar Empire</span>
              </div>
                <div className="p-2 text-starlight-white text-xl font-semibold">
                  <span>Bankstreet Boys</span>
                </div>
            </div>
            <div
              className="bg-space-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white"
            >
                <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>Two Eggs, One Kol, and a Pure Eradica</span>
              </div>
                <div className="p-2 text-starlight-white text-xl font-semibold">
                  <span>LirTnolikSimcler2xdd</span>
                </div>
            </div>
            <div
              className="bg-space-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white"
            >
                <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>ISS</span>
              </div>
                <div className="p-2 text-starlight-white text-xl font-semibold">
                  <span>The Nameless Ones</span>
                </div>
            </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2">Standings</h2>
        <ul className="space-y-4">
          {standings
            .sort((a, b) => b.points - a.points || a.name.localeCompare(b.name))
            .map((team, index) => (
              <li key={team.name} className="flex flex-col space-y-2 bg-space-dark p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center text-starlight-white text-lg font-medium">
                  <span>{index + 1}. {team.name}</span>
                  <span className="bg-ionized-blue text-space-dark px-3 py-1 rounded-full text-sm font-bold">
                    {team.points} points
                  </span>
                </div>
                <div className="text-sm text-metallic-grey">
                  Matches Played: {team.matchesPlayed}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
  
};

export default SwissBracket;
