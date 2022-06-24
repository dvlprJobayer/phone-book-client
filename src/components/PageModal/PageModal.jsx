import React from 'react';
import Modal from 'react-modal';
import './PageModal.css';


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

Modal.setAppElement('#root');


const PageModal = ({ modalIsOpen, setIsOpen }) => {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>Add Contact</h2>
            <form>

            </form>
            <button onClick={closeModal}>close</button>
        </Modal>
    );
};

export default PageModal;