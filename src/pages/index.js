import React from 'react'
import { SWRConfig } from "swr";
import "./App.css";
import Slider from "../components/slider";
import Image from "../components/image";
import { Link } from "gatsby"
import { Users } from 'react-feather';

function App() {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: (resource, init) =>
                    fetch(resource, init).then((res) => res.json()),
            }}
        >
            <div className="App background">
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
                <Slider />
            </div>
        </SWRConfig>
    );
}

export default App;
