import React from "react";
import NavigationList from "./NavigationList";
import NavigationListItem from "./NavigationList/NavigationListItem";

const Header = () => {
    return (
        <div className={'Header'}>
            <h2>Tour of Heroes</h2>
            <NavigationList>
                <NavigationListItem name={'Dashboard'} path={'/dashboard'}/>
                <NavigationListItem name={'Heroes'} path={'/heroes'}/>
            </NavigationList>
        </div>
    );
};

export default Header;