import React from "react";
import { Carousel } from "3d-react-carousal";
import "./slider.css";

const Slider4 = () => {

    const images = ["https://i.imgur.com/ExyZ8qf.jpeg", "https://i.imgur.com/0BfgEe6.jpeg", "https://i.imgur.com/qTQ9TAj.jpeg", "https://i.imgur.com/9E3yNBu.jpeg", "https://i.imgur.com/0d9bXXz.jpeg",
    "https://i.imgur.com/5sdsAmR.jpeg", "https://i.imgur.com/1iqULG9.jpeg", "https://i.imgur.com/9ydjst3.jpeg",
    "https://i.imgur.com/S593Z13.jpeg", "https://i.imgur.com/kOZcF9d.jpeg", "https://i.imgur.com/TdRsUQd.jpeg",
    "https://i.imgur.com/S7r2X08.jpeg", "https://i.imgur.com/npU5dC0.jpeg", "https://i.imgur.com/NR3eKTa.jpeg",
    "https://i.imgur.com/Y47VDI4.jpeg", "https://i.imgur.com/X8MfG8H.jpeg", "https://i.imgur.com/njXsfBN.jpeg", "https://i.imgur.com/ejTxwR6.jpeg"];
    const slides = images.map((image, index) => {
        return (
            <div className="image_wrapper">
                <a href={images[index]} target="_blank" rel="noopener noreferrer">
                    <img className="carousel_img" src={images[index]} alt="Monthly Project" />
                </a>
                <p className="mask image_description">
                    Recreating We Have Always Been Here: A Queer Muslim Memoir by Samra Habib (2019)
                </p>
            </div>
        )});
    return (
        <div style={{ margin: "20px" }}>
            <Carousel slides={slides}></Carousel>
        </div>
    );
};

export default Slider4;
