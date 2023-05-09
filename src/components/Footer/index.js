// The overall purpose of this code is to define a React component called Footer that represents the footer section of a web page. The footer includes information and icons for connecting with the author on GitHub and LinkedIn.

import React from 'react';
import Github from '../../images/github.png';
import LinkedIn from '../../images/linked.png';

function Footer() {

    return (
        <footer className="container">
            <div>
                <h3>Let's connect!!</h3>
                <a href="https://github.com/T-hash-ux" target="blank"><img alt="github icon" src={Github}></img></a>
                <a href="https://linkedin.com/in/tyrrancemiller" target="blank"><img alt="linkedin icon" src={LinkedIn}></img></a>

            </div>
        </footer>
    );
}

export default Footer;