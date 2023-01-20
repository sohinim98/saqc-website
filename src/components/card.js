import "./card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Card = ({ images, caption }) => {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    return (
        <animated.div
            className="card"
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <a href={images} target="_blank" rel="noopener noreferrer">
                <img src={images} alt="Monthly Project" />
                <section className="mask">
                    <p className="image_description">{caption}</p>
                </section>
            </a>
        </animated.div>
    );
}

export default Card;
