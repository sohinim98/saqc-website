import React from "react";
import Image from "../../../components/image";
import "./main-header.css"
import Helmet from "react-helmet";
import favicon from "../../../images/favicon.png";

const MainHeader = ({ text }) => (
  <div style={{height: "100%"}} className="main-header">
      <Helmet>
          <title>Whatever</title>
          <meta property='og:image' content={ favicon } />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='South Asian Queer Collective' />
          <meta property='og:description' content="SAQC amplifies queer South Asian voices often silenced by white, cis-heteronormative stories within the mainstream." />
          <meta property='og:url' content='https://theysiqueers.ca' />
          <meta property='og:updated_time' content='2022-12-24' />
      </Helmet>
    <Image
        className="main-header--logo"
        src="logo.png"
        alt="South Asian Queer Collective logo"
    />
    <p className="main-header--intro">
      "SAQC’s purpose is to rewrite the narrative.
      We aim to amplify the voices of queer South Asian people which are often
      silenced by white, cis-heteronormative stories within the mainstream.
      We want our community to feel seen.
    </p>
    <p className="main-header--sub-description">
      This is a safe and creative space for queer, South Asian, (Tkaronto)
      Toronto-based artists. We are a not-for-profit collective and all
      proceeds are donated to &nbsp;
      <a
        className="donation"
        href="https://acas.org/programs/for-youth/"
        target="_blank" rel="noopener noreferrer"
      >
        https://acas.org/programs/for-youth/
      </a>.
      <br/>
      Come, join us or collaborate!"
    </p>
    <p class="main-header--signature">— South Asian Queer Collective</p>
  </div>
);

export default MainHeader;
