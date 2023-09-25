import React, { useState } from 'react';
import '../solutions/solutions.scss';
import Per1 from '../../assets/per1.jpg';
import Per2 from '../../assets/per2.jpg'
import Per3 from '../../assets/per3.jpg'
import Temp1 from '../../assets/temp1.jpg'
import Temp2 from '../../assets/temp2.jpg'
import Temp3 from '../../assets/temp3.jpg'
import Sketch1 from '../../assets/sketch1.jpg'
import Sketch2 from '../../assets/sketch2.jpg'
import Sketch3 from '../../assets/sketch3.jpg'
import Cov1 from '../../assets/cov1.jpg'
import Cov2 from '../../assets/cov2.jpg'
import Cov3 from '../../assets/cov3.jpg'
import rem1 from '../../assets/rem1.png'
import rem2 from '../../assets/rem2.jpg'
import rem3 from '../../assets/rem3.jpg'
import pi1 from '../../assets/pi1.jpg'
import pi2 from '../../assets/pi2.jpg'
import pi3 from '../../assets/pi3.jpg'

function Solutions() {
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
      <section id='solutions'>
        <h3 id='solutionsHeading'>OUR <span id='solutionsDiff'>VERSATILE</span> SOLUTIONS</h3>
        <br /><br />
        <div id='faqContainer'>
        <div className={activeFAQ === 'faq1' ? 'faq active' : 'faq'}
          onClick={() => toggleFAQ('faq1')}>
          <div className='question'>
            <h4>Permanent Tattooing</h4>

            <svg width='15' height='10' viewBox='0 0 42 25'>
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth='7'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              The most popular type of tattooing that applies permanent color to your skin. An artistic process that involves a stroke of organic pigment beneath the skin to create a natural appearance that lasts a lifetime.
            </p>
            <br />
            <hr />
            <div id='imgContainer1'>
            <div id='imgContainer'>
            <img src={Per1} className='img' /> 
            </div>
            <hr id='seperator1'/>
            <div id='imgContainer'>
            <img src={Per2} className='img' /> 
            </div> 
            <hr id='seperator2'/>
            <div id='imgContainer'>
            <img src={Per3} className='img' /> 
            </div>
            </div>
            <hr />
          </div>
        </div>
        
        <div className={activeFAQ === 'faq2' ? 'faq active' : 'faq'}
          onClick={() => toggleFAQ('faq2')}>
          <div className='question'>
            <h4>Temporary Tattooing</h4>

            <svg width='15' height='10' viewBox='0 0 42 25'>
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth='7'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className="answer">
            <p>
            A popular form of body art that offers a temporary way to adorn the skin with designs or images. Unlike permanent tattooing, temporary tattooing involves applying pigments or ink that adhere to the top layer of the skin, the epidermis. These tattoos provide a creative and customizable way to experiment with different styles, patterns, or symbols without a lifelong commitment. 
            </p>
            <br />
            <hr />
            <div id='imgContainer1'>
            <div id='imgContainer'>
            <img src={Temp1} className='img' /> 
            </div>
            <hr id='seperator1'/>
            <div id='imgContainer'>
            <img src={Temp2} className='img' /> 
            </div> 
            <hr id='seperator2'/>
            <div id='imgContainer'>
            <img src={Temp3} className='img' /> 
            </div>
            </div>
            <hr />
          </div>
        </div>

        <div className={activeFAQ === 'faq3' ? 'faq active' : 'faq'}
          onClick={() => toggleFAQ('faq3')}>
          <div className='question'>
            <h4>Tattoo Sketching</h4>

            <svg width='15' height='10' viewBox='0 0 42 25'>
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth='7'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className="answer">
            <p>
            A fundamental step in the process of creating a tattoo design, tattoo sketching involves the artistic and creative rendering of an initial concept onto paper or a digital canvas. This preliminary sketch serves as a blueprint for the eventual tattoo, allowing both the artist and the client to visualize the proposed design.
            </p>
            <br />
            <hr />
            <div id='imgContainer1'>
            <div id='imgContainer'>
            <img src={Sketch1} className='img' /> 
            </div>
            <hr id='seperator1'/>
            <div id='imgContainer'>
            <img src={Sketch2} className='img' /> 
            </div> 
            <hr id='seperator2'/>
            <div id='imgContainer'>
            <img src={Sketch3} className='img' /> 
            </div>
            </div>
            <hr />
          </div>
        </div>

        <div className={activeFAQ === 'faq4' ? 'faq active' : 'faq'}
          onClick={() => toggleFAQ('faq4')}>
          <div className='question'>
            <h4>Tattoo Correction</h4>

            <svg width='15' height='10' viewBox='0 0 42 25'>
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth='7'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className="answer">
            <p>
            A specialized procedure undertaken by experienced tattoo artists to address imperfections, errors, or dissatisfaction with an existing tattoo. Tattoo correction involves skillful techniques to modify, enhance, or refine an existing tattoo design while preserving its overall concept. 
            </p>
            <br />
            <hr />
            <div id='imgContainer1'>
            <div id='imgContainer'>
            <img src={Cov1} className='img' /> 
            </div>
            <hr id='seperator1'/>
            <div id='imgContainer'>
            <img src={Cov2} className='img' /> 
            </div> 
            <hr id='seperator2'/>
            <div id='imgContainer'>
            <img src={Cov3} className='img' /> 
            </div>
            </div>
            <hr />
          </div>
        </div>

        <div className={activeFAQ === 'faq5' ? 'faq active' : 'faq'}
          onClick={() => toggleFAQ('faq5')}>
          <div className='question'>
            <h4>Tattoo Removal</h4>

            <svg width='15' height='10' viewBox='0 0 42 25'>
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth='7'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className="answer">
            <p>
            A cosmetic procedure to eliminate unwanted tattoos by breaking down the tattoo ink within the skin's dermal layer. Common methods include laser removal, dermabrasion, chemical peels, and surgical excision.
            </p>
            <br />
            <hr />
            <div id='imgContainer1'>
            <div id='imgContainer'>
            <img src={rem1} className='img' /> 
            </div>
            <hr id='seperator1'/>
            <div id='imgContainer'>
            <img src={rem2} className='img' /> 
            </div> 
            <hr id='seperator2'/>
            <div id='imgContainer'>
            <img src={rem3} className='img' /> 
            </div>
            </div>
            <hr />
          </div>
        </div>

        <div className={activeFAQ === 'faq6' ? 'faq active' : 'faq'}
          onClick={() => toggleFAQ('faq6')}>
          <div className='question'>
            <h4>Piercing</h4>

            <svg width='15' height='10' viewBox='0 0 42 25'>
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth='7'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className="answer">
            <p>
            A body modification involving creating an opening in the skin or tissue to insert jewelry. Common areas for piercings include ears, nose, lips, and more. 
            </p>
            <br />
            <hr />
            <div id='imgContainer1'>
            <div id='imgContainer'>
            <img src={pi1} className='img' /> 
            </div>
            <hr id='seperator1'/>
            <div id='imgContainer'>
            <img src={pi2} className='img' /> 
            </div> 
            <hr id='seperator2'/>
            <div id='imgContainer'>
            <img src={pi3} className='img' /> 
            </div>
            </div>
            <hr />
          </div>
        </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </section>
    </>
  );
}

export default Solutions;