import Carousel from "react-spring-3d-carousel";
import React, { useState } from "react";
import { config } from "react-spring";

const ImageCarousel = ({images, height, width, margin}) =>  {
    const table = images.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [goToSlide, setGoToSlide] = useState(null);
    const [cards] = useState(table);

    return (
        <div
            style={{ width: width, height: height, margin: margin }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={2}
                showNavigation={true}
                animationConfig={config.gentle}
            />
        </div>
    );
}

export default ImageCarousel
