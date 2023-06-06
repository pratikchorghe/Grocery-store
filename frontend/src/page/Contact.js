import React from 'react';
import FacebookIcon from '../assest/facebook-icon.png';
import TwitterIcon from '../assest/twitter-icon.png';
import InstagramIcon from '../assest/instagram-icon.png';
import MapImage from '../assest/map.png';
import { TbAlignCenter } from 'react-icons/tb';


const ContactUs = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%'}}>
        <h2>Contact Us</h2>
        <div>
          <img src={MapImage} alt="Map" style={{ width: '30%', alignItems:'center' }} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{margin: '10px 0'}}><strong>Address:</strong> 123 Main Street, Anytown USA 12345</p>
          <p style={{margin: '10px 0'}}><strong>Phone:</strong> (123) 456-7890</p>
          <p style={{margin: '10px 0'}}><strong>Email:</strong> info@grocerystore.com</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0'}}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" style={{width: '30px', height: '30px', margin: '0 10px'}} />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" style={{width: '30px', height: '30px', margin: '0 10px'}} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" style={{width: '30px', height: '30px', margin: '0 10px'}} />
          </a>
        </div>
        
      </div>
      <div style={{width: '50%'}}>
        <iframe title="Grocery Store Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.8639743783795!2d-86.25780294963205!3d41.6952876393264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ce9d791d96fb29e!2sGrocery%20Store!5e0!3m2!1sen!2sus!4v1650803788254!5m2!1sen!2sus" width="100%" height="700" style={{border: 0}} allowFullScreen loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
