import { useRef } from "react";
import "./about.scss";
import CTA from './CTA';

export default function About(){
  const textRef = useRef();
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="./assets/me.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello World !!
        </p>
        <p className="a-desc">
        I am looking for an innovative and challenging environment where I can enhance my 
        skill set and show up the best of mine through teamwork a sense of responsibility and 
        an attitude to learn. Staying in Patna, Bihar, I am interested in problem 
        solving and learning new stuff. I would like to learn more on development of new things 
        weather in app or web.I am a M.C.A student wanting to increase my knowledge on computer 
        science as well.
        </p>
        <CTA/>
        <a href="#contact"></a>
      </div>
    </div>
  );
};
