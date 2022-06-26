import React from 'react';
import './SingleContact.css';
import { IoIosCall } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const SingleContact = ({ contact }) => {
    return (
        <div className="single-contact">
            <div>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <h4><IoIosCall /> {contact.phone}</h4>
            </div>
            <div>
                <FaPencilAlt />
                <FaTrashAlt />
            </div>
        </div>
    );
};

export default SingleContact;