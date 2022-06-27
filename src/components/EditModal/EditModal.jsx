import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimesCircle } from 'react-icons/fa';

const EditModal = (props) => {
    const { customStyles, modalIsOpenThree, setIsOpenThree, selectContact, refetch } = props;

    const [loading, setLoading] = useState(false);

    function closeModal() {
        setIsOpenThree(false);
    }

    const editContact = event => {
        event.preventDefault();
        const firstName = event.target.firstName.value || selectContact.firstName;
        const lastName = event.target.lastName.value || selectContact.lastName;
        const phone = event.target.phone.value || selectContact.phone;
        const contact = {
            firstName,
            lastName,
            phone
        }
        if (firstName !== '' || lastName !== '' || phone !== '') {
            setLoading(true);
            fetch(`https://young-harbor-61514.herokuapp.com/edit-contact/${selectContact._id}`, {
                method: 'PATCH',
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
                console.log(error);
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
            {
                loading ? <h2>Loading...</h2> :
                    <div className="form-container">
                        <h2>Edit Contact</h2>
                        <form onSubmit={editContact}>
                            <input name='firstName' type="text" placeholder='First Name' />
                            <input name='lastName' type="text" placeholder='Last Name' />
                            <input name='phone' type="text" placeholder='Phone Number' />
                            <input className='submit-btn' type="submit" value="Edit Contact" />
                        </form>
                    </div>
            }
        </Modal>
    );
};

export default EditModal;