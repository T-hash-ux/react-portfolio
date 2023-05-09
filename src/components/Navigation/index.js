// The overall purpose of this code is to define a React component called Navigation that represents the navigation menu of a web page. 
// The navigation menu typically contains a list of categories or links that allow users to navigate to different sections or pages of the website.



import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Navigation(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav>
            <ul className="flex-row">
                {categories.map(category => (
                    <li 
                    className={`mx-1 ${currentCategory.name === category.name && `navActive` 
                    
                }`}
                        key={category.name}
                    >
                        <a onClick={() => {setCurrentCategory(category)}} href={'#' + category.name}>
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;