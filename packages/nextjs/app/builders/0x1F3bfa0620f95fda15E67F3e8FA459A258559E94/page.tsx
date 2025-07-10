"use client";

import { useState, useEffect } from "react";

export default function PersonalWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Save theme preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <style jsx>{`
        :root {
          --bg-color: #fff;
          --text-color: #000;
          --border-color: #0f0a0a;
          --link-color: #007bff;
          --quote-bg-color: #f9f9f9;
          --quote-border-color: #ccc;
          --toggle-bg: #d1c478;
        }

        .dark-mode {
          --bg-color: #212121;
          --text-color: #fff;
          --border-color: #444;
          --link-color: #1E90FF;
          --quote-bg-color: #1e1e1e;
          --quote-border-color: #444;
          --toggle-bg: #7a5fa8;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: var(--bg-color);
          color: var(--text-color);
          margin: 0;
          padding: 0;
          transition: background-color 0.3s, color 0.3s;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 700px;
          margin: 20px auto;
          padding: 0 20px;
          position: relative;
          background-color: var(--bg-color);
          color: var(--text-color);
          min-height: 100vh;
        }

        h1 {
          text-align: center;
          margin-top: 30px;
          position: relative;
        }

        .profile-picture img {
          width: 150px;
          border-radius: 50%;
        }

        .contact-info {
          max-width: 50%;
        }

        .contact-links a {
          display: block;
          color: var(--link-color);
          text-decoration: none;
          margin-bottom: 5px;
        }

        .section-title {
          margin-top: 20px;
          font-size: 1.5em;
          padding-bottom: 5px;
        }

        .two-rows {
          display: flex;
          justify-content: space-between;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        ul li {
          margin-bottom: 10px;
        }

        a {
          color: var(--link-color);
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        blockquote {
          background-color: var(--quote-bg-color);
          border-left: 5px solid var(--quote-border-color);
          padding: 10px;
          font-style: italic;
        }

        .section {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
        }

        .list {
          width: 48%;
        }

        .theme-toggle-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: absolute;
          padding-right: 20px;
          top: 0;
          right: 0;
          z-index: 10;
        }

        .theme-toggle {
          width: 50px;
          height: 25px;
          background-color: var(--toggle-bg);
          border-radius: 25px;
          position: relative;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .theme-toggle .toggle-dot {
          width: 20px;
          height: 20px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 4px;
          transform: translateY(-50%);
          transition: left 0.3s;
        }

        .theme-toggle.active .toggle-dot {
          left: calc(100% - 24px);
        }

        .theme-icon {
          font-size: 1.5em;
        }

        details summary {
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>

      <div className="container">
        <br />
        {/* Theme Toggle Button */}
        <div className="theme-toggle-wrapper">
          <span className="theme-icon">☀️</span>
          <div
            className={`theme-toggle ${isDarkMode ? 'active' : ''}`}
            onClick={toggleTheme}
          >
            <div className="toggle-dot"></div>
          </div>
          <span className="theme-icon">🌙</span>
        </div>

        {/* Skills and Interests Section */}
        <div className="two-rows section">
          <div className="profile-picture">
            <img
              src="https://avatars.githubusercontent.com/u/103013980?s=400&u=437592f523193dda813327f28a23c541ff582cf0&v=4"
              alt="Ariiellus Profile Picture"
            />
            <h2>Contact</h2>
            <div className="contact-links">
              <a href="https://x.com/Ariiellus" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="https://t.me/Ariiellus" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href="https://github.com/ariiellus" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href="https://mirror.xyz/ariiellus.eth" target="_blank" rel="noopener noreferrer">
                Mirror
              </a>
            </div>
          </div>

          <div className="list">
            <br />

            <h2 className="list">Delegate at:</h2>
            <ul>
              <li>
                <a
                  href="https://www.tally.xyz/gov/obol/delegate/ariiellus.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obol Collective
                </a>
              </li>
              <li>
                <a
                  href="https://vote.ether.fi/delegates/ariiellus.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EtherFi
                </a>
              </li>
            </ul>

            <h2 className="list">Operator at:</h2>
            <ul>
              <li>Ethereum Mainnet</li>
              <li>Gnosis Mainnet</li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="about section">
          <h2 className="section-title">About Me</h2>
          <p>
            <a
              href="https://www.facebook.com/VDsixsnowboard/videos/403370100085137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              this process we follow, this cycle we ride
            </a>
          </p>
          <blockquote>
            🧑‍💻 Hi, I'm Ariel! Passionate about Ethereum research, MEV, cryptoeconomics, and Security.
            Learning Solidity. When offline, I love chess, calisthenics, running and climb mountains. 🚀
          </blockquote>
          <p>
            <a
              href="https://lazyslowdown.com/ichigo-ichie-embracing-joy-in-transitions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              [一期一会]
            </a>
          </p>
        </div>

        {/* Interests and Hobbies Section */}
        <div className="two-rows section">
          <div className="list">
            <h2 className="section-title">Interests</h2>
            <ul>
              <li>🧠 MEV</li>
              <li>📝 Cryptoeconomics</li>
              <li>📊 DeFi Analyst</li>
              <li>🕵️‍♂️ Security</li>
              <li>🔬 Ethereum Research</li>
            </ul>
          </div>

          <div className="list">
            <h2 className="section-title">Hobbies</h2>
            <ul>
              <li>♟️ Chess</li>
              <li>🤸‍♂️ Calisthenics</li>
              <li>🏃‍♂️ Running</li>
              <li>⛰️ Mountaineering</li>
              <li>🧠 Perpetual Learning</li>
            </ul>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="what-i-do section">
          <h2 className="section-title">What I Do</h2>
          <p>
            <a href="https://x.com/Research_Kairos" target="_blank" rel="noopener noreferrer">
              <strong>Kairos Research</strong> ⌛️
            </a>
            <br />
            Co-founder, CEO, and Main Researcher. I lead my team to write amazing blogs.
          </p>
          <p>
            <a href="https://x.com/Ethereum_mexico" target="_blank" rel="noopener noreferrer">
              <strong>Ethereum Mexico</strong> 🇲🇽
            </a>
            <br />
            Co-founder, former Community Lead and Finance Manager.
          </p>
        </div>
      </div>
    </div>
  );
}
