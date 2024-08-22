import React from 'react';

import './Contact.css'
import phoneImg from '../assets/icon/phone.png'
import emailImg from '../assets/icon/email.png';

function ContactPage() {
  return (
    <div>
        <div className='intext'><h1>Contact</h1></div>
        <p className='intext'>How to Contact with us?</p>
        <div className='contact-container'>
          <div className='contact'>
            <img src={phoneImg} alt='phone imgge'/>
            <h2>Phone</h2>
            <a href="tel:+61488693687">+61 4886 93687</a>
          </div>
          <div className='contact'>
          <img src={emailImg} alt='email imgge'/>
            <h2>Email</h2>
            <a href="mailto:neweraau@hotmail.com">neweraau@hotmail.com</a>
          </div>
        </div>
    </div>
  );
}

export default ContactPage;
