import React from 'react'
import Image from "../components/image";
import { Link } from "gatsby"
import "./App.css";
import { Home } from 'react-feather';
import Socials from "../components/socials";

const Team = () => {
    return (
        <div className="background">
            <ul className="nav-bar" id="nav-bar">
                <li>
                    <Link to="/">
                        <Image
                            className="logo"
                            src="logo.png"
                            alt="South Asian Queer Collective logo"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Home className="nav-bar--icon"/>
                    </Link>
                </li>
            </ul>
            <Image
                className="team-cover"
                src="team_cover.jpg"
                alt="team's cover photo"
            />
            <section className="team">
                <div className="team-card">
                    <Image
                        className="team-photo"
                        src="Sohini.jpg"
                        alt="Sohini"
                    />
                    <div className="team-container">
                        <h2>Sohini (she/they)</h2>
                        <p>Founder & Tech Lead</p>
                        <p>Sohini is a 24 year old queer, Bengali creative.</p>
                        <p>They are focused on creating safe spaces for the BIPOC LGBTQIA2S+ community
                            and writing ethical software.</p>
                    </div>
                </div>
                <div className="team-card">
                    <Image
                        className="team-photo"
                        src="Shradha.jpg"
                        alt="Shradha"
                    />
                    <div className="team-container">
                        <h2>Shradha (she/they)</h2>
                        <p>Resident Stylist</p>
                        <p>Shradha is a 22 year old queer, Tamil stylist.</p>
                        <p>They love all things creative and care deeply about thier community.</p>
                    </div>
                </div>
                <div className="team-card">
                    <Image
                        className="team-photo"
                        src="Zelina.jpg"
                        alt="Zelina"
                    />
                    <div className="team-container">
                        <h2 className="team-header">Zelina (she/her)</h2>
                        <p>Resident Photographer</p>
                        <p>
                            Zelina is a 24 year old queer, West Indian photographer, and creative director.
                        </p>
                        <p>
                            Her work has a strong focus on authentic representations of women, BIPOC, and the
                            LGBTQIA community.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <Socials/>
                <footer
                    style={{
                        color: `white`,
                        fontFamily: `Poppins, Sans-Serif`,
                        fontSize: `var(--font-sm)`,
                        marginTop: `var(--space-5)`,
                        textAlign: `center`
                    }}
                >
                    © {new Date().getFullYear()} &middot;
                    {` `} SAQC
                </footer>
            </section>
        </div>
    );
}

export default Team;
