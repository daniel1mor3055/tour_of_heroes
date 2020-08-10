import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import Heroes from "./routes/Heroes";
import HeroDetails from "./routes/HeroDetails";
import { heroesData } from './heroesData/data';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroes: [],
        };
    }

    componentDidMount() {
        this.setState({ heroes: heroesData.concat() });
    }

    handleDelete = (event, id) => {
        const { heroes } = this.state;
        const newHeroes = heroes.filter(hero => hero.id !== id);
        this.setState({
            heroes: newHeroes,
        });
    };

    handleAdd = (event, newHero) => {
        const { heroes } = this.state;
        const heroWithMaxId = heroes.reduce((prev, current) => (prev.id > current.id) ? prev : current);
        this.setState({
            heroes: heroes.concat({
                id: heroWithMaxId.id + 1,
                ...newHero
            })
        });
    };

    render() {
        const { heroes } = this.state;
        const routes = (
            <Switch>
                <Route path={'/dashboard'} exact render={(props) => <Dashboard {...props}
                                                                               heroes={heroes}/>}/>
                <Route path={'/heroes'} exact render={(props) => <Heroes {...props}
                                                                         heroes={heroes}
                                                                         handleDelete={this.handleDelete}
                                                                         handleAdd={this.handleAdd}/>}/>
                <Route path={'/detail'} render={(props) => <HeroDetails {...props}
                                                                        heroes={heroes}/>}/>
                <Route path={'/'} render={(props) => <Dashboard {...props}
                                                                heroes={heroes}/>}/>
            </Switch>
        );
        return (
            <div className="App">
                <Header/>
                {routes}
            </div>
        );
    }

}

export default App;
