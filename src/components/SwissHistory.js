import React from 'react';

const Pairing = ({ left, leftScore, rightScore, right }) => {
  const finished = leftScore !== undefined && rightScore !== undefined;

  const leftWon = finished && leftScore > rightScore;
  const rightWon = finished && rightScore > leftScore;
  const draw = finished && leftScore === rightScore;

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-[72px] px-3 py-3 border border-ionized-blue/60 bg-space-dark/80 rounded">
      <div className="text-center text-2xl font-bold">
        {left}
      </div>

      <div className="px-3 text-xl font-bold whitespace-nowrap">
        {finished ? (
          <>
            <span
              className={
                draw
                  ? 'text-starlight-white'
                  : leftWon
                  ? 'text-green-400'
                  : 'text-red-400'
              }
            >
              {leftScore}
            </span>

            <span className="text-starlight-white mx-1">:</span>

            <span
              className={
                draw
                  ? 'text-starlight-white'
                  : rightWon
                  ? 'text-green-400'
                  : 'text-red-400'
              }
            >
              {rightScore}
            </span>
          </>
        ) : (
          <span className="text-starlight-white">vs</span>
        )}
      </div>

      <div className="text-center text-2xl font-bold">
        {right}
      </div>
    </div>
  );
};

const StandingCluster = ({ points, type = 'neutral', teams }) => {
  const clusterStyles = {
    winning:
      'border-green-400 bg-green-950/40',
    neutral:
      'border-starlight-white bg-gray-500/20',
    losing:
      'border-red-400 bg-red-950/40'
  };

  const pointStyles = {
    winning: 'text-green-400',
    neutral: 'text-starlight-white',
    losing: 'text-red-400'
  };

  return (
    <div className={`border-2 rounded-lg overflow-hidden ${clusterStyles[type]}`}>
      <div
        className={`text-center text-2xl font-bold py-2 border-b border-white/20 ${pointStyles[type]}`}
      >
        {points} {points === 1 ? 'Point' : 'Points'}
      </div>

      <div className="py-1">
        {teams.map((team) => (
          <div
            key={team.name}
            className="grid grid-cols-[36px_1fr] gap-2 px-3 py-2"
          >
            <span className="font-bold text-right">
              {team.rank}.
            </span>

            <span>
              {team.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FlowColumn = ({ title, children }) => (
  <div className="min-w-[230px] flex-1 border border-ionized-blue/60 rounded-lg bg-space-dark/90 p-4">
    <h3 className="text-2xl font-bold text-center border-b border-ionized-blue/50 pb-3 mb-4">
      {title}
    </h3>

    {children}
  </div>
);

function SwissHistory() {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2 mb-6">
        Swiss Tournament Progress
      </h2>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-5 min-w-[1400px]">

          {/* ROUND 1 PAIRINGS */}
          <FlowColumn title="Round 1 Pairings">
            <div className="space-y-4">
              <Pairing
                left="3F"
                leftScore={0}
                rightScore={2}
                right="DD"
              />

              <Pairing
                left="FC"
                leftScore={1}
                rightScore={2}
                right="MK"
              />

              <Pairing
                left="NE"
                leftScore={0}
                rightScore={0}
                right="FR"
              />

              <Pairing
                left="DA"
                leftScore={2}
                rightScore={0}
                right="SS"
              />
            </div>
          </FlowColumn>

          {/* ROUND 1 STANDINGS */}
          <FlowColumn title="Round 1 Results">
            <div className="space-y-3">

              <StandingCluster
                points={3}
                type="winning"
                teams={[
                  {
                    rank: 1,
                    name: 'Deadly Alliance'
                  },
                  {
                    rank: 1,
                    name: 'Dad FPS & The Dial-Up kid'
                  },
                  {
                    rank: 1,
                    name: 'Missile knows where it isnt'
                  }
                ]}
              />

              <StandingCluster
                points={1}
                type="neutral"
                teams={[
                  {
                    rank: 4,
                    name: 'NauseousEmoji'
                  },
                  {
                    rank: 4,
                    name: 'Fixed or Random'
                  }
                ]}
              />

              <StandingCluster
                points={0}
                type="losing"
                teams={[
                  {
                    rank: 6,
                    name: 'Shield and Spear'
                  },
                  {
                    rank: 6,
                    name: 'ThirdFeather'
                  },
                  {
                    rank: 6,
                    name: 'Fleet CMD'
                  }
                ]}
              />

            </div>
          </FlowColumn>

          {/* ROUND 2 PAIRINGS */}
          <FlowColumn title="Round 2 Pairings">
            <div className="space-y-4">

              <Pairing
                left="DA"
                leftScore={0}
                rightScore={2}
                right="DD"
              />

              <Pairing
                left="SS"
                leftScore={2}
                rightScore={0}
                right="FC"
              />

              <Pairing
                left="3F"
                leftScore={0}
                rightScore={2}
                right="FR"
              />

              <Pairing
                left="MK"
                leftScore={2}
                rightScore={0}
                right="NE"
              />

            </div>
          </FlowColumn>

          {/* ROUND 2 STANDINGS */}
          <FlowColumn title="Round 2 Results">
            <div className="space-y-3">

              <StandingCluster
                points={6}
                type="winning"
                teams={[
                  {
                    rank: 1,
                    name: 'Dad FPS & The Dial-Up kid'
                  },
                  {
                    rank: 1,
                    name: 'Missile knows where it isnt'
                  }
                ]}
              />

              <StandingCluster
                points={4}
                type="winning"
                teams={[
                  {
                    rank: 3,
                    name: 'Fixed or Random'
                  }
                ]}
              />

              <StandingCluster
                points={3}
                type="neutral"
                teams={[
                  {
                    rank: 4,
                    name: 'Deadly Alliance'
                  },
                  {
                    rank: 4,
                    name: 'Shield and Spear'
                  }
                ]}
              />

              <StandingCluster
                points={1}
                type="losing"
                teams={[
                  {
                    rank: 6,
                    name: 'NauseousEmoji'
                  }
                ]}
              />

              <StandingCluster
                points={0}
                type="losing"
                teams={[
                  {
                    rank: 7,
                    name: 'Fleet CMD'
                  },
                  {
                    rank: 7,
                    name: 'ThirdFeather'
                  }
                ]}
              />

            </div>
          </FlowColumn>

          {/* ROUND 3 PAIRINGS */}
          <FlowColumn title="Round 3 Pairings">
            <div className="space-y-4">

              <Pairing
                left="FC"
                right="3F"
              />

              <Pairing
                left="DD"
                right="MK"
              />

              <Pairing
                left="FR"
                right="DA"
              />

              <Pairing
                left="SS"
                right="NE"
              />

            </div>
          </FlowColumn>

        </div>
      </div>

      {/* Shortcode Legend */}
      <div className="mt-4 text-sm text-starlight-white/70">
        <strong>Shortcodes:</strong>{' '}
        3F = ThirdFeather · FC = Fleet CMD · NE = NauseousEmoji ·
        SS = Shield and Spear · DA = Deadly Alliance ·
        FR = Fixed or Random · DD = Dad FPS &amp; The Dial-Up kid ·
        MK = Missile knows where it isnt
      </div>
    </section>
  );
}

export default SwissHistory;
