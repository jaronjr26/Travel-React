import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './footer.css';
import * as faIcon from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to recieve our best vacation deals
            </p>
            <p className="footer-description-text">
                You can unsubscribe at any time
            </p>
            <div className="input-areas">
                <form >
                    <input type="email" name="email" placeholder="Your Email" className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About us</h2>
                <Link to='/'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Term of Services</Link>
            </div>
            <div className="footer-link-items">
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destination</Link>
                <Link to='/'>Sponsorship</Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Social Media</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
                <Link to='/'>Tern of Services</Link>
            </div>
            <div className="footer-link-items">
                <h2>Videos</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
            </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-log">
                <Link className="social-logo">
                <faIcon.FaServicestack />
                 <p>TRAVEL</p>
                </Link>
            </div>
            <small className="website-rights">Travel credit 2023</small>
            <div className="social-icons">
                <Link className="social-icon-link faceboook"
                to="/"
                target="_blank"
                aria-label='Facebook'>   
                    <faIcon.FaFacebook />
                </Link>
                <Link className="social-icon-link faceboook"
                to="/"
                target="_blank"
                aria-label='Instagram'>
                    <faIcon.FaInstagram />
                </Link>
                <Link className="social-icon-link faceboook"
                to="/"
                target="_blank"
                aria-label='Twitter'>
                    <faIcon.FaTwitter />
                </Link>
                <Link className="social-icon-link faceboook"
                to="/"
                target="_blank"
                aria-label='LinkedIn'>
                    <faIcon.FaLinkedin />
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
