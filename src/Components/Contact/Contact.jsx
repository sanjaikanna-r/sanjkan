import React from 'react'
import './Contact.css'
import themepattern from '../../assets/theme_pattern.svg'
import contacticon from '../../assets/mail_icon.svg'
import locationicon from '../../assets/location_icon.svg'
import callicon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e395fd18-a0bc-42ee-9ece-bccbb00fc34f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={themepattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>i am currently available to take on new projects, so feel free to ask with me and get in touch</p>
                <div className="contact-details">
                <div className="contact-detail">
                    <img src={contacticon} alt="" />
                    <p>kannsanjai50@gmail.com</p>

                </div>
                <div className="contact-detail">
                    <img src={callicon} alt="" />
                    <p>+919025018730</p>
                    
                </div>
                <div className="contact-detail">
                    <img src={locationicon} alt="" />
                    <p>Chennai</p>
                    
                </div>
            </div>
           
        </div>
        <div>
            <form onSubmit={onSubmit}action="" className="contact-right">
                <label>Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor=""> Your mail</label>
                <input type="emai" placeholder='enter your email' name='email' />
                <label htmlFor=""> Write your message here</label>
                <textarea name="message" rows={8} placeholder='enter your message'></textarea>
                <button className="contact-submit" type='submit'>Submit now</button>
            </form>
        </div>
        </div>
      
    </div>
  )
}

export default Contact
