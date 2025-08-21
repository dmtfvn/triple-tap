export default function PlayerScore({
  username,
  score,
  power
}) {
  const border = power === 2 ? 'border-4 border-dashed border-violet-500' : power === 3 ? 'border-4 border-amber-600' : 'border-none';

  return (
    <li className="flex items-center py-2 gap-2">
      <p className={`score-style ${border}`}>
        {score}
      </p>

      <p className="text-amber-800 truncate">
        {username}
      </p>
    </li>
  );
}
