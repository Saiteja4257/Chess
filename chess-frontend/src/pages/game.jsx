import React from 'react';
import { useNavigate} from "react-router-dom";
import '../styles/game.css';
const ChooseGameMode = () => {
    const navigate = useNavigate();
  return (

    <div className="choose-container">
      <h1 className="choose-title">♟️Choose Game Mode♟️</h1>
      <div className="button-wrapper">
        <button className="game-button"onClick={() => navigate('/chessAi')} >
          <img src="https://res.cloudinary.com/dlbc9t2ft/image/upload/f_auto,q_auto/v1744743651/aichess3_eww93a.png" alt="Play vs AI" />
          <br></br>
          <h2 className="option">Play Vs AI</h2>
        </button>
        
        <button className="game-button" onClick={() => navigate('/maingame')}>
          <img src="https://res.cloudinary.com/dlbc9t2ft/image/upload/v1744743093/f_auto,q_auto/boychess_wi36yu.png" alt="Play vs Friend" />
          <br></br>
          <h2 className='option' >Play with Friend</h2>
        </button>
      </div>
    </div>
  );
};

export default ChooseGameMode;