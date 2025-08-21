import { useContext } from 'react';

import { GameContext } from '../components/contexts/GameContext.js';

export default function useGameContext() {
  const ctxData = useContext(GameContext);

  return ctxData;
}
