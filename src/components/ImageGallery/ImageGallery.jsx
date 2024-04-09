import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imageGallery, setGetImageParams, setIsOpen }) => {
    return (
        <>
            {Boolean(imageGallery.length) &&
                <ul className={css.gallery}>
                    {imageGallery.map(({ id, ...card }) => (
                        <ImageCard key={id} card={card} id={id} setGetImageParams={setGetImageParams} setIsOpen={setIsOpen} />
                    ))}
                </ul >
            }
        </>
    )
}

export default ImageGallery;