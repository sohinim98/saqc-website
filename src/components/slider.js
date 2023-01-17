import React from "react";
import { Carousel } from "3d-react-carousal";
import "./slider.css";

const Slider = () => {

    const images = ["https://i.imgur.com/B8FTp6t.jpeg", "https://i.imgur.com/B8FTp6t.jpeg"];
    const slides = images.map((image, index) => {
        return (
            <div className="image_wrapper">
                <a href={images[index]} target="_blank" rel="noopener noreferrer">
                    <img className="carousel_img" src={images[index]} alt="Monthly Project" />
                </a>
                <p className="mask image_description">
                    GR's mock caption to be replaced with original.
                </p>
            </div>
        )});
    return (
        <div style={{ margin: "20px" }}>
            <Carousel slides={slides}></Carousel>
        </div>
    );
};

export default Slider;
