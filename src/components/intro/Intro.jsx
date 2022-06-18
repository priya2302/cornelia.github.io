import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:20,
      strings: ["Programmer", "Designer", "Developer"],
    });
  }, []);
 
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <div className="imgc">
          <img src="assets/hey.png" alt="" />
          </div>
        </div>
      </div>
     
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shakuntala Priya</h1>
      
          <h3>
             <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}