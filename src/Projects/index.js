import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
    render() {
        return (
            <div className="projects__wrapper">
                <a href="http://beta.adalab.es/easley-s4-nfq/#/details" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/9JyRgBIh37Qr8GTIEt/giphy.gif" alt="nfq project" />
                </a>

                <a href="https://beta.adalab.es/easley-s3-smaland/#/card-creator" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/3XEGiY4I01qTvGHb8h/giphy.gif" alt="awesome profile cards" />
                </a>

                <a href="http://beta.adalab.es/e-s1-evaluacion-final-claraharguindey/" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/yycXkkgjTNIztPqv3R/giphy.gif" alt="maquetacion web" />
                </a>


                <a href="https://twitter.com/perdona91721153" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/1mhkfgMAOTCRtK8bJ2/giphy.gif" alt="perdoname bot" />
                </a>
                
                <a href="http://beta.adalab.es/e-s2-evaluacion-final-claraharguindey/" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/1d5WAoOETFqYM157iL/giphy.gif" alt="buscador de series" />
                </a>

                <a href="http://beta.adalab.es/e-s3-evaluacion-final-claraharguindey/#/" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/KWRFg1Eu649UPxPVGk/giphy.gif" alt="harry potter characters" />
                </a>

                <a href="https://claraharguindey.github.io/her-eyes/" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/4PY2RWvqaZhI2eLlu5/giphy.gif" alt="her eyes" />
                </a>
                
                <a href="https://claraharguindey.github.io/i-m-not-really-sad-but-i-love-aesthetic-sadness/" target="_blank" rel="noopener noreferrer">
                    <img className="projects__img" src="https://media.giphy.com/media/mntbnokFbvJtSQKclG/giphy.gif" alt="sadness is a blessing" />
                </a>
            </div>
        );
    }
}

export default Projects;