import React, { useState } from "react";
import "./App.css";

export default function App() {
  // Initialize theme state (defaulting to dark)
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const btn = {
    padding: "12px 28px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "0.2s ease",
    background: "#5bbbda",
    color: "#043c4e",
  };
  return (
    // Dynamically apply 'dark' or 'light' class
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="react-logo">⚛</div>
          <span className="version">v19.2</span>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search" />
            <span className="kbd">Ctrl K</span>
          </div>
        </div>

        <div className="nav-right">
          <a href="#">Learn</a>
          <a href="#">Reference</a>
          <a href="#">Community</a>
          <a href="#">Blog</a>
          {/* Toggle Button */}
          <span className="icon theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "☀️"}
          </span>

          <span className="icon">🌐</span>
          {/* <span className="icon">🐙</span> */}
          {/* <img src="public./github1.png" alt="" srcset="" /> */}
          <img className="icon" src="github1.png" alt="" srcset="" />
        </div>
      </nav>

      {/* HERO */}
      <main className="hero">
        <div className="hero-container">
          <div className="hero-logo">⚛</div>

          <h1>React</h1>
          <p>The library for web and native user interfaces</p>
          <div className="buttons">
            <button style={btn} className=" primary">
              Learn React
            </button>
            <button style={btn} className=" outline">
              API Reference
            </button>
          </div>
        </div>
      </main>

      {/*------------------------------------------------------- second section start */}

      <div className="second-section">
        <h1>
          Create user interfaces <br /> from components
        </h1>

        <p>
          React lets you build user interfaces out of individual pieces called
          components. <br /> Create your own React components like Thumbnail,
          LikeButton, and Video. <br /> Then combine them into entire screens,
          pages, and apps.
        </p>
      </div>

      {/*------------------------------------------------------- second section end*/}

      {/*------------------------------------------------------- third section start */}

      {/* <div className="empty"></div> */}

      {/* 
export default function Section3({ video }) {

    <section className="section3">
      <div className="video-card">
      
        <div className="thumbnail">
          <div className="play-btn">▶</div>
        </div>


        <div className="video-content">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-desc">{video.description}</p>
        </div>


        <div className="like-icon">♡</div>
      </div>
    </section>

}

 */}

      {/*------------------------------------------------------- third section end*/}

      {/*------------------------------------------------------- fifth section start */}

      <div className="second-section fifth-section">
        <h1>
          Write components <br /> with code and markup
        </h1>

        <p>
          React components are JavaScript functions. Want to show some content{" "}
          <br /> conditionally? Use an if statement. Displaying a list? Try
          array map(). Learning <br /> React is learning programming.
        </p>
      </div>

      {/*------------------------------------------------------- fifth section end*/}

      {/*------------------------------------------------------- seventeen section start */}

      <div className="footer">
        <div className="footer-1">
          <h1>Meta Open Source</h1>
          <p>Copyright © Meta Platforms, Inc <br /> uwu?</p>
        </div>
        <div className="footer-2">
          <h1>Learn React</h1>
          <p>Quick Start</p>
          <p>Installation</p>
          <p>Describing The UI</p>
          <p>Adding Intrectivity</p>
          <p>Managing State</p>
          <p></p>
        </div>
        <div className="footer-3">
          <h1>Learn React</h1>
          <p>Quick Start</p>
          <p>Installation</p>
        </div>
        <div className="footer-4">
          <h1>Learn React</h1>
          <p>Quick Start</p>
          <p>Installation</p>
          <p>Describing The UI</p>
          <p>Adding Intrectivity</p>
        </div>
        <div className="footer-5">
          <h1>Learn React</h1>
          <p>Quick Start</p>
          <p>Installation</p>
          <p>Describing The UI</p>
          <p>Adding Intrectivity</p>
        </div>
      </div>

      {/*------------------------------------------------------- seventeen section end*/}
    </div>
  );
}
