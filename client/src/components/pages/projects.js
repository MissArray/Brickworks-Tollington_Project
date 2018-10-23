import React from 'react';

import BikeImg from '../../../public/images/bike.jpg';


const Projects = () => 
// return(    
    <div className='wrapper'>    
    <h1 data-testid="projects-page">Projects</h1>
    <div id='sidebar'></div>
    <main>     
        <h2>Bike Workshops</h2>        
        <p className='container-M'>Brickworks Social Action Hub is making a difference to the lives of local young people by helping them learn new skills and build relationships with local police through bicycle maintenance sessions.
        <br/>
        <br/>
        Local young people aged 12-16 years old are encouraged and supported to come to Brickworks for six sessions and during the two hours that they are with us they learn how to repair punctures, replace broken cables and align gears and brake pads. The bicycles are donated by the local police and the young people get to keep the bike on successful completion of the course.
        </p>
        <div className='img-container'>
        <img className='content-image' src={BikeImg} alt='bike photo'></img>
        </div>
    </main>
    
    </div>
    // )

export {Projects};