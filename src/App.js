import Dice from "./throws/Dice";
import {useState} from "react";

function App() {
  const [pos, setPos] = useState(0)

  return (
    <Dice
      images={[
        "/variants/Five.png",
        "/variants/Four.png",
        "/variants/One.jpg",
        "/variants/Six.png",
        "/variants/Three.png",
        "/variants/Twq.jpg",
      ]}

      pos={pos}

      onNext={() => {
        setPos(pos + 1);
      }}
    />
  );
}

export default App;
