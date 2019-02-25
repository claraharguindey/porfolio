import React, { Component } from 'react';
import './About.scss';

class About extends Component {
    render() { 
        return (
            <p className="about__text">Mi interés por la <span className="special__word">tecnología</span> y el <span className="special__word">arte</span> me ha llevado a trabajar durante
            tres años desarrollando proyectos de <span className="special__word">mediación cultural</span> basados en
            estrategias digitales y de <span className="special__word">gamificación</span>.
            Trabajar con equipos multidisciplinares, formados por programadores,
            artistas y educadores, ha mejorado mi asertividad y creatividad en la
            búsqueda de soluciones, procurando la cohesión de intereses
            individuales para lograr objetivos comunes.
            Tras formarme en Adalab, he descubierto que programar me resulta
            apasionante. Ahora busco formar parte de un proyecto con el que
            comprometerme y seguir creciendo como desarrolladora.</p>
        );
    }
}
 
export default About;