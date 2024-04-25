import React, { useState } from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ece86b97-1fc2-483e-8a98-1740acf93268");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if(data.success){
            setResult("Form Submitted Succesfully");
            event.target.reset();
        }else{
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={message_icon} alt=''></img></h3>
            <p>Feel free to reach out through contact form or find our
                 contact information below. Your feedback, questions, 
                 and suggestions are important to us as we strive to provide
                  exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon}></img>Contact@Edusity.edu</li>
                <li><img src={phone_icon}></img>+1 123-456-7890</li>
                <li><img src={location_icon}></img>77 Massachusetts Ave, Cambridge<br/> MA 02139, 
                United States</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name:</label>
                <input type='text' name='name' placeholder='eg.William Jackson'
                required/>
                <label>Phone Number:</label>
                <input type='tel' name='phone' placeholder='eg.+1 123 456 7890'
                required/>
                <label>Write your message here:</label>
                <textarea name='message' rows={6} placeholder='Enter your message...' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow}></img></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact