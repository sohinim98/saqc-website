import React from "react";
import { Carousel } from "3d-react-carousal";
import "./slider.css";

const Slider3 = () => {

    const images = ["https://i.imgur.com/jzgn6lC.jpeg", "https://i.imgur.com/CmWhzVt.jpeg", "https://i.imgur.com/AlBoJT9.jpeg",
    "https://i.imgur.com/IC40og6.jpeg", "https://i.imgur.com/eFjpcMx.jpeg", "https://i.imgur.com/qPogedX.jpeg",
    "https://i.imgur.com/kqmLpPG.jpeg", "https://i.imgur.com/54rOUd6.jpeg", "https://i.imgur.com/16e4Suc.jpeg",
    "https://i.imgur.com/PJvuEPk.jpeg", "https://i.imgur.com/CmKbyzm.jpeg", "https://i.imgur.com/Mp8ead0.jpeg",
    "https://i.imgur.com/OhXaKej.jpeg"];
    const slides = images.map((image, index) => {
        return (
            <div className="image_wrapper">
                <a href={images[index]} target="_blank" rel="noopener noreferrer">
                    <img className="carousel_img" src={images[index]} alt="Monthly Project" />
                </a>
                <p className="mask image_description">
                    Recreating A Suitable Boy by Vikram Seth (1993)
                </p>
            </div>
        )});
    return (
        <div style={{ margin: "20px" }}>
            <Carousel slides={slides}></Carousel>
        </div>
    );
};

export default Slider3;
