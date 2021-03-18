import React from 'react';
import './style.css'


function Project({name, img1, img2, img3, repo, deploy}){
    return(
    <div className='proj-container'>
        <div class="row header">
            <div class="col-xl-4">
                <h2>{name}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <img id="myImg1" src={img1} alt="placehold"/>
            </div>
            <div class="col-xl-6">
                <img id="myImg2" src={img2} alt="placehold"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <img id="myImg3" src={img3} alt="placehold"/>
            </div>
            <div class="col-xl-6">
                <h2 id='repo'>GitHub Repo: </h2>
                <p><a href={repo} target="_blank">{repo}</a></p>

                <h2 id='deploy'>Deployed Site: </h2>
                <p><a href={deploy}target="_blank">{deploy}</a></p>
                
            </div>
        </div>
    </div>
    )
}

export default Project;