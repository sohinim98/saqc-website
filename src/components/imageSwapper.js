import * as React from "react"
import {useEffect, useState} from "react";
import Image from "./image";
import "./imageSwapper.css"

const ImageSwapper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['gr1.jpg', 'asb1.jpg', 'whabh3.jpg', 'btgb1.jpg', 'gr2.jpg', 'asb14.jpg',
        'whabh13.jpg', 'btgb4.jpg', 'gr3.jpg', 'asb2.jpg', 'whabh22.jpg', 'btgb15.jpg'];

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
    }, [currentIndex,images.length])

    return <div>
        <Image
            className="home-cover"
            src={images[currentIndex]}
            alt="team's cover photo"
        />
    </div>
};

export default ImageSwapper
