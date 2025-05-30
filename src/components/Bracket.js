import PropTypes from 'prop-types';

const SwissBracket = ({ results }) => {
  // Group teams by `currentPair`
  const matchGroups = results.reduce((groups, result) => {
    const pair = result.currentPair;
    if (!groups[pair]) groups[pair] = [];
    groups[pair].push(result);
    return groups;
  }, {});

  return (
    <div className="space-y-8">
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2">Standings</h2>
        <ul className="space-y-4">
          {results
           .filter((team) => team.currentPair !== null && team.currentPair !== undefined)
            .sort((a, b) => b.points - a.points)
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
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2">Matches</h2>
        {Object.keys(matchGroups).map((pairKey) => (
          <div key={pairKey} className="bg-space-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 outline outline-starlight-white">
            {matchGroups[pairKey].length === 2 ? (
              // Display two teams with a dash in between
              <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>{matchGroups[pairKey][0].name} - {matchGroups[pairKey][1].name}</span>
              </div>
            ) : (
              // Display single team if there's no pair
              <div className="p-2 text-starlight-white text-xl font-semibold border-b border-metallic-grey">
                <span>{matchGroups[pairKey][0].name}</span>
              </div>
            )}
            <div className="p-2 text-starlight-white text-xl font-semibold">
              <span>Status: {matchGroups[pairKey][0].matchTime || 'TBD'}</span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

SwissBracket.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      currentPair: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      matchesPlayed: PropTypes.number.isRequired,
      matchTime: PropTypes.string
    })
  ).isRequired
};

export default SwissBracket;
