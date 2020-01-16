import React, {useState, useEffect} from 'react';

const Dashboard = () => {
    

        const [ballCount, setBallCount] = useState(0);
        const [strikeCount, setStrikeCount] = useState(0);
        const [foulCount, setFoulCount] = useState(0);
        const [out, setOut] = useState(0);
        const [hit, setHit]

        if (strikeCount > 2) {
            setStrikeCount(0);
            setBallCount(0);
            setOut(out +1);
        };

        if (ballCount > 3) {
            setStrikeCount(0);
            setBallCount(0);
        };

        return(
        <div>
            <button onClick={() => setStrikeCount(strikeCount + 1)} className="strike" > Add Strike </button>
            <button onClick={() => setBallCount(ballCount + 1)} className="strike" > Add Ball </button>
            <button onClick={() => setFoulCount(foulCount + 1)} className="foul" > Add Foul </button>
            <button onClick={() => setHit()} className="hit" > Add Hit </button>
        </div>
    );
};

export default Dashboard;