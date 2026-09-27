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
      <h2 className="text-3xl font-bold text-ionized-blue border-b-2 border-ionized-blue pb-2 mb-6">
        Rules
      </h2>

      {/* Tournament Format */}
      <CollapsibleSection title="Tournament Format">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>DLC:</strong> Eidolon on, Reinforcements on.
          </li>

          <li>
            <strong>Swiss System:</strong> Matches will be paired using the Swiss system
            to create increasingly balanced matchups between teams with similar records.
          </li>

          <li>
            <strong>Swiss Rounds:</strong> The tournament will consist of 4 Swiss rounds.
          </li>

          <li>
            <strong>Best of 3 (Bo3):</strong> All Swiss matches are played as a Bo3.
          </li>

          <li>
            <strong>Grand Final:</strong> The two highest-ranked teams after 4 Swiss rounds
            will play a Best of 5 Grand Final.
          </li>

          <li>
            <strong>Victory Conditions:</strong> Factional Victories on.
          </li>

          <li>
            <strong>Speed:</strong> Game speed x1.5, with all other individual speed
            settings set to normal.
          </li>

          <li>
            <strong>Rotating Planets:</strong> Rotation on.
          </li>

          <li>
            <strong>Gentleman Agreements:</strong> Teams may agree to play specific maps
            from the available pool if both teams agree.
          </li>
        </ul>
      </CollapsibleSection>

      {/* Team Setup */}
      <CollapsibleSection title="Team Setup">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Each team can register up to <strong>4 players</strong>.
          </li>

          <li>
            A minimum of <strong>2 players</strong> is required to register a team.
          </li>

          <li>
            Additional players may be added later as long as the roster limit is respected.
          </li>

          <li>
            A team only needs 2 players to participate and can theoretically win the
            tournament with 2 players.
          </li>

          <li>
            A team needs 3 available players to make full use of the complete 2v2 / 3v3
            mappool.
          </li>

          <li>
            If a player leaves a team during the tournament, they cannot join another team
            or earn placement EP with another roster during the same tournament.
          </li>

          <li>
            Teams may recruit replacements up to <strong>two times</strong> after players
            leave the roster.
          </li>

          <li>
            This allows a maximum of 6 different players to have participated for the same
            team over the course of the tournament.
          </li>
        </ul>
      </CollapsibleSection>

      {/* Mappool */}
      <CollapsibleSection title="Mappool">
        <h3 className="text-xl font-bold text-ionized-blue mb-3">
          Full Mappool
        </h3>

        <ul className="list-disc list-inside space-y-2">
          <li>Crossfire 2v2</li>
          <li>Scrambler 2v2</li>
          <li>Transtav 2v2</li>
          <li>Shuriken 2v2</li>
          <li>High Stakes 2v2</li>
          <li>Hammerfall 2v2</li>
          <li>Gemini 2v2</li>
          <li>Foreign Invasion 3v3</li>
          <li>Razor&apos;s Edge 3v3</li>
          <li>Maelstrom 3v3</li>
        </ul>

        <h3 className="text-xl font-bold text-ionized-blue mt-6 mb-3">
          2v2 Mappool
        </h3>

        <ul className="list-disc list-inside space-y-2">
          <li>Crossfire</li>
          <li>Scrambler</li>
          <li>Transtav</li>
          <li>Shuriken</li>
          <li>High Stakes</li>
          <li>Hammerfall</li>
          <li>Gemini</li>
        </ul>

        <p className="mt-4">
          If both teams can only field 2 players, the 2v2-only mappool is used.
        </p>

        <p className="mt-4">
          If one team has 3 players while the opposing team only has 2 players,
          the special 3-player vs 2-player drafting rules apply.
        </p>

        <p className="mt-4">
          For reference on map layouts and spawn positions, you can use the{' '}
          <a
            href="https://www.reddit.com/r/SoSE/comments/1f1ckb6/map_guide_everything_you_need_to_know_about_maps/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Map Guide
          </a>.
        </p>
      </CollapsibleSection>

      {/* Drafting */}
      <CollapsibleSection title="Map, Faction & Position Drafting">
        <p>
          Every series begins with a <strong>diceroll</strong> or another agreed random
          method.
        </p>

        <p className="mt-4">
          The winning team chooses between:
        </p>

        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Advantage on Mappool</strong>
          </li>
          <li>
            <strong>Advantage on Mappick</strong>
          </li>
        </ul>

        <p className="mt-4">
          The opposing team automatically receives the advantage that was not chosen.
        </p>

        <h3 className="text-xl font-bold text-ionized-blue mt-6 mb-3">
          Advantage on Mappool
        </h3>

        <p>
          The team with advantage on mappool decides whether they want to make the
          <strong> first or second ban</strong>.
        </p>

        <p className="mt-4">
          The ban format is:
        </p>

        <p className="mt-2 font-bold">
          A - BB - A
        </p>

        <p className="mt-4">
          This means both teams receive 2 bans.
        </p>

        <p className="mt-4">
          In the full 10-map pool, 4 maps are removed and 6 maps remain available for
          mappick.
        </p>

        <h3 className="text-xl font-bold text-ionized-blue mt-6 mb-3">
          Advantage on Mappick
        </h3>

        <p>
          The team with advantage on mappick chooses which of the remaining maps will be
          played.
        </p>

        <p className="mt-4">
          They also decide whether they want the <strong>first or second faction and
          position pick</strong>.
        </p>

        <p className="mt-4">
          The faction and position drafting formats are:
        </p>

        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>3v3:</strong> A - BB - AA - B
          </li>
          <li>
            <strong>2v2:</strong> A - BB - A
          </li>
        </ul>

        <p className="mt-4">
          Faction choice and spawn position are selected together when placing a player.
        </p>

        <p className="mt-4">
          After each game, <strong>advantage on mappick goes to the losing team</strong>.
        </p>

        <p className="mt-4">
          Therefore, the loser of the previous game chooses the next map and whether they
          want first or second faction/position pick.
        </p>
      </CollapsibleSection>

      {/* 3v2 Rules */}
      <CollapsibleSection title="3 Player Team vs 2 Player Team">
        <p>
          To make matches between a 3-player roster and a 2-player roster fairer, a
          separate drafting procedure is used.
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            All 3v3 maps are automatically removed.
          </li>

          <li>
            The 3-player team bans <strong>3 maps</strong> from the 2v2 pool.
          </li>

          <li>
            The 2-player team receives <strong>no map bans</strong>.
          </li>

          <li>
            This leaves <strong>4 maps</strong> available for the series.
          </li>

          <li>
            The 2-player team starts the series with{' '}
            <strong>advantage on mappick</strong>.
          </li>

          <li>
            After the first game, normal loser&apos;s-choice rules apply.
          </li>
        </ul>

        <div className="mt-6">
          <p><strong>In short:</strong></p>

          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>3v3:</strong> both teams get 2 bans.
            </li>
            <li>
              <strong>2v2:</strong> both teams get 2 bans, 3v3 maps are unavailable.
            </li>
            <li>
              <strong>3v2:</strong> the 3-player team gets 3 bans, the 2-player team gets
              first mappick.
            </li>
          </ul>
        </div>
      </CollapsibleSection>

      {/* Prize Pool */}
      <CollapsibleSection title="Prize Pool & Eternal Points">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>1st:</strong> 54€ + 27 EP
          </li>
          <li>
            <strong>2nd:</strong> 36€ + 18 EP
          </li>
          <li>
            <strong>3rd:</strong> 24€ + 9 EP
          </li>
          <li>
            <strong>4th:</strong> 18€ + 3 EP
          </li>
          <li>
            <strong>5th - 8th:</strong> 12€ + 2 EP
          </li>
        </ul>

        <p className="mt-4">
          The total prize pool is <strong>180€</strong>.
        </p>

        <p className="mt-4">
          Teams also earn Eternal Points through individual games:
        </p>

        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            Every game played grants <strong>2 EP</strong>.
          </li>
          <li>
            Every game won grants an additional <strong>3 EP</strong>.
          </li>
        </ul>

        <p className="mt-4">
          Eternal Points are used for the long-term 4P2B leaderboard and track performance
          across multiple tournaments.
        </p>
      </CollapsibleSection>

      {/* Schedule */}
      <CollapsibleSection title="Schedule">
        <p>
          The official playdays are the <strong>weekends</strong>, but teams may schedule
          their matches at any mutually agreed time within the active round.
        </p>

        <p className="mt-4">
          Once pairings are announced, teams should contact their opponent via Discord and
          find a suitable time for their match.
        </p>

        <p className="mt-4">
          Round 1 receives 3 weekends. All following Swiss rounds receive 2 weekends.
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <strong>Round 1:</strong> 25.09. - 12.10.
          </li>
          <li>
            <strong>Round 2:</strong> 12.10. - 26.10.
          </li>
          <li>
            <strong>Round 3:</strong> 26.10. - 09.11.
          </li>
          <li>
            <strong>Round 4:</strong> 09.11. - 23.11.
          </li>
        </ul>

        <p className="mt-4">
          If all matches of a round are completed early, the next pairings may also be
          announced early.
        </p>

        <p className="mt-4">
          Late joins are allowed until <strong>10.10.</strong>, but only if they keep the
          total number of teams even. Therefore, if the tournament currently has an even
          number of teams, two additional teams must register for a late join to be
          accepted.
        </p>
      </CollapsibleSection>

      {/* Casting */}
      <CollapsibleSection title="Casting & Replays">
        <p>
          Players should save their replays and upload them to the official Sins2 Discord.
        </p>

        <p className="mt-4">
          Please use the tag <strong>4P2B</strong> so tournament replays can be found
          easily.
        </p>

        <p className="mt-4">
          Casted replays will be uploaded and shared with the community.
        </p>

        <p className="mt-4">
          If you are interested in casting 4P2B games, feel free to contact me.
        </p>
      </CollapsibleSection>

      {/* Joining */}
      <CollapsibleSection title="Interested in Joining?">
        <p>
          The tournament is meant to be simple, fun, fair and competitive. If you&apos;re
          into Sins2 and want to participate in organized PvP, you are welcome to join.
        </p>

        <p className="mt-4">
          To register, provide the Discord usernames of at least 2 players and choose a
          team name.
        </p>

        <p className="mt-4">
          Team names must follow the rules of the relevant Discord and community platforms.
        </p>

        <p className="mt-4">
          You can contact me via Discord, YouTube or Reddit. My name is{' '}
          <strong>aqua995</strong> everywhere.
        </p>
      </CollapsibleSection>
    </section>
  );
}

export default RulesSection;
