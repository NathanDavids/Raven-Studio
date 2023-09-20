import React from 'react'
import '../about/about.scss'
import '../navbar/navbar'
import AboutImg from '../../assets/about.jpg'

function About() {
  return (
    <>
      <section id='about'>
      <h3 id='headline'> <span id='headlineDiff'>EXQUISITE</span> APPROACH TO CUSTOMERS </h3>
      <br /><br />
        <div id='aboutBlock'>
          <br /><br /><br /><br />
          <div id='aboutImgContainer'>
            <img src={AboutImg} id='aboutImg' />
          </div>
          <div id="aboutText">
            Raven Studio is a tattoo parlor which provides all kinds of tattooing & piercing services. Our skilled specialists will provide a free consultation and will offer a variety of bestseller tattoo designs, or you may ask for any kind of custom design. <br /><br /> Go ahead and book yourself and appointment today!
            <br /><br />
            <h3>Read More</h3>
            <br />
            <button id='aboutBtn'> - </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About