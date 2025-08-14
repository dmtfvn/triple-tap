import useGameContext from '../hooks/useGameContext.js';
import useReset from '../hooks/useReset.js';

export default function Game() {
  const { score, streak, gameHandler } = useGameContext();
  const { resetHandler } = useReset();

  const streakCount = streak.length < 3;

  return (
    <div className="flex flex-col max-w-28 w-full rounded-2xl bg-black/10 border border-black/30 p-1 gap-1">
      <h1 className="text-center text-amber-800 font-semibold">
        Triple Tap
      </h1>

      <div className="flex flex-col w-full gap-2">
        <button
          onClick={gameHandler}
          disabled={streakCount ? false : true}
          className={`bg-orange-100 aspect-square rounded-md outline-2 -outline-offset-2 outline-amber-400 hover:outline-amber-600 ${streakCount ? 'cursor-pointer' : ' cursor-not-allowed'}`}
        >
          <p className="text-5xl">
            {score}
          </p>
        </button>

        <p className={`bg-orange-100 h-6 w-full text-center outline-2 -outline-offset-2 ${streakCount ? "outline-amber-400" : "outline-amber-600"} rounded-sm`}>
          {streak.join(', ')}
        </p>
      </div>

      <button
        onClick={resetHandler}
        className="bg-black/15 w-full rounded-full text-black/75 border border-black/30 cursor-pointer"
      >
        Reset all
      </button>
    </div>
  );
}
