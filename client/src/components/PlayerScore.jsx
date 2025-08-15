export default function PlayerScore({
  username,
  score,
  power
}) {
  const points = power === 2 ? 'border-4 border-dashed border-green-600' : power === 3 ? 'border-4 border-amber-600' : 'border-none';

  return (
    <li className="flex items-center py-2 gap-2">
      <p className={`score-style ${points}`}>
        {score}
      </p>

      <p className="text-amber-800 truncate">
        {username}
      </p>
    </li>
  );
}
