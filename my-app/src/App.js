import React, { useState } from 'react';
import Display from './Components/Display'
import Dashboard from './Components/Dashboard'
import './App.css';
import { findAllInRenderedTree } from 'react-dom/test-utils';

function App() {

  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);
  const [foulCount, setFoulCount] = useState(0);
  const [outCount, setOutCount] = useState(0);
  const [hitCount, setHitCount] = useState(0);
  
  const newBatter = () => {
    alert("NEW BATTER")
    setStrikeCount(0);
    setBallCount(0);
    setFoulCount(0);
  };

  const out = () => {
    setOutCount(outCount + 1);
    newBatter();
    if(outCount === 2) {
      alert("3_OUTS! SWITCH TEAMS")
      setOutCount(0);
    }
    return out;
  };

  const strike = () => {
      setStrikeCount(strikeCount + 1);
  if (strikeCount === 2) {
      alert("THREE STRIKES! YOU'RE OUT!")
      setOutCount(outCount + 1);
      newBatter();
    };
    if(strikeCount === 2 && outCount === 2) {
      alert("3_OUTS! SWITCH TEAMS")
      setOutCount(0);
    }
    return strike;
  };

  const ball = () => {
      setBallCount(ballCount + 1);
  if (ballCount === 3) {
      alert("BATTER TAKE A BASE!")
      newBatter();
    }
  return ball;
  };

  const foul = () => {
    setFoulCount(foulCount + 1);
    if(strikeCount < 2) {
      setStrikeCount(strikeCount + 1);
    } else { 
      alert("FOUL BALL!")
      setStrikeCount(strikeCount);
    }
    return foul;
  };

  const hit = () => {
    setHitCount(hitCount + 1);
    newBatter();
    return hit
  };

  const reset = () => {
    setOutCount(0)
    setBallCount(0)
    setStrikeCount(0)
    setFoulCount(0)
  };

  return (
    <div className="App">
      <Display 
        ballCount = {ballCount}
        strikeCount = {strikeCount}
        outCount = {outCount}
        />
      <Dashboard 
        strike = {strike}
        ball = {ball}
        foul = {foul}
        hit = {hit}
        out = {out}
        reset = {reset}
        />
    </div>
  );
}

export default App;
