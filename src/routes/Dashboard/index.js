import React from 'react';
import TopHeroes from "./TopHeroes";
import HeroSearch from "./HeroSearch";

const Dashboard = ({}) => {
    return (
        <div className={'DashboardPage'}>
            <TopHeroes/>
            <HeroSearch/>
        </div>
    );
};

export default Dashboard;