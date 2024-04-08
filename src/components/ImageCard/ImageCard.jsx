import css from "./ImageCard.module.css";

const ImageCard = ({ id, card: { urls: { small, full }, alt_description }, setGetId, setIsOpen }) => {
    const getCardData = () => {
        setGetId({
            id: id,
            full: full
        })
        setIsOpen(true)
    }
    return (
        <li onClick={() => getCardData()} className={css.card}>
            <div>
                <img src={small} alt={alt_description} width="200" height="200" className={css.cardImg} />
            </div>
        </li>
    )
}

export default ImageCard