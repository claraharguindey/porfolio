import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
    render() {
        return (
            <div>
                <a href="http://beta.adalab.es/easley-s4-nfq/#/details" target="_blank" rel="noopener noreferrer">
                    <img src="https://media.giphy.com/media/9JyRgBIh37Qr8GTIEt/giphy.gif" alt="nfq project" />
                </a>

                <a href="https://beta.adalab.es/easley-s3-smaland/#/card-creator" target="_blank" rel="noopener noreferrer">
                    <img src="https://media.giphy.com/media/3XEGiY4I01qTvGHb8h/giphy.gif" alt="awesome profile cards" />
                </a>

                <a href="https://twitter.com/perdona91721153" target="_blank" rel="noopener noreferrer">
                    <img src="https://media.giphy.com/media/1mhkfgMAOTCRtK8bJ2/giphy.gif" alt="perdoname bot" />
                </a>
                
            </div>
        );
    }
}

export default Projects;