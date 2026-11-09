// src/components/SwissHistory.js

import React, { useEffect, useRef } from 'react';

const TEAM_NAMES = {
  '3F': 'ThirdFeather',
  FC: 'Fleet CMD',
  NE: 'NauseousEmoji',
  SS: 'Shield and Spear',
  DA: 'Deadly Alliance',
  FR: 'Fixed or Random',
  DD: 'Dad FPS & The Dial-Up kid',
  MK: 'Missile knows where it isnt'
};

const round1Pairings = [
  { left: '3F', right: 'DD', leftScore: 0, rightScore: 2 },
  { left: 'FC', right: 'MK', leftScore: 1, rightScore: 2 },
  { left: 'NE', right: 'FR', leftScore: 0, rightScore: 0 },
  { left: 'DA', right: 'SS', leftScore: 2, rightScore: 0 }
];

const round1Standings = {
  DD: 3,
  MK: 3,
  DA: 3,
  NE: 1,
  FR: 1,
  SS: 0,
  FC: 0,
  '3F': 0
};

const round2Pairings = [
  { left: 'DA', right: 'DD', leftScore: 0, rightScore: 2 },
  { left: 'SS', right: 'FC', leftScore: 2, rightScore: 0 },
  { left: '3F', right: 'FR', leftScore: 0, rightScore: 2 },
  { left: 'MK', right: 'NE', leftScore: 2, rightScore: 0 }
];

const round2Standings = {
  DD: 6,
  MK: 6,
  FR: 4,
  DA: 3,
  SS: 3,
  NE: 1,
  FC: 0,
  '3F': 0
};

const round3Pairings = [
  { left: 'FC', right: '3F', leftScore: 2, rightScore: 0 },
  { left: 'DD', right: 'MK', leftScore: 2, rightScore: 0 },
  { left: 'FR', right: 'DA', leftScore: 0, rightScore: 2 },
  { left: 'SS', right: 'NE', leftScore: 2, rightScore: 0 }
];

const round3Standings = {
  DD: 9,
  MK: 6,
  DA: 6,
  SS: 6,
  FR: 4,
  FC: 3,
  NE: 1,
  '3F': 0
};

const round4Pairings = [
  { left: 'DD', right: 'SS' },
  { left: 'MK', right: 'DA', leftScore: 0, rightScore: 2  },
  { left: 'FR', right: 'FC', leftScore: 0, rightScore: 2  },
  { left: 'NE', right: '3F', leftScore: 0, rightScore: 2  }
];

function sortPairingsByCombinedPoints(pairings, standingsBeforeRound) {
  return [...pairings].sort((a, b) => {
    const aPoints =
      (standingsBeforeRound[a.left] ?? 0) +
      (standingsBeforeRound[a.right] ?? 0);

    const bPoints =
      (standingsBeforeRound[b.left] ?? 0) +
      (standingsBeforeRound[b.right] ?? 0);

    if (bPoints !== aPoints) {
      return bPoints - aPoints;
    }

    const aHighest = Math.max(
      standingsBeforeRound[a.left] ?? 0,
      standingsBeforeRound[a.right] ?? 0
    );

    const bHighest = Math.max(
      standingsBeforeRound[b.left] ?? 0,
      standingsBeforeRound[b.right] ?? 0
    );

    if (bHighest !== aHighest) {
      return bHighest - aHighest;
    }

    return a.left.localeCompare(b.left);
  });
}

const Pairing = ({
  left,
  leftScore,
  rightScore,
  right,
  winner
}) => {
  const finished =
    leftScore !== undefined &&
    rightScore !== undefined;

  const leftWon =
    finished
      ? leftScore > rightScore
      : winner === left;

  const rightWon =
    finished
      ? rightScore > leftScore
      : winner === right;

  const draw =
    finished &&
    leftScore === rightScore;

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

            <span className="text-starlight-white mx-1">
              :
            </span>

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
        ) : winner ? (
          <>
            <span
              className={
                leftWon
                  ? 'text-green-400'
                  : 'text-red-400'
              }
            >
              {leftWon ? 'W' : 'L'}
            </span>

            <span className="text-starlight-white mx-1">
              :
            </span>

            <span
              className={
                rightWon
                  ? 'text-green-400'
                  : 'text-red-400'
              }
            >
              {rightWon ? 'W' : 'L'}
            </span>
          </>
        ) : (
          <span className="text-starlight-white">
            vs
          </span>
        )}
      </div>

      <div className="text-center text-2xl font-bold">
        {right}
      </div>

    </div>
  );
};

const StandingCluster = ({
  points,
  type = 'neutral',
  teams
}) => {
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
    <div
      className={`border-2 rounded-lg overflow-hidden ${clusterStyles[type]}`}
    >
      <div
        className={`text-center text-2xl font-bold py-2 border-b border-white/20 ${pointStyles[type]}`}
      >
        {points} {points === 1 ? 'Point' : 'Points'}
      </div>

      <div className="py-1">
        {teams.map((teamCode) => (
          <div
            key={teamCode}
            className="px-4 py-2 text-center"
          >
            {TEAM_NAMES[teamCode]}
          </div>
        ))}
      </div>
    </div>
  );
};

const FlowColumn = ({ title, children }) => (
  <div className="min-w-[230px] flex-1 border border-ionized-blue/60 rounded-lg bg-space-dark/90 p-4 flex flex-col">

    <h3 className="text-2xl font-bold text-center border-b border-ionized-blue/50 pb-3 mb-4">
      {title}
    </h3>

    <div className="flex-grow flex flex-col justify-center">
      {children}
    </div>

  </div>
);

