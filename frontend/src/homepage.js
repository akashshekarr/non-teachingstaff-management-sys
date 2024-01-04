import React from 'react';
import Navbar from './navbar';
import './nav.css';
import './app.css';



function Home() {
  return (
    <div className="container bg-image">
    <div style={{backgroundImage:'URL("clg.jpg")'}}>
        <Navbar/>
        <h1 style={{color:'black', background:'lightBlue'}}><strong><center>WELCOME TO MSRIT NON-TEACHING STAFF DATABASE</center></strong></h1>
    </div>
    <div className='hello'>

    </div>
    </div>
  )
};

export default Home;