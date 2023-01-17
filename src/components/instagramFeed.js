import React from "react"
import useInstagram from "../hooks/useInstagram"
import InstaCard from "./InstaCard"
import "./instagramFeed.css"

const InstagramFeed = () => {
    const instaPhotos = useInstagram();
    return (
        <section>
            <p className="instagram-grid-header">Follow us on Instagram!</p>
            <section className="instagram-grid">
                    {instaPhotos.map((photo, index) => {
                        return (
                            <InstaCard photo={photo} index={index} key={index} />
                            );
                    })}
            </section>
        </section>
    )
}

export default InstagramFeed
