import React from 'react';
import {NavLink } from 'react-router-dom';


const Home =()=>{
    return(
        <div className='container'>
            <h1>Aira 2018</h1>
            <div>
                <h2>Meet the investors, and share the idea to get the chances.</h2>
                <p>Hundreds of the investors and the business idols wiil be here, share your ideas get the team and job done.</p>
                <p>Aira2018 is largest event which care the ideas of the new enterprenurs, and Startups!!</p>
                <br/><br/>
                <h6>Hurry up Guys !! Limited Seats</h6>
                <h5>get your name Registerd</h5>
                <NavLink to='/register'>Register Detilas for the Event</NavLink><br/>
            
               
            </div>
        </div>
    )
}
export default Home;