import css from "./ImageCard.module.css";

const ImageCard = ({ id, card: { urls: { small, full }, alt_description }, setGetImageParams, setIsOpen }) => {
    const getCardData = () => {
        setGetImageParams({
            id: id,
            full: full
        })
        setIsOpen(true)
    }
    return (
        <li onClick={() => getCardData()} className={css.card}>
            <img src={small} alt={alt_description} width="200" height="200" className={css.cardImg} />
        </li>
    )
}

export default ImageCard