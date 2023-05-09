
// The overall purpose of this code is to define a React component called Header that represents the header section of a web page.
// The header typically contains the website's title or logo and can include additional content provided as children.

import React from 'react';

function Header(props) {

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Tyrrance Miller
                </a>
                {props.children}
            </h2>
        </header>
    );
}

export default Header;