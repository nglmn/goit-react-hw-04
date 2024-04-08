import { RotatingLines } from "react-loader-spinner"
import css from './Loader.module.css';
const Loader = ({ loading }) => {
    return (
        <div className={css.loader}>
            {loading &&
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="#3916ff"
                    strokeWidth="1"
                    animationDuration="1"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""

                />}
        </div>
    )
}

export default Loader