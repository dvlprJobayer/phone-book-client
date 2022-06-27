import React, { useState } from 'react';
import Modal from 'react-modal';
import './DeleteModal.css';

const DeleteModal = (props) => {
    const { modalIsOpenTwo, setIsOpenTwo, customStyles, selectContact, refetch } = props;

    const [loading, setLoading] = useState(false);

    function closeModal() {
        setIsOpenTwo(false);
    }

    const deleteContact = () => {
        setLoading(true);
        fetch(`https://young-harbor-61514.herokuapp.com/delete-contact/${selectContact._id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            refetch();
            setLoading(false);
            closeModal();
        }).catch(err => {
            setLoading(false);
            alert('Error', err);
        })
    }

    return (
        <Modal
            isOpen={modalIsOpenTwo}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Delete Contact Modal"
        >
            {
                loading ? <h2>Loading...</h2> :
                    <>
                        <h2>Are you Sure you want to delete!</h2>
                        <div className="delete-btn-container">
                            <button onClick={closeModal} className='cancel-btn'>Cancel</button>
                            <button onClick={deleteContact} className='delete-btn'>Delete</button>
                        </div>
                    </>
            }
        </Modal>
    );
};

export default DeleteModal;