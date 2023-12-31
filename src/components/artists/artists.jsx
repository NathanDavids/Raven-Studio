import React, { useState, useEffect } from 'react';
import '../artists/artists.scss';
import John from '../../assets/john.jpg'
import Jane from '../../assets/jane.jpg'
import Emily from '../../assets/emily.jpg'
import Michael from '../../assets/michael.jpg'
import Sarah from '../../assets/sarah.jpg'
import { BsArrowRight } from 'react-icons/bs';

const artistsData = [
  {
    name: 'Jane Davies',
    title: 'Tattoo Artist',
    experience: '7 Years',
    style: 'Realism, Portraiture, Classic',
    ranking: 'Senior',
    description:
      'Jane says "Imagine a beauty and keep it with you". She specializes in realism style and always tries to get the best end product.',
      image: Jane, // Add image URL for Jane Davies
    },
  {
    name: 'John Smith',
    title: 'Tattoo Artist',
    experience: '5 Years',
    style: 'Traditional, Japanese',
    ranking: 'Intermediate',
    description:
      'John is passionate about traditional tattooing and has a unique style that combines elements of Japanese tattoo art.',
    image: John, // Add image URL for Jane Davies
    },
  {
    name: 'Emily Black',
    title: 'Tattoo Artist',
    experience: '9 Years',
    style: 'Watercolor, Abstract, Geometric',
    ranking: 'Master',
    description:
      'Emily is known for her avant-garde approach to tattoo art, blending watercolor techniques with abstract and geometric designs for stunning and unique tattoos.',
    image: Emily, // Add image URL for Jane Davies
    },
  {
    name: 'Michael Greene',
    title: 'Tattoo Artist',
    experience: '12 Years',
    style: 'Neo-Traditional, New School, Surrealism',
    ranking: 'Expert',
    description:
      'Michael is a versatile artist who excels in various styles, from Neo-Traditional to Surrealism. He believes that tattoos should tell a story and bring imagination to life.',
    image: Michael, // Add image URL for Jane Davies
    },
  {
    name: 'Sarah Walker',
    title: 'Tattoo Artist',
    experience: '8 Years',
    style: 'Black and Gray, Fine Line, Script',
    ranking: 'Senior',
    description:
      'Sarah specializes in creating elegant and intricate black and gray tattoos. Her attention to detail and skill with fine line work make her a sought-after artist for script and delicate designs.',
    image: Sarah, // Add image URL for Jane Davies
    },
  // Add more artists as needed
];

function Artists() {
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [yearsOfExp, setYearsOfExp] = useState(0);
  const [customersServed, setCustomersServed] = useState(0);
  const [tattoosInked, setTattoosInked] = useState(0);
  const [customSketchesDrawn, setCustomSketchesDrawn] = useState(0);

  const targetStats = {
    yearsOfExp: 9,
    customersServed: 12,
    tattoosInked: 14,
    customSketchesDrawn: 1,
  };

  const incrementStats = () => {
    if (yearsOfExp < targetStats.yearsOfExp) {
      setYearsOfExp((prevValue) => Math.min(prevValue + 1, targetStats.yearsOfExp));
    }
    if (customersServed < targetStats.customersServed) {
      setCustomersServed((prevValue) => Math.min(prevValue + 1, targetStats.customersServed));
    }
    if (tattoosInked < targetStats.tattoosInked) {
      setTattoosInked((prevValue) => Math.min(prevValue + 1, targetStats.tattoosInked));
    }
    if (customSketchesDrawn < targetStats.customSketchesDrawn) {
      setCustomSketchesDrawn((prevValue) => Math.min(prevValue + 1, targetStats.customSketchesDrawn));
    }
  };

    // Start the interval when the component mounts
    const interval = setInterval(incrementStats, 1000);

  const nextArtist = () => {
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % artistsData.length);
  };

  const artist = artistsData[currentArtistIndex];

  return (
    <>
      <section id='artists'>
      <h3 id='artistsHeadline'> STATS WE <span id='artistsDiff'> BRAG </span> ABOUT </h3>
        <br /><br />
        <hr id='statsline1'/>
        <div id='stats'>
        <div id='stat1'>
          <h1 id='exp'>{yearsOfExp}</h1>
          <h5 id='expTag'>Years of Experience</h5>
        </div>
        <hr id='artistsSeperator1' />
        <div id='stat2'>
          <h1 id='customers'>{customersServed}K</h1>
          <h5 id='customersTag'>Customers Served</h5>
        </div>
        <hr id='artistsSeperator2' />
        <div id='stat3'>
          <h1 id='tattoo'>{tattoosInked}K</h1>
          <h5 id='tattooTag'>Tattoos Inked</h5>
        </div>
        <hr id='artistsSeperator3' />
        <div id='stat4'>
          <h1 id='sketch'>{customSketchesDrawn}K</h1>
          <h5 id='sketchTag'>Custom Sketches Drawn</h5>
        </div>
          <hr id='statsline2'/>
        </div>
        <br />
        <hr id='statsline1'/>
        <br /><br /><br />
        <h3 id='artistsHeadline'> <span id='artistsDiff'> ARTISTS </span> WE'RE PROUD OF </h3>
        {artistsData.map((artist, index) => (
          <div key={index} id='artistsContainer' style={{ display: index === currentArtistIndex ? 'flex' : 'none' }}>
            <div id='artistInfo'>
              <div id='top'>
                <h2 id='nameTag'>{artist.name}</h2>
                <div id='title'>
                  <h4>{artist.title}</h4>
                </div>
              </div>
              <div id='middle'>
                <h3 id='artistText'>Experience <span id='middleLine'> | </span> {artist.experience}</h3>
                <br />
                <h3 id='artistText'>Style <span id='middleLine'> | </span> {artist.style}</h3>
                <br />
                <h3 id='artistText'>Ranking <span id='middleLine'> | </span> {artist.ranking}</h3>
              </div>
              <hr />
              <div id='bottom'>
                <div id='bottomText'>
                  <h5>{artist.description}</h5>
                </div>
              </div>
            </div>
            <div id='artistImgContainer'>
              <img src={artist.image} id='artistImg' alt='' />
            </div>
          </div>
        ))}
        <br />
        <hr id='btnLine'/>
        <br />
        <div id='slideContainer'>
          <button id='slideBtn' onClick={nextArtist}>
            <BsArrowRight id='nextIcon' />
          </button>
        </div>
        <br />
        <hr id='btnLine'/>
      </section>
    </>
  );
}

export default Artists;