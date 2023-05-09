import React from 'react';
import Contact from '../Contact';
import About from '../About';
import Work from '../Work';
import Resume from '../Resume';


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