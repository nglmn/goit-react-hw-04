
import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imageGallery, setGetId, setIsOpen }) => {
    return (
        <>
            {Boolean(imageGallery.length) &&
                <ul className={css.gallery}>
                    {imageGallery.map(({ id, ...card }) => (
                        <ImageCard key={id} card={card} id={id} setGetId={setGetId} setIsOpen={setIsOpen} />
                    ))}
                </ul >
            }
        </>
    )
}

export default ImageGallery;