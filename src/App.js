import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import Heroes from "./routes/Heroes";
import HeroDetails from "./routes/HeroDetails";


function App() {
    const routes = (
        <Switch>
            <Route path={'/dashboard'} exact component={Dashboard}/>
            <Route path={'/heroes'} exact component={Heroes}/>
            <Route path={'/detail'} component={HeroDetails}/>
            <Route path={'/'} component={Dashboard}/>
        </Switch>
    );
    return (
        <div className="App">
            <Header/>
            {routes}
        </div>
    );
}

export default App;
