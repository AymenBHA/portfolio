import React, { useRef } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

import emailjs from 'emailjs-com';


const Contact = () => {
    const formRef = useRef ();

    const handleSubmit = (e)=>{
     
            e.preventDefault();
            emailjs.sendForm('service_xynl8ep', 'template_w7rat1m', formRef.current, 'user_KjELgmMdjIyfcuDxHUCaB')
              .then((result) => {
                  console.log(result.text);
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
                    <input type='text' name='user_name' placeholder='Name' />
                    <input type='text' name='subject' placeholder='Subject' />
                    <input type='text' name='user_email' placeholder='Email' />
                    <textarea rows='5' name="message" placeholder='Message'></textarea>
                    <button>Submit</button>
                    </form>
                </div>

            </div>
        
    </div>
    )
}

export default Contact
