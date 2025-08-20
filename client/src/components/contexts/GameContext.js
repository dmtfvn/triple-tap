import { createContext } from 'react';

export const GameContext = createContext({
  score: 0,
  setScore: () => { },
  streak: [],
  setStreak: () => { },
  formState: {
    username: '',
    score: ''
  },
  setFormState: () => { },
  error: '',
  setError: () => { },
  gameHandler: () => { }
});
