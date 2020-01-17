import React from 'react';

const Dashboard = (props) => {
    
        return(
        <div>
            <button onClick={props.strike} className="strike" > Add Strike </button>
            <button onClick={props.ball} className="strike" > Add Ball </button>
            <button onClick={props.foul} className="foul" > Add Foul </button>
            <button onClick={props.hit} className="hit" > Add Hit </button>
            <button onClick={props.out} className="hit" > Add Out </button>
            <button onClick={props.reset} className="reset" > Reset All</button>
        </div>
    );
};

export default Dashboard;