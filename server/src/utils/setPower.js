export default function setPower(data) {
  let power = 0;

  const score = Number(data.score);
  const streak = data.streak;

  for (const num of streak) {
    if (num === score) {
      power++;
    }
  }

  return power;
}
