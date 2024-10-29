import React from 'react';

const SwissBracket = ({ results }) => {
    const teamStandingList = results.map((result) => [result.name, result.points, result.matchesPlayed]);
    const matchList = results.map((result) => [result.name, result.currentPair, result.matchTime]);

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2 out">Current Week's Matches</h2>
          {matchList
            .map((match, index) => (           
            <div
              index={index}
              className="bg-space-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white"
            >
              <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>{match[0]}</span>
              </div>
                <div className="p-2 text-starlight-white text-xl font-semibold">
                  <span>{match[0]}</span>
                </div>
            </div>
            )) 
          }
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2">Standings</h2>
        <ul className="space-y-4">
          {teamStandingList
            .map((team, index) => (
              <li key={team[0]} className="flex flex-col space-y-2 bg-space-dark p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center text-starlight-white text-lg font-medium">
                  <span>{index + 1}. {team[0]}</span>
                  <span className="bg-ionized-blue text-space-dark px-3 py-1 rounded-full text-sm font-bold">
                    {team[1]} points
                  </span>
                </div>
                <div className="text-sm text-metallic-grey">
                  Matches Played: {team[2]}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
  
};

export default SwissBracket;
