import css from "./LoadMoreBtn.module.css";

//prop types react
/* 
    1. когда в масиве фот-фий есть єлементи і пейдж < тотал пейдж
*/
const LoadMoreBtn = ({ onLoadMore, imageGallery, page }) => {

    return (
        <>
            {(Boolean(imageGallery.data.length) && page < imageGallery.total_pages) &&
                <button type="button" onClick={onLoadMore} className={css.loadBtn}>Load More</button>
            }
        </>
    )
}

export default LoadMoreBtn