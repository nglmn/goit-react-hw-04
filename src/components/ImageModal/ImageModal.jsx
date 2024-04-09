import ReactModal from "react-modal";
import Modal from "react-modal";
import { useState } from "react";

import css from "./ImageModal.module.css";

const ImageModal = ({ getImageParams, isOpen, setIsOpen }) => {
    return (
        <Modal
            isOpen={isOpen}
            className={css.modal}
            overlayClassName={css.overlay}
            onRequestClose={() => setIsOpen(false)}>
            <img src={getImageParams.full} alt={getImageParams.id} width="700" height="500" className={css.modalImage} />
        </Modal>
    )
}

export default ImageModal