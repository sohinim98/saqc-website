import * as React from "react"
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "react-feather"
import "./socials.css"

const Socials = () => (
  <div>
      <a href="https://instagram.com/saqcollective" target="blank" aria-label="instagram link"><Instagram className="social-icon" /></a>
      <a href="https://twitter.com/saqcollective" target="blank" aria-label="twitter link"><Twitter className="social-icon" /></a>
      <a href="https://www.facebook.com/profile.php?id=100088564521799&mibextid=LQQJ4d" target="blank" aria-label="facebook link"><Facebook className="social-icon" /></a>
      <a href="https://www.linkedin.com/in/saqc" target="blank" aria-label="linkedin link"><Linkedin className="social-icon" /></a>
      <a href="mailto:southasianqueercollective@gmail.com" target="blank" aria-label="email link"><Mail className="social-icon" /></a>
  </div>
);

export default Socials
