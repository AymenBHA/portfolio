
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { ThemeContext } from "../../context";

import React, { useRef, useContext, useState } from 'react';

import emailjs from 'emailjs-com';


const Contact = () => {
    const formRef = useRef ();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
     
            e.preventDefault();
            emailjs.sendForm('service_xynl8ep', 'template_w7rat1m', formRef.current, 'user_KjELgmMdjIyfcuDxHUCaB')
              .then((result) => {
                  console.log(result.text);  alert(" Thank you...");
              }, (error) => {
                  console.log(error.text);
              });
    };



    return (
        <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me!</h1>
                    <div className="c-info">
                    <div className="c-info-item">
                            <img 
                                src={Phone} 
                                alt="" 
                                className="c-icon" 
                            />
                            +216 26 148 303
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address} 
                                alt="" 
                                className="c-icon" 
                            />
                            Cite Nozha, Ariana.
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email} 
                                alt="" 
                                className="c-icon" 
                            />
                            aymenboulilaa@gmail.com
                        </div>
                    </div>
                </div>

                <div className="c-right">
                    <p className="c-desc">
                        <b>what is your story?</b> Get in touch with me.
                        Always freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}> 
                    <input style={{backgroundColor: darkMode && "black", color: darkMode && "white"}} type='text' name='user_name' placeholder='Name' />
                    <input style={{backgroundColor: darkMode && "black", color: darkMode && "white"}} type='text' name='subject' placeholder='Subject' />
                    <input style={{backgroundColor: darkMode && "black", color: darkMode && "white"}} type='text' name='user_email' placeholder='Email' />
                    <textarea style={{backgroundColor: darkMode && "black", color: darkMode && "white"}} rows='5' name="message" placeholder='Message'></textarea>
                    <button>Submit</button> 
                    </form>
                </div>

            </div>
        
    </div>
    )
}

export default Contact
