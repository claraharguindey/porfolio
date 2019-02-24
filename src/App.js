import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Articles from './Articles';
import About from './About';
import Conferences from './Conferences';
import './App.css';

class App extends Component {
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
            <Link to="/texts">textos</Link>
            </li>

            <li className="main__navigation--item">
            <Link to="/about">about</Link>
            </li>

            <li className="main__navigation--item">
            <a href="https://desmusea.com">desmusea</a>
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
            exact
            path="/projects"
            component={Projects}
          />

          <Route
            exact
            path="/conferences"
            component={Conferences}
          />
          <Route
            exact
            path="/articles"
            component={Articles}
          />

          <Route
            exact
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
