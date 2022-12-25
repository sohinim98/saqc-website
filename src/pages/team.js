import React from 'react'
import Image from "../components/image";
import { Link } from "gatsby"
import "./App.css";
import { Home } from 'react-feather';

function App() {
    return (
        <div className="Team">
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
        </div>
    );
}

export default App;
