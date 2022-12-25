import React from "react";
import { SWRConfig } from "swr";
import Image from "../../../components/image";
import "./main-header.css"
import Piya from "../../../assets/piya-tose-naina-lage-re.mp3"
import Slider from "../../../components/slider"

const MainHeader = ({ text }) => (
  <div style={{height: "100%"}} className="main-header">
      <div className="main-header--audio">
          <p>track of the month खास आपके लिए</p>
          <audio id="player" controls autoPlay loop>
              <source src={Piya} type="audio/mp3"/>
              Your browser does not support the audio element.
          </audio>
      </div>
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
    <p className="main-header--signature">— South Asian Queer Collective</p>

      <SWRConfig
          value={{
              refreshInterval: 3000,
              fetcher: (resource, init) =>
                  fetch(resource, init).then((res) => res.json()),
          }}
      >
          <div className="App">
              <header className="App-header">Super Heros</header>
              <Slider />
          </div>
      </SWRConfig>
  </div>
);

export default MainHeader;
