import React from 'react'
import '../footer/footer.scss'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoPinterest} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'

function Footer() {
  return (
    <>
      <section id='footerSection'>
        <div id='footer'>
        <div id='tagline'>
          <h2 id='taglineText'>RAVEN STUDIO</h2>
          <h5 id='quote'> Your skin, your story... </h5>
        </div>
        <div id='aboutUs'>
          <h3> ABOUT US </h3>
          <h4> SERVICES & PRICING </h4>
          <h4> ARTISTS </h4>
          <h4> APPOINTMENTS </h4>
          <h4> AFTERCARE </h4>
          <h4> GALLERY </h4>
        </div>
        <div id='contacts'>
          <h4> 27 Camptown Road, Chigago </h4>
          <h4> 021 000 0000</h4>
          <h4> info@ravenstudios.com</h4>
        </div>
        <div id='iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211864.17966710072!2d18.260848165111934!3d-33.93140969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc677a389ca23b%3A0xe6a5a1ce4862363a!2sTOMB%20TATTOO!5e0!3m2!1sen!2sza!4v1695337124963!5m2!1sen!2sza" width="500" height="300" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        <div id='socialsContainer'>
          <AiFillInstagram id="social"/>
          <BiLogoPinterest id="social"/>
          <BiLogoTwitter id="social"/>
        </div>
        <div id='copyright'>
          <div id='left'>
            <h2>© Raven Studio. All Rights Reserved.</h2>
          </div>
          <div id='right'>
            <h2> Terms Of Use </h2>
            <hr />
            <h2> Privacy Policy </h2>
            <hr />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer