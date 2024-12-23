import React from 'react';
import './Dice.css';

const Dice = ({ pos }) => {
  const images = [
    "/variants/one.png",
    "/variants/two.png",
    "/variants/three.png",
    "/variants/four.png",
    "/variants/five.png",
    "/variants/six.png",
  ];

  return (
    <div>
      <img
        className="dice"
        alt="rolling dice"
        src={images[pos]}
      />
    </div>
  );
};

export default Dice;
