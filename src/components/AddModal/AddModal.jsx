import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddModal.css';
import { FaTimesCircle } from 'react-icons/fa';


Modal.setAppElement('#root');

const PageModal = ({ modalIsOpen, setIsOpen, refetch, customStyles }) => {
    const [loading, setLoading] = useState(false);

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
            setLoading(true);
            fetch('https://young-harbor-61514.herokuapp.com/add-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact)
            }).then(response => response.json()).then(data => {
                refetch();
                setLoading(false);
                closeModal();
            }).catch((error) => {
                setLoading(false);
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
            {
                loading ? <h2>Loading...</h2> :
                    <div className="form-container">
                        <h2>Add Contact</h2>
                        <form onSubmit={addContact}>
                            <input name='firstName' type="text" placeholder='First Name' />
                            <input name='lastName' type="text" placeholder='Last Name' />
                            <input name='phone' type="text" placeholder='Phone Number' />
                            <input className='submit-btn' type="submit" value="Add Contact" />
                        </form>
                    </div>
            }
        </Modal>
    );
};

export default PageModal;