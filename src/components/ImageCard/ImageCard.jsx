import css from "./ImageCard.module.css";

const ImageCard = ({ imageProps, setModalSizeImg, setIsModalOpen }) => {
    const { alt_description, urls: { regular, small } } = imageProps;
    const handleClick = () => {
        setIsModalOpen(true);
        setModalSizeImg(regular)
    }

    return (
        <li className={css.card}>
            <img
                onClick={() => handleClick()}
                src={small}
                alt={alt_description}
                width="300"
                height="300"
                className={css.cardImg} />
        </li>
    )
}

export default ImageCard;