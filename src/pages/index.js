import React, { useState, useEffect } from 'react'
import "./App.css";
import Slider1 from "../components/slider1";
import Image from "../components/image";
import { Link } from "gatsby"
import {Users} from 'react-feather';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Kabhi from "../assets/kabhi-aar-kabhi-paar.mp3";
import Socials from "../components/socials";
import ImageSwapper from "../components/imageSwapper";
import SecondaryHeader from "../components/secondary-header";
import Slider2 from "../components/slider2";
import Slider3 from "../components/slider3";
import Slider4 from "../components/slider4";

const App = ({location}) => {
    const [donationMessage, setDonationMessage] = useState("");
    const { width, height } = useWindowSize();

    useEffect(()=> {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(location.search);
        if (query.get("success")) {
            setDonationMessage("Donation succeeded — thank you!!! 🎉")
        }
        if (query.get("cancelled")) {
            setDonationMessage("Donation cancelled — try again when you're ready")
        }
    }, [location.search]);

    return (
        <div className="App background">
            {donationMessage ?
                <Confetti
                width={width}
                height={height}
            /> : ""}
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
                    <Link to="/team">
                        <Users className="nav-bar--icon"/>
                    </Link>
                </li>
            </ul>
            <section className="tools">
                <div className="audio">
                    <p className="audio-title">track of the month खास आपके लिए</p>
                    <audio id="player" className="audio-player" controls autoPlay loop>
                        <source src={Kabhi} type="audio/mp3"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <SecondaryHeader/>
                {donationMessage ? <p className="donation-success">{donationMessage}</p>:
                    <form action="/api/@raae/gatsby-plugin-donations/donation" method="POST">
                        <fieldset className="donation">
                            <p>
                                Support our artists and the cause by donating if you can! 💘
                            </p>
                            <p>
                                <label htmlFor="amount" className="donation-input">Amount 💰 (in CAD)</label>
                                <br />
                                <input type="number" id="amount" name="amount" defaultValue="10" />
                            </p>
                            <p>
                                <button className="donation-btn">Donate</button>
                            </p>
                        </fieldset>
                    </form>}
            </section>
            <ImageSwapper/>
            <section className="message-of-the-month">
                <h1 className="message-of-the-month--title">Release 1: Book Club Apsaras</h1>
                <p>
                    For our first-ever release, we wanted to recreate scenes from books that have left a profound impact on us.
                    We examined Maan and Firoz's queerplatonic friendship in <em>A Suitable Boy by Vikram Seth</em>,
                    David and Giovanni's hot and cold relationship in the quintessential book <em>Giovanni's Room by James Baldwin</em>,
                    <em> Samra Habib's We Have Always Been Here: A Queer Muslim Memoir</em> — a story about immigrants and
                    <em> Alok Vaid-Menon's Beyond the Gender Binary</em>. Our primary focus has been on rewriting the narrative.
                    Here, we have attempted to amplify the voices of queer South Asian people which are often silenced by
                    white, cis-heteronormative stories within the mainstream. We want our community to feel seen.
                    <em> Representation is important.</em>
                </p>
                <p>
                    A lot of hard work has gone into bringing our first release to life. Special thanks to
                    Zelina for photographing and interviewing our community, Sohini for bringing our ideas to life
                    and Shradha for their creative styling! We appreciate and thank you for your support. This would have
                    been impossible without the involvement of the Toronto artists you see on-screen and folks who helped
                    us behind the scenes. Cheers and शुक्रिया! ✨
                </p>
            </section>
            <Slider1 />
            <Slider3 />
            <section className="designer-text-box">
                <p className="text-large">
                    “With everything in me screaming No! yet the sum of me sighed Yes.”
                </p>
                <p className="text-small align-bottom">
                    “You don’t have a home until you leave it and then, when you have left it, you never can go back.” — James Baldwin
                </p>
            </section>
            <Slider1 />
            <section className="designer-text-box">
                <p className="text-small align-center">
                    "Not everyone is equipped for activism in the traditional sense—marching, writing letters to officials—but dedicating your life to understanding yourself can be its own form of protest, especially when the world tells you that you don't exist.”
                    ― Samra Habib, We Have Always Been Here: A Queer Muslim Memoir
                </p>
                <p className="text-large">
                    “Representation is a critical way for people to recognize that their experiences—even if invisible in the mainstream—are valid.”
                </p>
            </section>
            <Slider4 />
            <section className="designer-text-box">
                <p className="text-large">
                    “What’s never questioned here is, whose standards of authenticity are we being held up to in the first place?”
                </p>
                <p className="text-small align-bottom">
                    “It’s not just that you internalize the shame; rather, it becomes you. You no longer need the people at school telling you not to dress like that; you already do it to yourself.”
                    ― Alok Vaid-Menon, Beyond the Gender Binary
                </p>
            </section>
            <Slider2 />
            <div className="video-interview-container">
                <iframe
                    src="https://player.vimeo.com/video/110527266?h=64b18d4462&amp"
                    title="video interview"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    className="video-interview"
                />
            </div>

            <section>
                <Socials/>
                <footer
                    style={{
                        fontFamily: `Roboto, Sans-Serif`,
                        color: `white`,
                        marginTop: `var(--space-5)`,
                        fontSize: `var(--font-sm)`,
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

export default App;
