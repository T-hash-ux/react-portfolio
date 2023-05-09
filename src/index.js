import React from 'react';
import ReactionDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactionDOM.render(
    <React.StrictMode>
        <App />,
    </React.StrictMode>,
    document.getElementById('root')
);



serviceWorker.unregister();