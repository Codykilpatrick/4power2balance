// src/components/RulesSection.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border border-starlight-white rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-nebula-purple to-space-dark text-starlight-white p-4 text-left font-bold flex justify-between items-center"
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="bg-metallic-grey text-starlight-white p-4 transition-all">
          {children}
        </div>
      )}
    </div>
  );
}

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

function RulesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2 mb-6">Rules</h2>
      
      <CollapsibleSection title="Tournament Format">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Team Setup:</strong> Each team can register 4 players. To join the tournament, you need to register 2 players right away, and an additional player can be added later. I don't want to interfere with Team Politics much, but if a player left a team, they will not be able to join any team or earn EP for the tournament placement. If the remaining players decide to recruit a replacement, they are allowed to do this up to two times. This means if 4 player team loses 2 members, the remaining 2 players are allowed to recruit 2 new members to replace the others. If then again, someone leaves the team, the remaining players need to play with an empty spot in their roster. Resulting in a total of 6 players being able to participate for a team. Ideally all teams have their things sorted out and a good stable roster of 3 main players and 1 backUp that can jump in if needed. 
                I hope this ruling gives enough flexibility and still keeps the original identity of teams.</li>
          <li><strong>Swiss System:</strong> Matches will be paired using the Swiss system to ensure balanced matchups.</li>
          <li><strong>Best of 3 (Bo3) Matches:</strong> 7 maps are available. Each team uses 2 bans, with the final 3 maps being played. The ban format is 1-2-1. Decide at random who gets the first ban.</li>
          <li><strong>Victory Conditions:</strong> Most competitive players prefer playing with victory conditions off, so that&apos;s what we&apos;ll go with.</li>
          <li><strong>Speed:</strong> Speed will be x1.5, with all other individual speed settings set to normal.</li>
          <li><strong>Rotating Planets:</strong> Rotation On</li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Mappool">
        <ul className="list-disc list-inside space-y-2">
          <li>Crossfire 2v2</li>
          <li>Scrambler 2v2</li>
          <li>Transtav 2v2</li>
          <li>Shuriken 2v2</li>
          <li>Foreign Invasion 3v3</li>
          <li>Maelstrom 3v3</li>
          <li>Razor&apos;s Edge 3v3</li>
          <li>
            In Bo3 matches, teams can ban the 3v3 maps if they want to play on 2v2 maps. This means a team of 2 players can win the whole tournament.
          </li>
        </ul>
        <p className="mt-4">
          Here you can find an overview: 
          <a 
            href="https://www.reddit.com/r/SoSE/comments/1f1ckb6/map_guide_everything_you_need_to_know_about_maps/" 
            className="text-blue-500 underline"
            target="_blank" 
            rel="noopener noreferrer">
            Map Guide
          </a>
        </p>
      </CollapsibleSection>

      <CollapsibleSection title="Prize Pool">
        <ul className="list-disc list-inside space-y-2">
          <li>1st: TBA</li>
          <li>2nd: TBA</li>
          <li>3rd: TBA</li>
          <li>Top 8: TBA</li>
          <li>Support from: u/duckeh133</li>
        </ul>
        <p className="mt-4">
          Additional points for a leaderboard will be awarded based on wins and placements. If the series gains traction, this will highlight top performers over a longer period.
        </p>
      </CollapsibleSection>

      <CollapsibleSection title="Schedule">
        <p>
          Pairings will be made between 20:00 CET Sunday and 23:00 CET on Mondays. Rounds will end on Mondays at 20:00 CET and start at 23:00 CET. Full pairings will be announced on Discord and Reddit.
        </p>
        <p className="mt-4">
          Contact your opponent via Discord or Reddit to schedule a match within the week. Official playdays are Saturday and Sunday.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Round 1: TBA</li>
          <li>Round 2: TBA</li>
          <li>Round 3: TBA</li>
          <li>Round 4: TBA</li>
        </ul>
        <p className="mt-4">
          Late sign-ups are allowed in Round 1 (if they make the number of teams even). This ensures fair pairings, avoids free wins due to an uneven number of teams, and gives late joiners a chance to participate.
        </p>
      </CollapsibleSection>

      <CollapsibleSection title="Casting & Replays">
        <p>
          Replays will be uploaded to the official Sins2 Discord with the tag &quot;4P2B&quot; in the filename. If you are interested in casting matches, please contact me. I would be happy if I can work with the cast of the 2024 tournament.
        </p>
        <p className="mt-4">
          Some community members offer to create maps with spectator spots, which will be a possibility.
        </p>
      </CollapsibleSection>

      <CollapsibleSection title="Interested in Joining?">
        <p>
          The tournament is meant to be simple, fun, and exciting. If you&apos;re into Sins2 and want to be part of the growing competitive scene, grab two friends and get ready for the action.
        </p>
        <p className="mt-4">
          To join, provide your Reddit and Discord usernames and choose a team name. It can be anything as long as it adheres to the sub and Discord rules.
        </p>
      </CollapsibleSection>
    </section>
  );
}

export default RulesSection;
