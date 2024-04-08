import ReactModal from "react-modal";
import Modal from "react-modal";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import useGetImages from "./hooks/useGetImages";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { useState } from "react";

import css from "../src/components/ImageModal/ImageModal.module.css";

ReactModal.setAppElement('#root');

const App = () => {
  const { imageGallery, userQuery, loading, errorMessage, setUserQuery, onLoadMore, page } = useGetImages();
  const [getId, setGetId] = useState({
    id: 0,
    full: ""
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SearchBar setUserQuery={setUserQuery} userQuery={userQuery} />
      <ErrorMessage errorMessage={errorMessage} />
      <ImageGallery imageGallery={imageGallery.data} getId={getId} setGetId={setGetId} setIsOpen={setIsOpen} />
      <Loader loading={loading} />
      <LoadMoreBtn onLoadMore={onLoadMore} imageGallery={imageGallery} page={page} />

      <Modal
        isOpen={isOpen}
        className={css.modal}
        overlayClassName={css.overlay}
        onRequestClose={() => setIsOpen(false)}>
        <img src={getId.full} alt={getId.id} width="1000" height="750" className={css.modalImage} />
      </Modal>
    </>
  )
}

export default App;