import React, { useState } from 'react';
import Project from '../Project';

function Work() {

    const [projects] = useState([
        {
            name: 'Nice Logo: github.com/T-hash-ux/Nice-Logo-SVG',
            description: 'Backend Project',
            link: 'https://drive.google.com/file/d/1Vhv_bbksxylQf7klKX7rZps4p_knrzpx/view',
        },
        {
            name: 'Note Taker: github.com/T-hash-ux/take-notes-11',
            description: 'Front End Development Project',
            link: ' https://frozen-caverns-39406.herokuapp.com/'
        },
        {
            name: 'Employee Tracker: github.com/T-hash-ux/track-my-employees',
            description: 'Backend Project using (MySQL)',
            link: 'https://drive.google.com/file/d/1o5347uKZCxG9SfwFKwGAFWZVMDyiTnhx/view'
        },
        {
            name: 'Work Day Scheduler: github.com/T-hash-ux/Worker-Scheduler-App',
            description: 'Frontend Project',
            link: 'http://t-hash-ux.github.io/Worker-Scheduler-App/',
        },
    ])

    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project, i) => (
                    <Project
                        project={project}
                        i={i}

                    />
                ))}
            </div>
        </div>
    );
}
 export default Work;