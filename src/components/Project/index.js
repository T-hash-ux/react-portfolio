// The overall purpose of this code is to define a React component called Project that represents a single project item in a portfolio or project showcase.
import React from 'react';
import website from '../../images/website.png';

function Project({ project, i }) {

    return (
        <div className="flex-container">
            <div className="flex-row">
                <h3>{project.name}</h3>
            </div>
            <div className="flex-row">
                <p>{project.description}</p>
            </div>
            <div className="flex-row">
                <img src={require(`../../images/app-${i+1}.png`)} alt="Screenshot of application"></img>

            </div>
            <div className="flex-row">
                <p>Visit application:</p>
                <a href={project.link} target="blank">
                    {<img src={website} alt="website goto"></img>}
                </a>
            </div>
        </div>
    );
}

export default Project;