function SwissHistory() {
  const scrollContainerRef = useRef(null);

  const sortedRound1 = sortPairingsByCombinedPoints(
    round1Pairings,
    {}
  );

  const sortedRound2 = sortPairingsByCombinedPoints(
    round2Pairings,
    round1Standings
  );

  const sortedRound3 = sortPairingsByCombinedPoints(
    round3Pairings,
    round2Standings
  );

  const sortedRound4 = sortPairingsByCombinedPoints(
    round4Pairings,
    round3Standings
  );

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      container.scrollLeft = container.scrollWidth;
    }
  }, []);

  return (
    <section className="mb-10">

      <style>
        {`
          .swiss-history-scroll {
            scrollbar-width: thin;
            scrollbar-color: #38bdf8 rgba(15, 23, 42, 0.75);
          }

          .swiss-history-scroll::-webkit-scrollbar {
            height: 12px;
          }

          .swiss-history-scroll::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.75);
            border: 1px solid rgba(56, 189, 248, 0.25);
            border-radius: 999px;
          }

          .swiss-history-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(
              90deg,
              #7c3aed,
              #38bdf8
            );

            border-radius: 999px;
            border: 2px solid rgba(15, 23, 42, 0.9);

            box-shadow:
              0 0 8px rgba(56, 189, 248, 0.45),
              0 0 12px rgba(124, 58, 237, 0.25);
          }

          .swiss-history-scroll::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              90deg,
              #8b5cf6,
              #67e8f9
            );

            box-shadow:
              0 0 10px rgba(103, 232, 249, 0.7),
              0 0 14px rgba(139, 92, 246, 0.4);
          }
        `}
      </style>

      <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2 mb-6">
        Swiss Tournament Progress
      </h2>

      <div
        ref={scrollContainerRef}
        className="swiss-history-scroll overflow-x-auto pb-4"
      >
        <div className="flex gap-5 min-w-[2100px] items-stretch">

          {/* ROUND 1 PAIRINGS */}
          <FlowColumn title="Round 1 Pairings">
            <div className="space-y-4">
              {sortedRound1.map((match) => (
                <Pairing
                  key={`${match.left}-${match.right}`}
                  {...match}
                />
              ))}
            </div>
          </FlowColumn>

          {/* ROUND 1 RESULTS */}
          <FlowColumn title="Round 1 Results">
            <div className="space-y-3">

              <StandingCluster
                points={3}
                type="winning"
                teams={['DA', 'DD', 'MK']}
              />

              <StandingCluster
                points={1}
                type="neutral"
                teams={['NE', 'FR']}
              />

              <StandingCluster
                points={0}
                type="losing"
                teams={['SS', '3F', 'FC']}
              />

            </div>
          </FlowColumn>

          {/* ROUND 2 PAIRINGS */}
          <FlowColumn title="Round 2 Pairings">
            <div className="space-y-4">
              {sortedRound2.map((match) => (
                <Pairing
                  key={`${match.left}-${match.right}`}
                  {...match}
                />
              ))}
            </div>
          </FlowColumn>

          {/* ROUND 2 RESULTS */}
          <FlowColumn title="Round 2 Results">
            <div className="space-y-3">

              <StandingCluster
                points={6}
                type="winning"
                teams={['DD', 'MK']}
              />

              <StandingCluster
                points={4}
                type="winning"
                teams={['FR']}
              />

              <StandingCluster
                points={3}
                type="neutral"
                teams={['DA', 'SS']}
              />

              <StandingCluster
                points={1}
                type="losing"
                teams={['NE']}
              />

              <StandingCluster
                points={0}
                type="losing"
                teams={['FC', '3F']}
              />

            </div>
          </FlowColumn>

          {/* ROUND 3 PAIRINGS */}
          <FlowColumn title="Round 3 Pairings">
            <div className="space-y-4">
              {sortedRound3.map((match) => (
                <Pairing
                  key={`${match.left}-${match.right}`}
                  {...match}
                />
              ))}
            </div>
          </FlowColumn>

          {/* ROUND 3 RESULTS */}
          <FlowColumn title="Round 3 Results">
            <div className="space-y-3">

              <StandingCluster
                points={9}
                type="winning"
                teams={['DD']}
              />

              <StandingCluster
                points={6}
                type="winning"
                teams={['MK', 'DA', 'SS']}
              />

              <StandingCluster
                points={4}
                type="neutral"
                teams={['FR']}
              />

              <StandingCluster
                points={3}
                type="neutral"
                teams={['FC']}
              />

              <StandingCluster
                points={1}
                type="losing"
                teams={['NE']}
              />

              <StandingCluster
                points={0}
                type="losing"
                teams={['3F']}
              />

            </div>
          </FlowColumn>

          {/* ROUND 4 PAIRINGS */}
          <FlowColumn title="Round 4 Pairings">
            <div className="space-y-4">
              {sortedRound4.map((match) => (
                <Pairing
                  key={`${match.left}-${match.right}`}
                  {...match}
                />
              ))}
            </div>
          </FlowColumn>

        </div>
      </div>

      <div className="mt-4 text-sm text-starlight-white/70">

        <strong>Shortcodes:</strong>{' '}

        3F = ThirdFeather ·
        FC = Fleet CMD ·
        NE = NauseousEmoji ·
        SS = Shield and Spear ·
        DA = Deadly Alliance ·
        FR = Fixed or Random ·
        DD = Dad FPS &amp; The Dial-Up kid ·
        MK = Missile knows where it isnt

      </div>

    </section>
  );
}

export default SwissHistory;
