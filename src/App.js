import React from "react";
import "./App.css";
import nftImage from "./asset/image-equilibrium.jpg";
import clock from "./asset/icon-clock.png";
import eth from "./asset/icon-ethereum.png";
import view from "./asset/icon-view.png";

const App = () => {
  return (
    <div className="app-container">
      <main className="card">
        <div className="card__images">
          <img src={nftImage} alt="Equilibrium NFT" />
          <div className="card__images-layer">
            <img src={view} alt="View Icon" />
          </div>
        </div>
        <div className="card__title"><h1>Equilibrium #3429</h1></div>
        <p id="info" className="description">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="card__time">
          <div className="card__time-left">
            <img src={eth} alt="ETH Icon" className="time-icon" />
            <span className="eth-value">0.041 ETH</span>
          </div>
          <div className="card__time-right">
            <img src={clock} alt="Clock Icon" className="time-icon" />
            <span className="time-left">3 days left</span>
          </div>
        </div>
        <div className="card__creator">
          <img
            src="https://media.licdn.com/dms/image/D5603AQHmisevs6V-Wg/profile-displayphoto-shrink_200_200/0/1711565017432?e=2147483647&v=beta&t=2gxdXF049G8KQ53xOdouFjL_DKFruEzC2XH5LmLtem4"
            alt="Creator Image"
            className="creator-img"
          />
          <p>
            <span className="creator-name">Creation of Jules Wyvern</span>
          </p>
        </div>
        <footer className="attribution">
          Challenge by{" "}
          <a
            href="https://www.crio.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crio.Do
          </a>
          . Coded by{" "}
          <a
            href="https://www.github.com/ShivamSh002"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shivam Sharma
          </a>
          .
        </footer>
      </main>
    </div>
  );
};

export default App;
