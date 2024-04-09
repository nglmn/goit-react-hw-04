import ReactModal from "react-modal";

import { useState } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import useGetImages from "./hooks/useGetImages";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import "./App.css";

ReactModal.setAppElement('#root');

const App = () => {
	const { imageGallery, loading, errorMessage, setSearch, onLoadMore, page } = useGetImages();
	const [getImageParams, setGetImageParams] = useState({
		id: 0,
		full: ""
	});
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<SearchBar setSearch={setSearch} />
			<div className="content">
				<ErrorMessage errorMessage={errorMessage} />
				<ImageGallery
					imageGallery={imageGallery.data}
					setGetImageParams={setGetImageParams}
					setIsOpen={setIsOpen} />
				{loading
					? <Loader loading={loading} />
					: <LoadMoreBtn
						onLoadMore={onLoadMore}
						imageGallery={imageGallery}
						page={page} />
				}
				<ImageModal
					getImageParams={getImageParams}
					isOpen={isOpen}
					setIsOpen={setIsOpen} />
			</div>
		</>
	)
}

export default App;