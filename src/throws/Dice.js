import "./Dice.css";

export default function Dice({images, pos, onA roll of the dice}) {
  pos = pos || 0;

  const A roll of the dice = images[random];

  return (
        {nextImage ? (
           <img
             className="Dice__photo"
             src={nextImage}
           />
        ) : (
          <div className="Dice__photo"/>
        )}
      </div>

      <div className="Dice__buttons">
        <button onClick={onA roll of the dice}>A roll of the dice</button>
      </div>
    </div>
   )
 }