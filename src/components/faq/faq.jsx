import React, { useState } from 'react';
import '../faq/faq.scss'
import AboutImg from '../../assets/about.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

function FAQ() {
   // Use state to keep track of active FAQ item
   const [activeFAQ, setActiveFAQ] = useState(null);

   // Function to toggle the active state of a FAQ item
   const toggleFAQ = (faqId) => {
     if (activeFAQ === faqId) {
       // If the clicked FAQ is already active, close it
       setActiveFAQ(null);
     } else {
       // If a different FAQ is clicked, close the current one and open the new one
       setActiveFAQ(faqId);
     }
   };
  
  return (
    <>
      <section id='faqSection'>
      <h3 id='artistsHeadline'> FREQUENTLY ASKED <span id='artistsDiff'> QUESTIONS </span> </h3>
      <div className={activeFAQ === 'faq1' ? 'faq active' : 'faq1'}
          onClick={() => toggleFAQ('faq1')}>
          <div className='faqQuestion'>
            <h4>How to book an appointment?</h4>

            {activeFAQ === 'faq1' ? (
              <AiOutlineMinus className="expand" />
            ) : (
              <AiOutlinePlus className="expand" />
            )}
          </div>
          <div className="answer">
            <p>
              There are lots of ways to book an appointment, you can use the "Book Appointment" button on the homepage, appointment form at the end of the homepage or you can book an appointment directly with preferred artists from their profile pages.
            </p>
            <br />
          </div>
        </div>

        <div className={activeFAQ === 'faq2' ? 'faq active' : 'faq1'}
          onClick={() => toggleFAQ('faq2')}>
          <div className='faqQuestion'>
            <h4>How old should I be to get a tattoo?</h4>

            {activeFAQ === 'faq2' ? (
              <AiOutlineMinus className="expand" />
            ) : (
              <AiOutlinePlus className="expand" />
            )}
          </div>
          <div className="answer">
            <p>
            To get a tattoo, the minimum age requirement typically varies by location and local regulations. In many places, you need to be at least 18 years old to get a tattoo without parental consent. However, some areas may allow tattoos for individuals under 18 with parental or guardian permission. It's important to check the specific age and consent requirements at your local tattoo studio to ensure compliance with the laws in your area.
            </p>
            <br />
          </div>
        </div>

        <div className={activeFAQ === 'faq3' ? 'faq active' : 'faq1'}
          onClick={() => toggleFAQ('faq3')}>
          <div className='faqQuestion'>
            <h4> Does tattooing hurt? </h4>

            {activeFAQ === 'faq3' ? (
              <AiOutlineMinus className="expand" />
            ) : (
              <AiOutlinePlus className="expand" />
            )}
          </div>
          <div className="answer">
            <p>
            The level of pain experienced during tattooing varies from person to person and depends on several factors. While some individuals describe the sensation as discomfort or a mild stinging feeling, others may find it more painful, especially in sensitive areas. The pain also varies based on factors like the size and location of the tattoo, the skill of the tattoo artist, and your personal pain tolerance. To manage the discomfort, you can discuss pain management options with your tattoo artist, such as numbing creams or taking over-the-counter pain relievers. Ultimately, the level of pain during tattooing is subjective, and each person's experience may differ.
            </p>
            <br />
          </div>
        </div>

        <div className={activeFAQ === 'faq4' ? 'faq active' : 'faq1'}
          onClick={() => toggleFAQ('faq4')}>
          <div className='faqQuestion'>
            <h4> How to take care of my tattoo? </h4>

            {activeFAQ === 'faq4' ? (
              <AiOutlineMinus className="expand" />
            ) : (
              <AiOutlinePlus className="expand" />
            )}
          </div>
          <div className="answer">
            <p>
            Proper aftercare is essential to ensure your tattoo heals well and maintains its appearance over time. Start by following your tattoo artist's specific instructions, as they may have tailored recommendations for your tattoo. Generally, the aftercare process involves keeping your tattoo clean and moisturized. Gently wash it with mild, fragrance-free soap and lukewarm water, then pat it dry with a clean, soft cloth. Apply a thin layer of approved tattoo aftercare ointment or unscented lotion several times a day to keep the tattoo moist during the initial healing phase. Protect your tattoo from direct sunlight and avoid swimming until it's fully healed. Be patient, as tattoos can take several weeks to heal completely. While some itching, peeling, and scabbing are normal, resist the urge to scratch or pick at it. If you notice any signs of infection, like excessive redness or swelling, consult a healthcare professional. Proper aftercare ensures that your tattoo looks its best and remains a lasting piece of art.
            </p>
            <br />
          </div>
        </div>

        <div className={activeFAQ === 'faq5' ? 'faq active' : 'faq1'}
          onClick={() => toggleFAQ('faq5')}>
          <div className='faqQuestion'>
            <h4>Can i offer my sketches to studio?</h4>

            {activeFAQ === 'faq5' ? (
              <AiOutlineMinus className="expand" />
            ) : (
              <AiOutlinePlus className="expand" />
            )}
          </div>
          <div className="answer">
            <p>
            Certainly, if you have a personal sketch or design idea for a tattoo, you can often collaborate with a tattoo studio to bring your vision to life. The process typically involves reaching out to your chosen studio to discuss their policy on client-provided sketches. Most studios are open to this approach and will schedule a consultation with one of their tattoo artists. During the consultation, you can share your sketch and ideas, and the artist will assess the design's suitability for tattooing, considering factors like size, placement, and feasibility. Through collaboration and input from the artist, your original sketch can be refined and finalized into a tattoo design that aligns with your vision and is well-suited for the medium. It's important to be open to the artist's expertise and suggestions to ensure the best possible result. Once the design is approved, you can schedule your tattoo session with the studio, and the artist will use your sketch as the foundation for creating your unique tattoo.
            </p>
            <br />
          </div>
          <br /><br />
        </div>
      </section>
    </>
  )
}

export default FAQ