import React from 'react';
import { Styled } from "theme-ui";
import Contact from "../../../components/contact"
import "./secondary-header.css"

const SecondaryHeader = ({ text }) => (
  <Styled.h2>
    <p className="newsletter">Sign up for our biweekly newsletter!</p>
    <Contact/>
  </Styled.h2>
);

export default SecondaryHeader;
