import { useState } from 'react';

import { GameContext } from '../contexts/GameContext.js';

export default function GameProvider({
  children
}) {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState([]);

  const [formState, setFormState] = useState({
    username: '',
    score: ''
  });
  const [error, setError] = useState('');

  const gameHandler = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    setScore(randomNum);

    setStreak(prev => [...prev, randomNum]);
  }

  return (
    <GameContext.Provider value={
      {
        score,
        setScore,
        streak,
        setStreak,
        formState,
        setFormState,
        error,
        setError,
        gameHandler
      }
    }>
      {children}
    </GameContext.Provider>
  );
}
