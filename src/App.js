// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import RulesSection from './components/RulesSection';
import SwissBracket from './components/Bracket';
import Footer from './components/Footer';
import teamData from './components/teamData'; // 
import Leaderboard from './components/Leaderboard'; 


function App() {

  const [results, ] = useState(teamData); 
  return (
    <div className="flex flex-col min-h-screen bg-image text-starlight-white">
      <Header />
      <main className="flex-grow container mx-auto p-4 tet">
        
        
        <SwissBracket results={results} />
    <style>
  .p2b-swiss-flow {
    --panel: rgba(17, 23, 39, 0.88);
    --panel-border: rgba(180, 215, 255, 0.6);
    --text: #f5f7fb;
    --muted: #b8c2d1;

    --green: #23e04f;
    --green-bg: rgba(10, 90, 35, 0.34);

    --red: #ff4545;
    --red-bg: rgba(105, 15, 20, 0.36);

    --neutral: #f3f3f3;
    --neutral-bg: rgba(110, 115, 125, 0.30);

    width: 100%;
    box-sizing: border-box;
    color: var(--text);
    font-family: Georgia, "Times New Roman", serif;
  }

  .p2b-swiss-flow *,
  .p2b-swiss-flow *::before,
  .p2b-swiss-flow *::after {
    box-sizing: border-box;
  }

  .p2b-flow-grid {
    display: grid;
    grid-template-columns:
      minmax(180px, 0.85fr)
      minmax(230px, 1.2fr)
      minmax(180px, 0.85fr)
      minmax(230px, 1.2fr)
      minmax(180px, 0.85fr);
    gap: 22px;
    align-items: stretch;
    width: 100%;
  }

  .p2b-column {
    position: relative;
    min-width: 0;
    padding: 18px 14px;
    border: 1px solid var(--panel-border);
    border-radius: 7px;
    background:
      linear-gradient(
        180deg,
        rgba(23, 34, 59, 0.92),
        rgba(10, 15, 28, 0.88)
      );
    box-shadow:
      0 12px 28px rgba(0, 0, 0, 0.35),
      inset 0 0 28px rgba(75, 130, 210, 0.07);
  }

  .p2b-column:not(:last-child)::after {
    content: "➜";
    position: absolute;
    right: -25px;
    top: 49%;
    transform: translateY(-50%);
    z-index: 5;
    color: #f5e7bb;
    font-size: 30px;
    text-shadow: 0 0 10px rgba(255, 225, 160, 0.45);
  }

  .p2b-title {
    margin: 0 0 18px;
    padding-bottom: 13px;
    text-align: center;
    border-bottom: 1px solid rgba(190, 220, 255, 0.45);
    font-size: clamp(22px, 2vw, 34px);
    line-height: 1.05;
    font-weight: 700;
  }

  /* PAIRINGS */

  .p2b-pairings {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .p2b-match {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    min-height: 74px;
    padding: 13px 10px;
    border: 1px solid rgba(165, 207, 245, 0.65);
    background: rgba(4, 14, 28, 0.67);
    box-shadow: inset 0 0 18px rgba(62, 120, 180, 0.07);
  }

  .p2b-team-code {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: clamp(24px, 2vw, 37px);
  }

  .p2b-score {
    padding: 0 9px;
    white-space: nowrap;
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(17px, 1.3vw, 23px);
    font-weight: 800;
    color: #ffffff;
  }

  .p2b-score .winner {
    color: var(--green);
  }

  .p2b-score .loser {
    color: var(--red);
  }

  .p2b-score .draw {
    color: var(--neutral);
  }

  .p2b-vs {
    color: #fff;
    font-weight: 700;
  }

  /* STANDINGS */

  .p2b-standings {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .p2b-cluster {
    overflow: hidden;
    border: 2px solid;
    border-radius: 9px;
  }

  .p2b-cluster.winning {
    border-color: var(--green);
    background: var(--green-bg);
  }

  .p2b-cluster.neutral {
    border-color: rgba(245, 245, 245, 0.9);
    background: var(--neutral-bg);
  }

  .p2b-cluster.losing {
    border-color: var(--red);
    background: var(--red-bg);
  }

  .p2b-points {
    padding: 6px 8px;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.28);
    font-size: clamp(22px, 1.7vw, 31px);
    font-weight: 700;
  }

  .winning .p2b-points {
    color: var(--green);
  }

  .neutral .p2b-points {
    color: var(--neutral);
  }

  .losing .p2b-points {
    color: var(--red);
  }

  .p2b-standing-team {
    display: grid;
    grid-template-columns: 34px 1fr;
    gap: 7px;
    align-items: center;
    padding: 7px 10px;
    font-size: clamp(14px, 1vw, 18px);
    line-height: 1.15;
  }

  .p2b-rank {
    text-align: right;
    font-weight: 700;
  }

  .p2b-name {
    min-width: 0;
  }

  @media (max-width: 1150px) {
    .p2b-flow-grid {
      overflow-x: auto;
      grid-template-columns:
        220px 300px
        220px 300px
        220px;
      padding-bottom: 12px;
    }
  }

  @media (max-width: 700px) {
    .p2b-flow-grid {
      display: flex;
      flex-direction: column;
      overflow: visible;
    }

    .p2b-column:not(:last-child)::after {
      content: "▼";
      position: static;
      display: block;
      transform: none;
      margin: 18px auto -48px;
      text-align: center;
    }
  }
</style>

<section class="p2b-swiss-flow">
  <div class="p2b-flow-grid">

    <!-- ROUND 1 PAIRINGS -->
    <div class="p2b-column">
      <h2 class="p2b-title">
        Round 1<br>
        Pairings
      </h2>

      <div class="p2b-pairings">

        <div class="p2b-match">
          <div class="p2b-team-code">3F</div>

          <div class="p2b-score">
            <span class="loser">0</span>
            <span class="p2b-vs">:</span>
            <span class="winner">2</span>
          </div>

          <div class="p2b-team-code">DD</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">FC</div>

          <div class="p2b-score">
            <span class="loser">1</span>
            <span class="p2b-vs">:</span>
            <span class="winner">2</span>
          </div>

          <div class="p2b-team-code">MK</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">NE</div>

          <div class="p2b-score">
            <span class="draw">0</span>
            <span class="p2b-vs">:</span>
            <span class="draw">0</span>
          </div>

          <div class="p2b-team-code">FR</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">DA</div>

          <div class="p2b-score">
            <span class="winner">2</span>
            <span class="p2b-vs">:</span>
            <span class="loser">0</span>
          </div>

          <div class="p2b-team-code">SS</div>
        </div>

      </div>
    </div>


    <!-- ROUND 1 RESULTS -->
    <div class="p2b-column">
      <h2 class="p2b-title">
        Round 1<br>
        Results &amp; Standings
      </h2>

      <div class="p2b-standings">

        <div class="p2b-cluster winning">
          <div class="p2b-points">3 Points</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">1.</span>
            <span class="p2b-name">Deadly Alliance</span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">1.</span>
            <span class="p2b-name">Dad FPS &amp; The Dial-Up kid</span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">1.</span>
            <span class="p2b-name">Missile knows where it isnt</span>
          </div>
        </div>

        <div class="p2b-cluster neutral">
          <div class="p2b-points">1 Point</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">4.</span>
            <span class="p2b-name">NauseousEmoji</span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">4.</span>
            <span class="p2b-name">Fixed or Random</span>
          </div>
        </div>

        <div class="p2b-cluster losing">
          <div class="p2b-points">0 Points</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">6.</span>
            <span class="p2b-name">Shield and Spear</span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">6.</span>
            <span class="p2b-name">ThirdFeather</span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">6.</span>
            <span class="p2b-name">Fleet CMD</span>
          </div>
        </div>

      </div>
    </div>


    <!-- ROUND 2 PAIRINGS -->
    <div class="p2b-column">
      <h2 class="p2b-title">
        Round 2<br>
        Pairings
      </h2>

      <div class="p2b-pairings">

        <div class="p2b-match">
          <div class="p2b-team-code">DA</div>

          <div class="p2b-score">
            <span class="loser">0</span>
            <span class="p2b-vs">:</span>
            <span class="winner">2</span>
          </div>

          <div class="p2b-team-code">DD</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">SS</div>

          <div class="p2b-score">
            <span class="winner">2</span>
            <span class="p2b-vs">:</span>
            <span class="loser">0</span>
          </div>

          <div class="p2b-team-code">FC</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">3F</div>

          <div class="p2b-score">
            <span class="loser">0</span>
            <span class="p2b-vs">:</span>
            <span class="winner">2</span>
          </div>

          <div class="p2b-team-code">FR</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">MK</div>

          <div class="p2b-score">
            <span class="winner">2</span>
            <span class="p2b-vs">:</span>
            <span class="loser">0</span>
          </div>

          <div class="p2b-team-code">NE</div>
        </div>

      </div>
    </div>


    <!-- ROUND 2 RESULTS -->
    <div class="p2b-column">
      <h2 class="p2b-title">
        Round 2<br>
        Results &amp; Standings
      </h2>

      <div class="p2b-standings">

        <div class="p2b-cluster winning">
          <div class="p2b-points">6 Points</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">1.</span>
            <span class="p2b-name">
              Dad FPS &amp; The Dial-Up kid
            </span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">1.</span>
            <span class="p2b-name">
              Missile knows where it isnt
            </span>
          </div>
        </div>

        <div class="p2b-cluster winning">
          <div class="p2b-points">4 Points</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">3.</span>
            <span class="p2b-name">Fixed or Random</span>
          </div>
        </div>

        <div class="p2b-cluster neutral">
          <div class="p2b-points">3 Points</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">4.</span>
            <span class="p2b-name">Deadly Alliance</span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">4.</span>
            <span class="p2b-name">Shield and Spear</span>
          </div>
        </div>

        <div class="p2b-cluster losing">
          <div class="p2b-points">1 Point</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">6.</span>
            <span class="p2b-name">NauseousEmoji</span>
          </div>
        </div>

        <div class="p2b-cluster losing">
          <div class="p2b-points">0 Points</div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">7.</span>
            <span class="p2b-name">Fleet CMD</span>
          </div>

          <div class="p2b-standing-team">
            <span class="p2b-rank">7.</span>
            <span class="p2b-name">ThirdFeather</span>
          </div>
        </div>

      </div>
    </div>


    <!-- ROUND 3 PAIRINGS -->
    <div class="p2b-column">
      <h2 class="p2b-title">
        Round 3<br>
        Pairings
      </h2>

      <div class="p2b-pairings">

        <div class="p2b-match">
          <div class="p2b-team-code">FC</div>
          <div class="p2b-score">vs</div>
          <div class="p2b-team-code">3F</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">DD</div>
          <div class="p2b-score">vs</div>
          <div class="p2b-team-code">MK</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">FR</div>
          <div class="p2b-score">vs</div>
          <div class="p2b-team-code">DA</div>
        </div>

        <div class="p2b-match">
          <div class="p2b-team-code">SS</div>
          <div class="p2b-score">vs</div>
          <div class="p2b-team-code">NE</div>
        </div>

      </div>
    </div>

  </div>
</section>
        <div className="Leaderboard"> <Leaderboard /> </div>
        <RulesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
