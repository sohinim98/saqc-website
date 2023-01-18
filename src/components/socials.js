import * as React from "react"
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowUp } from "react-feather"
import "./socials.css"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Socials = () => (
    <div className="socials-container">
        <button alt="button to go up" className="link-button" onClick={() => scrollTo('#nav-bar')}><ArrowUp className="social-icon" /></button>
          <div className="socials">
                <a href="https://instagram.com/saqcollective" target="blank" aria-label="instagram link"><Instagram className="social-icon" /></a>
                <a href="https://twitter.com/saqcollective" target="blank" aria-label="twitter link"><Twitter className="social-icon" /></a>
                <a href="https://www.facebook.com/profile.php?id=100088564521799&mibextid=LQQJ4d" target="blank" aria-label="facebook link"><Facebook className="social-icon" /></a>
                <a href="https://www.linkedin.com/in/saqc" target="blank" aria-label="linkedin link"><Linkedin className="social-icon" /></a>
                <a href="mailto:southasianqueercollective@gmail.com" target="blank" aria-label="email link"><Mail className="social-icon" /></a>
          </div>
    </div>
);

export default Socials
