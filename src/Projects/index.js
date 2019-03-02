import React, { Component, Fragment } from 'react';
import './Projects.scss';

class Projects extends Component {
    render() {
        const {textChanger} = this.props;
        return (
            <Fragment >
                <ul className="projects__list">
                    <li className="projects__listt--item" value="nfq">
                        <a href="http://beta.adalab.es/easley-s4-nfq/#/details" target="_blank" rel="noopener noreferrer">
                            <img className="projects__img" src="https://media.giphy.com/media/9JyRgBIh37Qr8GTIEt/giphy.gif" alt="nfq project" />
                        </a>
                    </li>

                    <li className="projects__listt--item" value="awesome">
                        <a href="https://beta.adalab.es/easley-s3-smaland/#/card-creator" target="_blank" rel="noopener noreferrer">
                            <img className="projects__img" src="https://media.giphy.com/media/3XEGiY4I01qTvGHb8h/giphy.gif" alt="awesome profile cards" />
                        </a>
                    </li>
                    <li className="projects__listt--item" value="maquetacion">
                        <a href="http://beta.adalab.es/e-s1-evaluacion-final-claraharguindey/" target="_blank" rel="noopener noreferrer">
                            <img className="projects__img" src="https://media.giphy.com/media/yycXkkgjTNIztPqv3R/giphy.gif" alt="maquetacion web" />
                        </a>
                    </li>
                    <li className="projects__listt--item" value="bot">
                        <a href="https://twitter.com/perdona91721153" target="_blank" rel="noopener noreferrer">
                            <img className="projects__img" src="https://media.giphy.com/media/1mhkfgMAOTCRtK8bJ2/giphy.gif" alt="perdoname bot" />
                        </a>
                    </li>
                    <li className="projects__listt--item" value="series">
                        <a href="http://beta.adalab.es/e-s2-evaluacion-final-claraharguindey/" target="_blank" rel="noopener noreferrer">
                            <img className="projects__img" src="https://media.giphy.com/media/1d5WAoOETFqYM157iL/giphy.gif" alt="buscador de series" />
                        </a>
                    </li>
                    <li className="projects__listt--item" value="potter">
                        <a href="http://beta.adalab.es/e-s3-evaluacion-final-claraharguindey/#/" target="_blank" rel="noopener noreferrer">
                            <img className="projects__img" src="https://media.giphy.com/media/KWRFg1Eu649UPxPVGk/giphy.gif" alt="harry potter characters" />
                        </a>
                    </li>
                    <li className="projects__listt--item" value="eyes">
                            <a href="https://claraharguindey.github.io/her-eyes/" target="_blank" rel="noopener noreferrer">
                                <img className="projects__img" src="https://media.giphy.com/media/4PY2RWvqaZhI2eLlu5/giphy.gif" alt="her eyes" />
                            </a>
                    </li>
                    <li className="projects__listt--item" value="sad" onMouseOver={textChanger}>
                            <a href="https://claraharguindey.github.io/i-m-not-really-sad-but-i-love-aesthetic-sadness/" target="_blank" rel="noopener noreferrer">
                                <img className="projects__img" src="https://media.giphy.com/media/mntbnokFbvJtSQKclG/giphy.gif" alt="sadness is a blessing" />
                            </a>
                    </li>
            </ul>
                    <h2>scroll it</h2>
            </Fragment>
                );
            }
        }
        
export default Projects;