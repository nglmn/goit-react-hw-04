import ReactModal from "react-modal";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ImageModal = ({ getId: { id, full } }) => {
    ReactModal.setAppElement(id);

    const [modalIsOpen, setIsOpen] = useState(false);
    console.log(id, full);

    return (
        <Modal isOpen={modalIsOpen}>
            <img src={full} alt={id} />
        </Modal>
    )
}

export default ImageModal