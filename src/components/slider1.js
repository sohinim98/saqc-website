import React from "react";
import { Carousel } from "3d-react-carousal";
import "./slider.css";

const Slider1 = () => {

    const images = ["https://i.imgur.com/EaJCoCM.jpeg", "https://i.imgur.com/W8f4gVi.jpeg",
        "https://i.imgur.com/zqDW61X.jpeg", "https://i.imgur.com/asD46pt.jpeg", "https://i.imgur.com/nVmsliA.jpeg",
        "https://i.imgur.com/giTl4bk.jpeg", "https://i.imgur.com/cvzN7eB.jpeg", "https://i.imgur.com/9foXsc1.jpeg",
        "https://i.imgur.com/CXv4X9v.jpeg", "https://i.imgur.com/543JiOE.jpeg", "https://i.imgur.com/JQ5HgwH.jpeg",
        "https://i.imgur.com/9fRkpJh.jpeg", "https://i.imgur.com/Uc1jLjc.jpeg"];
    const slides = images.map((image, index) => {
        return (
            <div className="image_wrapper">
                <a href={images[index]} target="_blank" rel="noopener noreferrer">
                    <img className="carousel_img" src={images[index]} alt="Monthly Project" />
                </a>
                <p className="mask image_description">
                    Recreating Giovanni's Room by James Baldwin (1956)
                </p>
            </div>
        )});
    return (
        <div style={{ margin: "20px" }}>
            <Carousel slides={slides}></Carousel>
        </div>
    );
};

export default Slider1;
