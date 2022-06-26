import React from 'react';
import Modal from 'react-modal';
import './AddModal.css';
import { FaTimesCircle } from 'react-icons/fa';


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


const PageModal = ({ modalIsOpen, setIsOpen, setAllContact }) => {
    function closeModal() {
        setIsOpen(false);
    }

    const addContact = event => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const phone = event.target.phone.value;
        const contact = {
            firstName,
            lastName,
            phone
        }
        if (firstName !== '' && lastName !== '' && phone !== '') {
            fetch('http://localhost:5000/add-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact)
            }).then(response => response.json()).then(data => {
                setAllContact(oldContact => [...oldContact, contact]);
                closeModal();
            }).catch((error) => {
                alert('Error:', error);
            });
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add Contact Modal"
        >
            <div className="close-btn-container">
                <FaTimesCircle onClick={closeModal} className="close-btn" />
            </div>
            <div className="form-container">
                <h2>Add Contact</h2>
                <form onSubmit={addContact}>
                    <input name='firstName' type="text" placeholder='First Name' />
                    <input name='lastName' type="text" placeholder='Last Name' />
                    <input name='phone' type="text" placeholder='Phone Number' />
                    <input className='submit-btn' type="submit" value="Add Contact" />
                </form>
            </div>
        </Modal>
    );
};

export default PageModal;