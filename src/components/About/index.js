// The overall purpose of this code is to define a React component called About that represents the content and structure of an "About Me" section in a web application or website. 
// The component includes an image, a heading, and a paragraph that provides information about the developer.
import React from 'react';
import Headshot from '../../images/Headshot.jpg';

function About() {
    return (
        <div>
            <div>
                <img className="headshot space-between center-image" src={Headshot} alt="This is me"></img>
            
            </div>
            <div>
                <h2>
                    About Me
                </h2>
                <p>
                    My name is Tyrrance Miller and I am a passionate and driven Full Stack Development Bootcamp student with a strong enthusiasm for creating dynamic and innovative web applications. During my bootcamp experience, I immersed myself in various technologies and frameworks such as HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. I learned how to build responsive and user-friendly web applications, design intuitive user interfaces, and architect robust backend systems. 
                    Welcome to my portfolio website, where I showcase my skills, projects, and journey as a developer.
                </p>

            </div>
        </div>
    );
}

export default About;