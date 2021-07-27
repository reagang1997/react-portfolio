import React from 'react';
import resume from './resumeimg.PNG';

const Resume = () => {

    return (
        <div style={{width: 'fit-content', margin: 'auto', marginTop: '10px'}}>
            <img src={resume} style={{ height: '50vw' }}></img>
        </div>
    )
}

export default Resume;