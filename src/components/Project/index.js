import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './style.css'


function Project({name, img1, img2, img3, repo, deploy, dis, tools, role}){
    return(
    <div className='proj-container'>
        <Row className="header">
            <Col style={{width: 'fit-content', margin: '0 auto'}} md={12}>
                <h2>{name}</h2>
            </Col>
        </Row>
       
        <Row>
            <Col md={6}>
                <img id="myImg1" className='myimg' src={img1} alt="placehold"/>
            </Col>
            <Col md={6}>
                <img id="myImg2" className='myimg' src={img2} alt="placehold"/>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <img id="myImg3" className='myimg' src={img3} alt="placehold"/>
            </Col>
            <Col md={6}>
                <h2>Description: </h2>
                <p>{dis}</p>
                <h2>Tools Used:</h2>
                <p>{tools}</p>
                <h2>Role: </h2>
                <p>{role}</p>

                <h2 id='repo'>GitHub Repo: </h2>
                <p><a href={repo} target="_blank">{repo}</a></p>

                <h2 id='deploy'>Deployed Site: </h2>
                <p><a href={deploy}target="_blank">{deploy}</a></p>
                
            </Col>
        </Row>
    </div>
    )
}

export default Project;