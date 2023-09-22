import React from 'react'
import '../footer/footer.scss'
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoPinterest } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'
import { MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

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
          <h3 id='heading'> ABOUT US </h3>
          <hr id='aboutItemLine'/>
          <h4 id='item'> SERVICES & PRICING </h4>
          
          <h4 id='item'> ARTISTS </h4>
          
          <h4 id='item'> APPOINTMENTS </h4>
          
          <h4 id='item'> AFTERCARE </h4>
          
          <h4 id='item'> GALLERY </h4>
        </div>
        <div id='contacts'>
          <h3 id='heading'> CONTACTS </h3>
          <hr id='aboutItemLine'/>
          <h4 id='itemContact'> <MdLocationPin/> Cape Town </h4>
          <h4 id='itemContact'> <BsFillTelephoneFill/> 021 000 0000</h4>
          <h4 id='itemContact'> <MdEmail/> info@ravenstudios.com</h4>
        </div>
        <div id='iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.5856695326233!2d-122.336243523336!3d47.5758493901001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904179e21f2bf3%3A0x85f3d102ec9bab1d!2sRaven%20Studios!5e0!3m2!1sen!2sza!4v1695346411729!5m2!1sen!2sza" width="400" height="300" style={{border:0, borderRadius:30}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        <div id='socialsContainer'>
          <hr id='socialLine1'/>
          <AiFillInstagram id="social"/>
          <BiLogoPinterest id="social"/>
          <BiLogoTwitter id="social"/>
          <hr id='socialLine2'/>
        </div>
        <div id='copyright'>
          <div id='left'>
            <h2>© Raven Studio. All Rights Reserved.</h2>
          </div>
          <div id='right'>
            <h2> Terms Of Use </h2>
            <h2> Privacy Policy </h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer