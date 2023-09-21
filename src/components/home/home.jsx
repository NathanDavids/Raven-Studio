import React from 'react'
import '../home/home.scss'
import '../navbar/navbar'
import {GiBranchArrow} from 'react-icons/gi'

function Home() {
  return (
    <>
      <section id='home'>
        <div id='overlay'></div>
        <div id='homeContainer'>
          <div id='textContainer'>
          <h1 id='headline'><span id='headlineColor'> Express </span> Yourself</h1>
            <h3 id='slogan'>UNLEASH A NEW <span id='sloganDiff'> DIMENSION </span> OF ART </h3>
            <button id='bookingBtn'> Book Appointment </button>
          </div>
        </div> 
      </section>
    </>
  )
}

export default Home