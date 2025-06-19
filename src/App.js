import React from 'react';
import "./App.css"
import nft from "./asset/image-equilibrium.jpg"; 
import creator from "./asset/logo.jpeg";
import clock from "./asset/icon-clock.png";
import eth from "./asset/icon-ethereum.png";
import view from "./asset/icon-view.png";

const App = () => {
  return (
    <div className="app-container">
      <main className="card">
        <div className="card__images">
          <img src={nft} alt="Equilibrium NFT" />
          <div className="card__images-layer">
            <img src={view} alt="View Icon" />
          </div>
        </div>
        <h2 className="card__title">Equilibrium #3429</h2>
        <p className="description">Our Equilibrium collection promotes balance and calm.</p>
        <div className="card__time">
          <div className="card__time-left">
            <img src={eth} alt="ETH Icon" className="time-icon" />
            <span className="eth-value">0.041 ETH</span>
          </div>
          <div className="card__time-right">
            <img src={clock} alt="Clock Icon" className="time-icon" />
            <span className="time-left">5 days left</span>
          </div>
        </div>
        <div className="card__creator">
          <img src={creator} alt="Creator " className="creator-img" />
          <span>Creation of <span className="creator-name">Jules Wyvern</span></span>
        </div>
      </main>
    </div>
  );
};

export default App;