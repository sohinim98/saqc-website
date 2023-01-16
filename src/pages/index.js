import React, { useState, useEffect } from 'react'
import "./App.css";
import Slider from "../components/slider";
import Image from "../components/image";
import { Link } from "gatsby"
import {Users} from 'react-feather';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Piya from "../assets/piya-tose-naina-lage-re.mp3";
import Socials from "../components/socials";
import ImageSwapper from "../components/imageSwapper";

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
            <ImageSwapper/>
            <section className="message-of-the-month">
                <p>
                    Gummi bears bear claw halvah cotton candy apple pie caramels brownie sweet roll. Macaroon donut marshmallow gummi bears macaroon. Croissant pudding sweet roll brownie candy canes fruitcake dessert. Caramels chocolate jelly cheesecake bonbon bonbon. Chocolate donut tart cupcake cake. Cake tart gingerbread wafer muffin. Tootsie roll cotton candy pastry donut pudding icing jelly beans apple pie. Lollipop muffin jujubes halvah icing chupa chups marshmallow macaroon chupa chups. Jelly beans donut oat cake candy lemon drops dessert. Cheesecake lollipop pudding jelly beans croissant gingerbread lollipop chocolate. Bonbon cheesecake pie brownie muffin wafer shortbread bear claw. Shortbread marshmallow dessert biscuit dessert halvah. Bonbon marshmallow toffee jelly beans gummi bears marzipan jelly brownie. Tootsie roll cotton candy lollipop chocolate bar donut pastry.
                </p>
                <p>
                    Bonbon macaroon danish tiramisu tart marshmallow tiramisu cotton candy. Sesame snaps pastry bear claw cookie chocolate cake jelly beans icing. Toffee muffin tart cake sesame snaps tart tart chocolate cake sweet roll. Lollipop cheesecake marshmallow chupa chups candy canes. Dessert jelly toffee gummies sweet roll pie. Biscuit tiramisu marzipan caramels carrot cake cake. Topping muffin fruitcake candy canes croissant cake liquorice gummies carrot cake. Marshmallow sweet oat cake ice cream ice cream lemon drops cupcake jelly beans candy. Apple pie gummies lollipop chupa chups bonbon. Jelly-o bear claw bonbon carrot cake cheesecake lollipop marzipan chupa chups. Gummi bears carrot cake gingerbread oat cake pie. Danish cotton candy jelly gummies bear claw. Biscuit wafer gingerbread caramels pie.
                </p>
            </section>
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
