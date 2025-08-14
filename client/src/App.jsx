import { Routes, Route } from 'react-router';

import GameView from './components/GameView.jsx';
import ScoreView from './components/ScoreView.jsx';
import Navigation from './components/Navigation.jsx';

import './App.css';

function App() {
  return (
    <main className="flex-c-col min-h-screen px-5">
      <Routes>
        <Route path="/" element={<GameView />} />
        <Route path="/score" element={<ScoreView />} />
      </Routes>

      <Navigation />
    </main>
  )
}

export default App;
