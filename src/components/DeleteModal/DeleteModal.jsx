import React from 'react';
import Modal from 'react-modal';
import './DeleteModal.css';

const DeleteModal = (props) => {
    const { modalIsOpenTwo, setIsOpenTwo, customStyles, selectContact, setAllContact } = props;

    function closeModal() {
        setIsOpenTwo(false);
    }

    const deleteContact = () => {
        fetch(`http://localhost:5000/delete-contact/${selectContact._id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            setAllContact(oldContact => (
                oldContact.filter(contact => contact !== selectContact)
            ))
            closeModal();
        })
    }

    return (
        <Modal
            isOpen={modalIsOpenTwo}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Delete Contact Modal"
        >
            <h2>Are you Sure you want to delete!</h2>
            <div className="delete-btn-container">
                <button onClick={closeModal} className='cancel-btn'>Cancel</button>
                <button onClick={deleteContact} className='delete-btn'>Delete</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;