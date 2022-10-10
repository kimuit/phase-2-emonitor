import React from 'react';
import './Footer.css';
import  Button  from './Button';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         E-Monitor
        </p>
        <p className='footer-subscription-text'>
          Leave your feedback below, to help us improve our services
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='text'
              type='text'
              placeholder='Comment'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>

 <div class='footer-link-items'>
            <h2>Community</h2>
            {/* <Link to='/'>Instagram</Link> */}
            <Link to='/'>Announcements</Link>
            <Link to='/'>Groups</Link>
            <Link to='/'>Answer center</Link>
            <Link to='/'>eMonitor site</Link>
            <Link to='/'>Security</Link>
            <Link to='/'>Offers Available</Link>

            </div>

            <h2>Tools & Apps</h2>
            {/* <Link to='/'>Instagram</Link> */}
            <Link to='/'>Get mobile Apps</Link>
            <Link to='/'>Developer</Link>
            <Link to='/'>Official website</Link>
            <Link to='/'>Site map</Link>
            {/* <Link to='/'>Security</Link> */}
            </div>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Google+</Link>
            <Link to='/'>www.eMonitor.exp</Link>
          </div>

 <div class='footer-link-items'>
            <h2>About eMonitor</h2>
            {/* <Link to='/'>Instagram</Link> */}
            <Link to='/'>Company info</Link>
            <Link to='/'>News</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Advertise with us</Link>
            <Link to='/'>Policies</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>+254723456789</Link>
            <Link to='/'>info@e.monitor.com</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
      </div>
      <>
      {/* <Link><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2252.975977392045!2d36.784520041009415!3d-1.30205157044233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2ske!4v1665345673487!5m2!1sen!2ske" width="200" height="95" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Link> */}
      </>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              e-Monitor
            </Link>
          </div>
          <small class='website-rights'>Built by <strong>Griffin</strong> © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
