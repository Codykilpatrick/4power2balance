import React from 'react';

const SwissBracket = ({ results }) => {
    const teamlist = results.map((result) => result.name);
    const teamStandingList = results.map((result) => [result.name, result.points, result.matchesPlayed]);
    const matchList = results.map((result) => [result.name, result.currentPair]);


  return (
    <div className="space-y-8">
      {/* <div className="space-y-6">
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
      </div> */}
    </div>
  );
  
};

export default SwissBracket;
