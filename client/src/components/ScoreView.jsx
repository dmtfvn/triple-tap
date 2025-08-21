import { useEffect, useState } from 'react';

import PlayerScore from './PlayerScore.jsx';

import request from '../utils/request.js';
import { baseUrl } from '../utils/const.js';

export default function ScoreView() {
  const [score, setScore] = useState([]);

  const scoreHandler = async () => {
    const result = await request.get(`${baseUrl}/game`);

    setScore([...result].sort((a, b) => {
      const powerDiff = b.power - a.power;

      if (powerDiff !== 0) {
        return powerDiff;
      }

      return b.score - a.score;
    }).slice(0, 5));
  }

  useEffect(() => {
    scoreHandler();
  }, []);

  return (
    <section className="view-wrapper gap-2">
      <div className="flex-c-col">
        <p>
          &#10022;
        </p>

        <h1 className="text-2xl font-semibold">
          Leaderboard
        </h1>
      </div>

      <ul className="flex flex-col max-w-60 w-full rounded-3xl border border-black/25 divide-y divide-black/10 px-2">
        {score.length
          ?
          score.map(d => (
            <PlayerScore
              key={d.id}
              {...d}
            />
          ))
          :
          <p className="text-sm text-center text-amber-800 p-2">
            Leaderboard is empty
          </p>
        }
      </ul>
    </section>
  );
}
