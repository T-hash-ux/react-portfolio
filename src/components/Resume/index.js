import React from 'react';
import cv from '../../images/T_Miller_Resume.png';

function Resume() {
    return (
        <div className="flex-container">
            <div className="flex-row">
                <a href={cv} target="blank">Click for Resume</a>
            </div>
        </div>
    );
}

export default Resume;