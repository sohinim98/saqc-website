import React from "react";
import { Carousel } from "3d-react-carousal";
import { useSuperHeroes } from "./useSuperHeroes";
import "./slider.css";

const Slider = () => {
    const { heroes, isLoading, isError } = useSuperHeroes();
    if (isLoading) return <div>Loading ...</div>;
    if (isError) return <div>Error while loading data</div>;
    const slides = heroes.slice(0, 10).map((hero) => {
        return (
            <div key={hero.id} className="hero__wrapper">
                <div
                    className={`rectangle ${
                        hero.biography["alignment"] === "bad" ? "bad__alignment" : ""
                    }`}
                >
                    <div>ALIGNMENT:</div>
                    <div className="alignment__value">{hero.biography["alignment"]}</div>
                </div>
                <img className="hero__img" src={hero.images["md"]} alt={hero.name} />
                <div className="mask">
                    <h3 className="hero__name">{hero.name}</h3>
                    <div className="hero__info">
                        <ul>
                            <li>
                                FULL NAME:<span>{hero.biography["fullName"]}</span>
                            </li>
                            <li>
                                PLACE OF BIRTH:<span>{hero.biography["placeOfBirth"]}</span>
                            </li>
                            <li>
                                PUBLISHER:<span>{hero.biography["publisher"]}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hero__powerstats">
                        <div className="col">
                            <ul>
                                <li>
                                    INTELLIGENCE:<span>{hero.powerstats["intelligence"]}</span>
                                </li>
                                <li>
                                    SPEED:<span>{hero.powerstats["speed"]}</span>
                                </li>
                                <li>
                                    POWER:<span>{hero.powerstats["power"]}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>
                                    STRENGTH:<span>{hero.powerstats["strength"]}</span>
                                </li>
                                <li>
                                    DURABILITY:<span>{hero.powerstats["durability"]}</span>
                                </li>
                                <li>
                                    COMBAT:<span>{hero.powerstats["combat"]}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div style={{ margin: "20px" }}>
            <Carousel slides={slides}></Carousel>
        </div>
    );
};

export default Slider;
