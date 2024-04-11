import { useState } from "react";
import Modal from 'react-modal';

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import useFetch from "./hooks/useFetch";

import "./App.css";

Modal.setAppElement('#root');

const App = () => {
	const [modalSizeImg, setModalSizeImg] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { images, setSearch, loading, showMoreBtn, errorMessage, setCurrentPage, currentPage } = useFetch();

	return (
		<>
			<SearchBar setSearch={setSearch} />
			<div className="content">
				<ImageGallery
					images={images.results}
					setModalSizeImg={setModalSizeImg}
					setIsModalOpen={setIsModalOpen} />
				{loading
					? <Loader loading={loading} />
					: <LoadMoreBtn
						showMoreBtn={showMoreBtn}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage} />}
				<ErrorMessage errorMessage={errorMessage} />
				{modalSizeImg
					&& <ImageModal
						modalSizeImg={modalSizeImg}
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen} />}
			</div>
		</>
	)
}

export default App;