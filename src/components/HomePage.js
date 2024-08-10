import React from "react";
import "./HomePage.css";
import homeImg from "../images/home-img.webp";

function HomePage() {
  return (
    <>
      <div className="home">
        <h2>Welcome to the Trello Clone</h2>
        <p>
          This is a simple Trello clone app where you can manage your tasks.
        </p>
      </div>
      <div className="landing-section">
        <div className="landing-content">
          <h1>Trello brings all your tasks, teammates, and tools together</h1>
          <p>Keep everything in the same place—even if your team isn’t.</p>
          <div className="input-group">
            <input type="text" placeholder="Task" />
            <button>Create</button>
          </div>
          <a href="www.youtube.com" className="watch-video">
            Watch video
          </a>
        </div>
        <div className="image-overlay">
          <img src={homeImg} alt="Trello Overview" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
