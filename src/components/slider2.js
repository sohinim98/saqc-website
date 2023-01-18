import React from "react";
import { Carousel } from "3d-react-carousal";
import "./slider.css";

const Slider2 = () => {

    const images = ["https://i.imgur.com/4cpYzaa.jpeg", "https://i.imgur.com/yFj694L.jpeg","https://i.imgur.com/VZwQyy2.jpeg",
        "https://i.imgur.com/wohCk3L.jpeg", "https://i.imgur.com/lCyRPBV.jpeg", "https://i.imgur.com/LSqlBBB.jpeg",
        "https://i.imgur.com/71H3AL0.jpeg", "https://i.imgur.com/vmU3Ubg.jpeg", "https://i.imgur.com/86MLJFe.jpeg", "https://i.imgur.com/nZLeIwM.jpeg"];
    const slides = images.map((image, index) => {
        return (
            <div className="image_wrapper">
                <a href={images[index]} target="_blank" rel="noopener noreferrer">
                    <img className="carousel_img" src={images[index]} alt="Monthly Project" />
                </a>
                <p className="mask image_description">
                    Recreating Beyond the Gender Binary by Alok Vaid-Menon (2020)
                </p>
            </div>
        )});
    return (
        <div style={{ margin: "20px" }}>
            <Carousel slides={slides}></Carousel>
        </div>
    );
};

export default Slider2;
