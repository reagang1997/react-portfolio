import React from 'react';
import {Row, Col} from 'react-bootstrap';
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
    const p1Dis = 'INeedADrink allows a user to find the perfect time (based on current weather) to go out and view local breweries.';
    const p1Tools = 'Zurb, Slick Slider, LocalStorage';
    const p1Role = 'Javascript Lead, API intergration';
    const p2Dis = 'The weather dashboard allows for a user to search for any citys 5 day weather forecast. It also saves all searched cities in localstorage for easy access.';
    const p2Tools = 'Javascript, Bootstrap, OpenWeatherAPI, LocalStorage';
    const p2Role = 'Javascript';
    const p3Dis = 'Menu MaQ’R allows users to create a menu QR code for their restaurant to minimize physical contact with traditional menus';
    const p3Tools = 'SQL Database';
    const p3Role = 'Database construction, Javascript Lead';
    return (
        <div className='port-container box'>
            <Row>
                <Col md={12}>
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Project
                img1={p11}
                img2={p12}
                img3={p13}
                dis={p1Dis}
                tools={p1Tools}
                role={p1Role}
                name='INeedADrink'
                repo='https://github.com/reagang1997/INeedADrink'
                deploy='https://reagang1997.github.io/INeedADrink/'
            />
            <Project
                img1={p21}
                img2={p22}
                img3={p23}
                dis={p2Dis}
                tools={p2Tools}
                role={p2Role}
                name='Weather Dashboard'
                repo='https://github.com/reagang1997/weather-dashboard'
                deploy='https://reagang1997.github.io/weather-dashboard/'
            />
            <Project
                img1={p31}
                img2={p32}
                img3={p33}
                dis={p3Dis}
                tools={p3Tools}
                role={p3Role}
                name="Menu MaQ'R"
                repo='https://github.com/tafseer-khan/UTA_BootCamp_Project_2'
                deploy='https://menumaqr.herokuapp.com/index.html'
            />
        </div>
    )
}

export default Portfolio;