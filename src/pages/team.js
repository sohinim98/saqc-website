import React from 'react'
import Image from "../components/image";
import { Link } from "gatsby"
import "./App.css";
import { Home } from 'react-feather';
import Socials from "../components/socials";
import {SWRConfig} from "swr";

const Team = () => {
    return (
        <div className="background">
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
                    <Link to="/">
                        <Home className="nav-bar--icon"/>
                    </Link>
                </li>
            </ul>
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
    );
}

export default Team;
