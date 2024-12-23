import { useState } from "react";
import './App.css'
import Dice from './Dice/Dice';

function App() {
  const [pos, setPos] = useState(null);

  return (
    <div className="app">
      {pos >= 0 && <Dice pos={pos} />}
      <button
        className="app__button"
        onClick={() => setPos(Math.floor(Math.random() * 6))}
      >
        A roll of the dice
      </button>
    </div>
  );
}

export default App;
