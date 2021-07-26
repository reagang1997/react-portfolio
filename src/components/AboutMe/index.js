import React from 'react';
import './style.css';
import gradPhoto from './gradphoto.jpg'
import { Button } from 'react-bootstrap';

function AboutMe() {

    return (
        <div>
            <div className='about-container box'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={gradPhoto} className='image'></img>
                    </div>
                    <div className='col-md-9'>
                        <div className='bio'>
                            <p >
                                I graduated from Texas State University with a bachelors degree in Computer Science in December of 2020. I currently have experience
                                with HTML, CSS, Javascript, Python, C++, C, and Java. I love the challange of programming. There are many different ways to go about
                                solving a problem. I interned for Trustantial in the summer of 2018 doing data migration in Visual Studio. The main aspect of that internship
                                was migrating data from one Customer Relationship Management tool (like Sales Force) into a Microsoft Dynamics CRM environment.
                        </p>
                            <p >
                                Outside of programming, I have roughly 7 years experience in the service industry. From my Sophomore year in High School through my Senior year,
                                I worked at Sonic Drive-in doing everything from operating the drive thru window, making drinks and shakes at the time of order, and also cooking the food.
                                After my Senior year of High School, I worked at Cracker Barrel as a server for half a year. Then, I started to work for Favor as a delivery driver, interacting
                                with customers, placing orders, and delivering the order. After about a year and half of being a delivery driver, I started as a Favor Mentor. As a Mentor,
                                I would train the new delivery drivers on how to interact with the Favor Runner app, place orders, and deliver the items quickly. After training the new Drivers,
                                I would be availible to them 24/7 for any questions they might have while delivering a Favor. After working at Favor, I went back to serving tables at Chili's until
                                my son was born in September of 2019.
                        </p>
                        <p>
                            You can reach me at rbgrunwald1997@gmail.com.
                        </p>
                        </div>
                    </div>
                </div>
                <Button className='mybtn' id='linked-in' href='https://www.linkedin.com/in/reagan-grunwald-431694201/' target='blank'>LinkedIn</Button>
                <br />
                <Button className='mybtn' id='git' variant='dark' href='https://github.com/reagang1997' target='blank' >GitHub</Button>
            </div>

        </div>
    )
}

export default AboutMe;