import GameProvider from './providers/GameProvider.jsx';

import Game from './Game.jsx';
import Form from './Form.jsx';

export default function GameView() {
  return (
    <GameProvider>
      <section className="view-wrapper gap-20">
        <Game />

        <Form />
      </section>
    </GameProvider>
  );
}
