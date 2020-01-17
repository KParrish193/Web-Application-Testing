import React from 'react';
import styled from 'styled-components';

const DashboardButton = styled.button`
border: solid 1px red;
font-size: 1.4rem;
border-radius: 10px;
margin: 1%;
`

const Dashboard = (props) => {
    
        return(
        <div>
            <DashboardButton onClick={props.strike} className="strike" > Add Strike </DashboardButton>
            <DashboardButton onClick={props.ball} className="strike" > Add Ball </DashboardButton>
            <DashboardButton onClick={props.foul} className="foul" > Add Foul </DashboardButton>
            <DashboardButton onClick={props.hit} className="hit" > Add Hit </DashboardButton>
            <DashboardButton onClick={props.out} className="hit" > Add Out </DashboardButton>
            <DashboardButton onClick={props.reset} className="reset" > Reset All</DashboardButton>
        </div>
    );
};

export default Dashboard;