import React from 'react';
import TopHeroes from "./TopHeroes";
import HeroSearch from "./HeroSearch";

const Dashboard = ({ heroes }) => {
    return (
        <div className={'DashboardPage'}>
            <TopHeroes heroes={heroes}/>
            <HeroSearch heroes={heroes}/>
        </div>
    );
};

export default Dashboard;