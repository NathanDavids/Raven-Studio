import React, { useState } from 'react';
import '../booking/booking.scss';

function Booking() {
  // Create a state variable to hold the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <>
      <section id='booking'>
        <div id='bookingContainer'>
          <br /><br /><br />
      <h3 id='bookingHeadline'> <span id='artistsDiff'> BOOK </span>  AN <span id='bookingDiff'>APPOINTMENT </span></h3>
      <br /><br />
      <div id="contact">
        <input type="text" id="inputs1" placeholder="Name"/>
        <br /><br />
        <input type="email" id="inputs1" placeholder="Email"/>
        <br /><br />
        <input type="number" id="inputs1" placeholder="Phone Number"/>
        <br /><br />
        <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
        <option value="option1" className='select1'> Select Procedure </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br /><br />
      <select id="dropdown" value={selectedValue} onChange={handleDropdownChange} placeholder='Select Artist'>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br /><br />
      <div>
      <input
        type="date"
        id="inputs1"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <br /><br />
      <input
        type="time"
        id="inputs1"
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </div>
      <br /><br />
      <textarea id="textArea" placeholder="Comments"/>
      <br /><br />
      </div>
      <div id='bookBtnContainer'>
        <br />
        <button id='bookBtn'> Book Now </button>
        <br />
        </div>
        <br /><br /><br />
      </div>
      </section>
    </>
  )
}

export default Booking