// The overall purpose of this code is to define a React component called Content that renders different content pages based on the value of the currentCategory prop.

// The code imports the necessary dependencies: React, and four components (Contact, About, Work, Resume) from their respective files.

import React from 'react';
import Contact from '../Contact';
import About from '../About';
import Work from '../Work';
import Resume from '../Resume';

// The Content function component is defined, which takes currentCategory as a prop.

function Content({ currentCategory }) {

    const renderPage = () => {

        switch(currentCategory.name) {
        case 'Work' :
            return <Work />;
        case 'Contact' :
            return <Contact />;
        case 'Resume':
            return <Resume />;
        default:
            return <About />;                
        }
    }

    return (
        <div>
            {renderPage(currentCategory)}
        </div>
    );
}

export default Content;