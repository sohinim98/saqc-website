import React, { useEffect, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import sr, { srConfig } from "../utils/sr"

const InstaCard = ({ photo, index }) => {
    const revealCard = useRef(null)
    const delay = `${index}00`
    const { permalink, image, caption } = photo

    useEffect(() => {
        sr.reveal(revealCard.current, srConfig({ origin: "left", delay }, "20px"))
        return () => {
            sr.destroy()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <a
            href={`${permalink}`}
            target="_blank"
            rel="noopener noreferrer"
            ref={revealCard}
        >
            <GatsbyImage image={image} alt={caption} />
        </a>
    )
}
export default InstaCard
