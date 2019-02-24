import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.scss';
class Home extends Component {

  render() {
    return (
    

      <div className="main__content">
      <span className="bar"></span>
        <img alt="girl" src="https://media.giphy.com/media/9Dm6Dc0GzGFirfauqs/giphy.gif"></img>
        <p>
          front-end developer
          mediación cultural cyborg
        </p>
      </div>
);
  }
}

export default Home;