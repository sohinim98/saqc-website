import React, { useState, useEffect } from 'react'
import { SWRConfig } from "swr";
import "./App.css";
import Slider from "../components/slider";
import Image from "../components/image";
import { Link } from "gatsby"
import { Users } from 'react-feather';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Piya from "../assets/piya-tose-naina-lage-re.mp3";
import Socials from "../components/socials";

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
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: (resource, init) =>
                    fetch(resource, init).then((res) => res.json()),
            }}
        >
            <div className="App background">
                {donationMessage ?
                    <Confetti
                    width={width}
                    height={height}
                /> : ""}
                <ul className="nav-bar">
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
                <div className="audio">
                    <p>track of the month खास आपके लिए</p>
                    <audio id="player" controls autoPlay loop>
                        <source src={Piya} type="audio/mp3"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <Slider />
                {donationMessage ? donationMessage:
                    <form action="/api/@raae/gatsby-plugin-donations/donation" method="POST">
                    <fieldset>
                        <p>
                            <label htmlFor="amount">Amount: </label>
                            <br />
                            <input type="number" id="amount" name="amount" defaultValue="10" />
                        </p>
                        <p>
                            <button>Donate</button>
                        </p>
                    </fieldset>
                </form>}
                <section>
                    <Socials/>
                    <footer
                        style={{
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
        </SWRConfig>
    );
}

export default App;
