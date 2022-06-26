import { useEffect, useState } from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import AddModal from './components/AddModal/AddModal';
import SingleContact from './components/SingleContact/SingleContact';

function App() {
    const [modalIsOpen, setIsOpen] = useState(false);
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
                    allContact.map(contact => <SingleContact contact={contact} />)
                }
            </div>
            <AddModal setAllContact={setAllContact} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default App;
