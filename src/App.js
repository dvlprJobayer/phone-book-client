import { useEffect, useState } from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import AddModal from './components/AddModal/AddModal';
import SingleContact from './components/SingleContact/SingleContact';
import DeleteModal from './components/DeleteModal/DeleteModal';


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


function App() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenTwo, setIsOpenTwo] = useState(false);
    const [selectContact, setSelectContact] = useState({});
    const [allContact, setAllContact] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-contact').then(res => res.json()).then(data => {
            setAllContact(data);
        })
    }, []);

    return (
        <div className="container">
            <PageHeader openModal={setIsOpen} />
            <div className="contact-container">
                {
                    allContact.map(contact => <SingleContact
                        key={contact._id}
                        contact={contact}
                        setIsOpenTwo={setIsOpenTwo}
                        setSelectContact={setSelectContact}
                    />)
                }
            </div>
            <AddModal
                setAllContact={setAllContact}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
            />
            <DeleteModal
                customStyles={customStyles}
                modalIsOpenTwo={modalIsOpenTwo}
                setIsOpenTwo={setIsOpenTwo}
                selectContact={selectContact}
                setAllContact={setAllContact}
            />
        </div>
    );
}

export default App;
