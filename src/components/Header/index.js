import React from "react";
import NavigationList from "./NavigationList";
import NavigationListItem from "./NavigationList/NavigationListItem";
import './index.css';

const Header = () => {
    return (
        <div className={'Header'}>
            <h1>Tour of Heroes</h1>
            <NavigationList className={'Header-navigationList'}>
                <NavigationListItem name={'Dashboard'} path={'/dashboard'}/>
                <NavigationListItem name={'Heroes'} path={'/heroes'}/>
            </NavigationList>
        </div>
    );
};

export default Header;