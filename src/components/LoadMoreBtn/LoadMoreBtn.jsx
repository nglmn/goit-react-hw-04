import css from "./LoadMoreBtn.module.css";

//prop types react
/* 
    1. когда в масиве фот-фий есть єлементи і пейдж < тотал пейдж
*/

const LoadMoreBtn = ({ showMoreBtn, setCurrentPage, currentPage }) => {
    return (
        <>
            {showMoreBtn &&
                <button
                    className={css.loadBtn}
                    type="button"
                    onClick={() => setCurrentPage(currentPage + 1)}>Load more
                </button >}
        </>
    )
}

export default LoadMoreBtn