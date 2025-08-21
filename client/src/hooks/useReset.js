import useGameContext from './useGameContext.js';

export default function useReset() {
  const { setScore, setStreak, setFormState, setError } = useGameContext();

  const resetHandler = () => {
    setScore(0);
    setStreak([]);
    setFormState({
      username: '',
      score: ''
    });
    setError('');
  }

  return {
    resetHandler
  };
}
