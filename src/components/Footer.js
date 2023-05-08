import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import "./FooterStyle.css"

const Footer = () => {
    return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Zagazig, Sharqiya.</p>
                        <p>Egypt</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        01061503809
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        mahmoudemourad29@gmail.com
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>This is me Mahmoud Essam, FrontEnd Developer. I enjoy discussing
                    new Projects and design challenges
                </p>
                <div className='social'>
                    <a href='https://www.facebook.com/mahmoud.essam164/'><FaFacebook size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    <a href='https://twitter.com/Mahmoud06132421'><FaTwitter size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    <a href='https://www.linkedin.com/in/mahmoud-essam-ba28581a4/'><FaLinkedin size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
