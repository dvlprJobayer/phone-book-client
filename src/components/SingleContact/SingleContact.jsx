import React from 'react';
import './SingleContact.css';
import { IoIosCall } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const SingleContact = ({ contact, setIsOpenTwo, setSelectContact }) => {

    const openDeleteModal = () => {
        setIsOpenTwo(true);
        setSelectContact(contact);
    }

    return (
        <div className="single-contact">
            <div className="contact-left">
                <h2>{contact.firstName} {contact.lastName}</h2>
                <h4><IoIosCall /> <span>{contact.phone}</span></h4>
            </div>
            <div className="contact-right">
                <button className='edit-btn'><FaPencilAlt /></button>
                <button onClick={openDeleteModal} className='delete-btn'><FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default SingleContact;