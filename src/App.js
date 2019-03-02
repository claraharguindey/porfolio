import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Articles from './Articles';
import About from './About';
import Conferences from './Conferences';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "nfq": "nfq project",
      "awesome": "awesome",
      "maquetacion":"maquetacion",
      "bot":"bot",
      "series":"series",
      "potter":"potter",
      "eyes":"eyes",
      "sad":"sad"
    }
    this.textChange = this.textChanger.bind(this);
  }

  textChanger(event) {
    const value = event.target.value;
    
    
  }
  render() {
    return (
      <div className="App">

        <Header />
        <main className="main">

        <div className="main__navigation--wrapper">
        <nav className="main__navigation">
          <ul className="main__navigation--list">

            <li className="main__navigation--item">
            <Link to="/projects">proyectos</Link>
            </li>

            <li className="main__navigation--item">
            <Link to="/conferences">conferencias y talleres</Link>
            </li>

            <li className="main__navigation--item">
            <Link to="/articles">textos</Link>
            </li>

            <li className="main__navigation--item">
            <Link to="/about">about</Link>
            </li>

            <li className="main__navigation--item">
            <a href="https://www.desmusea.com/saber"  target="_blank" rel="noopener noreferrer">desmusea</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main__content--wrapper">
        <Switch>
          <Route
            exact
            path="/"
            component= {Home}
          />

          <Route
            path="/projects"
            render={() => {
              return (
                <Projects textChanger={this.textChanger} />)
            }}
          />

          <Route
            path="/conferences"
            component={Conferences}
          />
          <Route
            path="/articles"
            component={Articles}
          />

          <Route
            path="/about"
            component={About}
          />
        </Switch>
        </div>
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
