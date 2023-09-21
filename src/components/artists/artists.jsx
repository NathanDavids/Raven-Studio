import React from 'react'
import '../artists/artists.scss'
import AboutImg from '../../assets/about.jpg'
import {BsArrowRight} from 'react-icons/bs'

function Artists() {
  return (
    <>
      <section id='artists'>
        <h3 id='artistsHeadline'> STATS WE <span id='artistsDiff'> BRAG </span> ABOUT </h3>
        <br /><br />
        <hr id='statsline1'/>
        <div id='stats'>
          <div id='stat1'>
            <h1 id='exp'>9</h1>
            <h5 id='expTag'>Years of Experience</h5>
          </div>
          <hr id='artistsSeperator1'/>
          <div id='stat2'>
          <h1 id='customers'>12K+</h1>
            <h5 id='customersTag'>Customers Served</h5>
          </div>
          <hr id='artistsSeperator2'/>
          <div id='stat3'>
          <h1 id='tattoo'>14K+</h1>
            <h5 id='tattooTag'>Tattoos Inked</h5>
          </div>
          <hr id='artistsSeperator3'/>
          <div id='stat4'>
          <h1 id='sketch'>1K+</h1>
            <h5 id='sketchTag'>Custom Sketches Drawn</h5>
          </div>
          <hr id='statsline2'/>
        </div>
        <br />
        <hr id='statsline1'/>
        <br /><br /><br />
        <h3 id='artistsHeadline'> <span id='artistsDiff'> ARTISTS </span> WE'RE PROUD OF </h3>
        <div id='artistsContainer'>
          <div id='artistInfo'>
            <div id='top'>
            <h2 id='nameTag'> Jane Davies </h2>
            
            <div id='title'>
              <h4>Tattoo Artist</h4>
            </div>
            </div>
            <div id='middle'>
            <h3 id='artistText'>Experience <span id='middleLine'> | </span> 7 Years </h3>
            <br />
            <h3 id='artistText'>Style <span id='middleLine'> | </span> Realism, Portraiture, Classic </h3>
            <br />
            <h3 id='artistText'>Ranking <span id='middleLine'> | </span> Senior </h3>
            </div>
            <hr />
            <div id='bottom'>
              <div id='bottomText'>
                <h5>
                  Jane says "Imagine a beauty and keep it with you". She specializes in realism style and always tries to get the best end product.
                </h5>
              </div>
            </div>
          </div>
          <div id='artistImg'>
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <br />
        <hr />
        <div id='slideContainer'>
          <button id='slideBtn'> <BsArrowRight id='nextIcon' /> </button>
        </div>
        <hr />
      </section>
    </>
  )
}

export default Artists