import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/footer_logo.svg'
import pro from '../../assets/sanjai.svg'
import usericon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footertop-left">
                <img src={pro} alt="" />
                <p>I am front end developer with 1 year of experience with two internships for 6 months

                </p>
            </div>
            <div className="footertop-right">
                <div className="footer-email">
                    <img src={usericon} alt="" />
                    <input type="email" placeholder='enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footerbottom-left">
                <p>@2025 Sanjai Kanna. All rights reseved</p>
            </div>
                <div className="footerbuttom-right">
                    <p>Term of services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            

        </div>
      
    </div>
  )
}

export default Footer
