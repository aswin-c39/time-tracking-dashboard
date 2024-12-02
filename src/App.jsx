import Card from './card.jsx'
import ProfileCard from './profileCard.jsx'
import "./App.scss"
import React, {useState} from 'react'
import data from "./data.json";
import lightMode from "./assets/lightmode.png"
import darkMode from "./assets/darkmode.png"

import workLogo from './assets/work.svg';
import playLogo from './assets/play.svg';
import studyLogo from './assets/study.svg';
import exerciseLogo from './assets/exercise.svg';
import socialLogo from './assets/social.svg';
import selfCareLogo from './assets/self-care.svg';

function App() {

  const [timeframe, setTimeframe] = useState("weekly");
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
    document.body.className = isLightMode ? "dark-mode" : "light-mode";
  };

  const logoMapping = {
    Work: workLogo,
    Play: playLogo,
    Study: studyLogo,
    Exercise: exerciseLogo,
    Social: socialLogo,
    "Self Care": selfCareLogo

  };

  return (
    <>
    <div className='modes'>
      <img src={isLightMode ? darkMode : lightMode} 
            className='mode-icon'
            onClick={toggleMode}></img>
    </div>

    <div className="container">
      <div className="profile">
        <ProfileCard/>
        <div className='timeframe-card'>
          <ul className='time-filters'>
            <li
              onClick={() => setTimeframe("daily")}
              className={timeframe === "daily" ? "active" : ""}
            >
              Daily
            </li>
            <li
              onClick={() => setTimeframe("weekly")}
              className={timeframe === "weekly" ? "active" : ""}
            >
              Weekly
            </li>
            <li
              onClick={() => setTimeframe("monthly")}
              className={timeframe === "monthly" ? "active" : ""}
            >
              monthly
            </li>

          </ul>
        </div>
      </div>

      <div className='activity-grid'>
        {data.map((activity, index) => (
          <div 
            key={index}
          >
            <div key={index} className={`back-card ${activity.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <img src={logoMapping[activity.title] || ''} className='activity-logo'/>
            </div>
            <Card 
              heading={activity.title}
              time={activity.timeframes[timeframe]?.current || 0}
              timeframe={timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} 
              previous={activity.timeframes[timeframe]?.previous || 0}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App
