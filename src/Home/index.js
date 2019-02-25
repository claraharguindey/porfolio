import React, { Component } from 'react';
import './Home.scss';
class Home extends Component {

  render() {
    return (
      <div className="main__home--content">
      <span className="bar"></span>
        <img className="home__content--img" alt="girl" src="https://media.giphy.com/media/9Dm6Dc0GzGFirfauqs/giphy.gif"></img>
      </div>
);
  }
}

export default Home;