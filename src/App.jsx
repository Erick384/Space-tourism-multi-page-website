import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">00 Home</a>
              </li>
              <li>
                <a href="#">01 Destination</a>
              </li>
              <li>
                <a href="#">02 Crew</a>
              </li>
              <li>
                <a href="#">03 Technology</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="body">
          <div className="left">
            <h3>So, you want to travel to</h3>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="right">
            <div className="circle">
              <h4>EXPLORE</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
