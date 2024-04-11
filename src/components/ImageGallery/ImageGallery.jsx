import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, setModalSizeImg, setIsModalOpen }) => {
    return (
        <ul className={css.gallery}>
            {images.map(({ id, ...imageProps }) => (
                <ImageCard key={id} imageProps={imageProps} id={id} setModalSizeImg={setModalSizeImg} setIsModalOpen={setIsModalOpen} />
            ))}
        </ul>
    )
}

export default ImageGallery;