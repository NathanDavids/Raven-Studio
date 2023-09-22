import React from 'react'
import '../home/home.scss'
import '../navbar/navbar'

function Home() {
  return (
    <>
      <section id='home'>
        <div id='overlay'></div>
        <div id='homeContainer'>
          <div id='textContainer'>
            <h3 id='slogan'>UNLEASH A NEW <span id='sloganDiff'> DIMENSION </span> OF ART </h3>
            <br /><br />
            <button id='bookingBtn'> Book Appointment </button>
          </div>
        </div> 
      </section>
    </>
  )
}

export default Home