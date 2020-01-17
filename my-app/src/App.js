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


  const strike = () => {
      setStrikeCount(strikeCount + 1);
  if (strikeCount > 2) {
      setStrikeCount(0);
      setBallCount(0);
      setOutCount(outCount +1);
    };
    return strike;
  };

  const ball = () => {
      setBallCount(ballCount + 1);
  if (ballCount > 3) {
      alert("BATTER_TAKE_A_BASE!")
      setStrikeCount(0);
      setBallCount(0);
    }
  return ball;
  };

  const foul = () => {
    setFoulCount(foulCount + 1);
    if(strikeCount < 2) {
      setStrikeCount(strikeCount + 1);
    } else { 
      alert("FOUL_BALL!")
      setStrikeCount(strikeCount);
    }
    return foul;
  }

  const hit = () => {
    setHitCount(hitCount + 1);
    setStrikeCount(0);
    setBallCount(0);
    return hit
  }

  const out = () => {
    setOutCount(outCount + 1);
    setStrikeCount(0);
    setBallCount(0);
    if(out > 2) {
      alert("3_OUTS! SWITCH TEAMS")
    }
    return out
  }

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
        />
    </div>
  );
}

export default App;
