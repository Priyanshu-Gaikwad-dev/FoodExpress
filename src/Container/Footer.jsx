import React from "react";
import "./Footer.css";
// import logo from "../ImgLogo/swiggy-logo.svg";
import SvgComponent from "../ImgLogo/SvgComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faCcVisa,
  faCcPaypal,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PremiumFooter = () => {
  return (
    <footer className="premium-footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand & Contact Section */}
        <div className="footer-brand-section">
          <div className="logo-container">
            {/* <img
              src={logo}
              alt="FoodExpress Logo"
              className="footer-logo"
            /> */}
            <span className="brand-name">FoodExpress</span>
          </div>
          
          <p className="tagline">Delivering happiness at your doorstep</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span>123 Gourmet Street, Foodie City, FC 560001</span>
            </div>
            {/* <div className="contact-item">
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              <span>+1 234 567 890</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>care@foodexpress.com</span>
            </div> */}
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              <span>+1 234 567 890</span>
            </div>
          </div>

               <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>care@foodexpress.com</span>
            </div>
          </div>
          
          <div className="app-links">
            <h5>Download Our App</h5>
            <div className="app-badges">
              <a
                href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"
                target="_blank"
                rel="noopener noreferrer"
                className="app-badge"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=in.swiggy.android"
                target="_blank"
                rel="noopener noreferrer"
                className="app-badge"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="column-title">Company</h4>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
              <li><a href="/team" className="footer-link">Our Team</a></li>
              <li><a href="/blog" className="footer-link">Foodie Blog</a></li>
              <li><a href="/press" className="footer-link">Press Center</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="column-title">Services</h4>
            <ul className="footer-links">
              <li><a href="/help" className="footer-link">Help Center</a></li>
              <li><a href="/partner" className="footer-link">Partner With Us</a></li>
              <li><a href="/ride" className="footer-link">Ride With Us</a></li>
              <li><a href="/enterprise" className="footer-link">Enterprise Solutions</a></li>
              <li><a href="/gift" className="footer-link">Gift Cards</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="column-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/cookies" className="footer-link">Cookie Policy</a></li>
              <li><a href="/security" className="footer-link">Security</a></li>
              <li><a href="/compliance" className="footer-link">Compliance</a></li>
            </ul>

            
          </div>
          
          <div className="footer-column">
            <h4 className="column-title">Cities We Serve</h4>
            <ul className="footer-links city-list">
              <li>Mumbai</li>
              <li>Delhi NCR</li>
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Chennai</li>
              <li>Pune</li>
              <li>Kolkata</li>
              <li>Ahmedabad</li>
              <li>Jaipur</li>
              <li>More Cities...</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <p className="copyright">© 2025 FoodExpress Technologies Pvt. Ltd. All Rights Reserved.</p>
          
          <div className="social-media">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          
          <div className="payment-methods">
            <h5>We Accept</h5>
            <div className="payment-icons">
              {/* <i className="payment-icon visa"></i>
              <i className="payment-icon mastercard"></i>
              <i className="payment-icon amex"></i>
              <i className="payment-icon paypal"></i>
              <i className="payment-icon upi"></i> */}
               <FontAwesomeIcon className="payment-icon visa" icon={faCcVisa} />
               <FontAwesomeIcon className="payment-icon mastercard" icon={faCcMastercard} />
               <FontAwesomeIcon className="payment-icon amex" icon={faCcAmex} />
               <FontAwesomeIcon className="payment-icon paypal" icon={faCcPaypal} />
               <FontAwesomeIcon className="payment-icon upi" icon={faCcDiscover} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;