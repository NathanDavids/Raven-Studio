import React from 'react'
import '../artists/artists.scss'

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
            <br />
            <h5 id='expTag'>Years of Experience</h5>
          </div>
          <hr id='artistsSeperator1'/>
          <div id='stat2'>
          <h1 id='exp'>12K+</h1>
            <br />
            <h5 id='expTag'>Customers Served</h5>
          </div>
          <hr id='artistsSeperator2'/>
          <div id='stat3'>
          <h1 id='exp'>14K+</h1>
            <br />
            <h5 id='expTag'>Tattoos Inked</h5>
          </div>
          <hr id='artistsSeperator3'/>
          <div id='stat4'>
          <h1 id='exp'>1K+</h1>
            <br />
            <h5 id='expTag'>Custom Sketches Drawn</h5>
          </div>
          <hr id='statsline2'/>
        </div>
        <hr id='statsline1'/>
      </section>
    </>
  )
}

export default Artists