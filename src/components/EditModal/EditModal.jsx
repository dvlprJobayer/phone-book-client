import React from 'react';
import Modal from 'react-modal';
import { FaTimesCircle } from 'react-icons/fa';

const EditModal = (props) => {
    const { customStyles, modalIsOpenThree, setIsOpenThree, selectContact, setAllContact } = props;

    function closeModal() {
        setIsOpenThree(false);
    }

    const editContact = event => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const phone = event.target.phone.value;
        const contact = {
            firstName,
            lastName,
            phone
        }
        if (firstName !== '' || lastName !== '' || phone !== '') {
            fetch(`http://localhost:5000/edit-contact/${selectContact._id}`, {
                method: 'PATCH',
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
            isOpen={modalIsOpenThree}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Edit Contact Modal"
        >
            <div className="close-btn-container">
                <FaTimesCircle onClick={closeModal} className="close-btn" />
            </div>
            <div className="form-container">
                <h2>Edit Contact</h2>
                <form onSubmit={editContact}>
                    <input name='firstName' type="text" placeholder='First Name' />
                    <input name='lastName' type="text" placeholder='Last Name' />
                    <input name='phone' type="text" placeholder='Phone Number' />
                    <input className='submit-btn' type="submit" value="Edit Contact" />
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;