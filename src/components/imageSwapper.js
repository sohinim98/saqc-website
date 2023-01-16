import * as React from "react"
import {useEffect, useState} from "react";
import Image from "./image";
import "./imageSwapper.css"

const ImageSwapper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['gr1.jpg', 'gr2.jpg'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 2000)

        return () => clearInterval(intervalId);
    }, [currentIndex])

    return <div>
        <Image
            className="home-cover"
            src={images[currentIndex]}
            alt="team's cover photo"
        />
    </div>
};

export default ImageSwapper
