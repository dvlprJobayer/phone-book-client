import React from 'react';
import './PageHeader.css';
import { MdPermContactCalendar } from 'react-icons/md';

const PageHeader = ({ openModal }) => {
    return (
        <>
            <div className="page-title">
                <MdPermContactCalendar className='contact-icon' />
                <h1>Phone Book App</h1>
            </div>
            <div className="add-contact">
                <h3>Contacts</h3>
                <button onClick={() => openModal(true)}>+ Add Contact</button>
            </div>
            <div className="contact-search">
                <input type="text" placeholder='Search for contact by name' />
            </div>
        </>
    );
};

export default PageHeader;