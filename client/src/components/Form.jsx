import request from '../utils/request.js';
import { baseUrl } from '../utils/const.js';

import useGameContext from '../hooks/useGameContext.js';
import useReset from '../hooks/useReset.js';

export default function Form() {
  const { streak, formState, setFormState, error, setError } = useGameContext();
  const { resetHandler } = useReset();

  const formHandler = (e) => {
    const { name, value } = e.target;

    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const playerDataHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      if (Object.values(data).some(d => d === '')) {
        throw new Error('All fields are required');
      }

      if (!streak.includes(Number(formState.score))) {
        setError('');

        throw new Error('Pick your highest score');
      }

      await request.post(`${baseUrl}/game`, {
        ...data,
        streak
      });

      resetHandler();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form
      onSubmit={playerDataHandler}
      className="flex flex-col max-w-60 w-full rounded-xl border border-black/30 p-1 gap-5"
    >
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        autoComplete="off"
        value={formState.username}
        onChange={formHandler}
        className="input-style"
      />

      <input
        type="number"
        name="score"
        placeholder="Enter your highscore"
        value={formState.score}
        onChange={formHandler}
        className="input-style"
      />

      {error &&
        <p className="text-sm text-center text-red-600">
          {error}
        </p>
      }

      <button className="bg-amber-500 rounded-lg text-white font-bold hover:bg-amber-600 p-2 cursor-pointer">
        Submit your score
      </button>
    </form>
  );
}
