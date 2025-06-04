import React from 'react'
import "./contact.css"
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
  const form  = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_h9n8qo4', 'template_i3klthg', form.current, 'xtoD9JpXLydio7hfa')
    .then((result)=>{
      console.log("Check kar mail aai");
      alert("Thank you!");
    },(err)=>{
      console.log(err.text);
    }
  );

  e.target.reset();
  }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__details">Don't like forms? Send me an Email.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="name" className="contact__form-input" 
              placeholder='Insert your name'/>
            </div>
            <div className="contact__form-div">
              <input type="email" name="email" className="contact__form-input" 
              placeholder='Insert your email'/>
            </div>
            <div className="contact__form-div">
              <input type="text" name="subject" className="contact__form-input" 
              placeholder='Insert your Subject'/>
            </div>
            <div className="contact__form-div contact__form-textarea">
              <textarea name="message" id="" cols="30" rows="10" 
                className='contact__form-input' placeholder='Write your message'>
              </textarea>
            </div>
          </div>
          <button type="submit" className='btn'>Send Message</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact
