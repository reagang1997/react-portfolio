import React from 'react';
import './style.css';
import Project from '../Project';


import p11 from './project1imgs/p1_img1.PNG';
import p12 from './project1imgs/p1_img2.PNG';
import p13 from './project1imgs/p1_img3.PNG';

import p21 from './project2imgs/img.PNG';
import p22 from './project2imgs/img2.PNG';
import p23 from './project2imgs/img3.PNG';

import p31 from './project3imgs/img1.PNG';
import p32 from './project3imgs/img2.PNG';
import p33 from './project3imgs/img3.PNG';


function Portfolio() {
    return (
        <div className='port-container'>
            <div className="row" >
                <div className="col-md-12">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <Project
                img1={p11}
                img2={p12}
                img3={p13}
                name='INeedADrink'
                repo='https://github.com/reagang1997/INeedADrink'
                deploy='https://reagang1997.github.io/INeedADrink/'
            />
            <Project
                img1={p21}
                img2={p22}
                img3={p23}
                name='Weather Dashboard'
                repo='https://github.com/reagang1997/weather-dashboard'
                deploy='https://reagang1997.github.io/weather-dashboard/'
            />
            <Project
                img1={p31}
                img2={p32}
                img3={p33}
                name="Menu MaQ'R"
                repo='https://github.com/tafseer-khan/UTA_BootCamp_Project_2'
                deploy='https://menumaqr.herokuapp.com/index.html'
            />
        </div>
    )
}

export default Portfolio;