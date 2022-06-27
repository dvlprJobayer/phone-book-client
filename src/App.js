import { useState } from 'react';
import './App.css';
import { useQuery } from 'react-query';
import PageHeader from './components/PageHeader/PageHeader';
import AddModal from './components/AddModal/AddModal';
import SingleContact from './components/SingleContact/SingleContact';
import DeleteModal from './components/DeleteModal/DeleteModal';
import EditModal from './components/EditModal/EditModal';


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
    const [modalIsOpenThree, setIsOpenThree] = useState(false);
    const [selectContact, setSelectContact] = useState({});
    const [searchInput, setSearchInput] = useState('');

    const { data: allContact, isLoading, refetch } = useQuery('allContact', () => fetch('https://young-harbor-61514.herokuapp.com/all-contact').then(res =>
        res.json()));

    const filteredContact = allContact?.filter(contact => (
        contact.lastName.toLowerCase().includes(searchInput.toLowerCase())
    ));

    return (
        <div className="container">
            <PageHeader openModal={setIsOpen} setSearchInput={setSearchInput} />
            {
                isLoading ? <h2>Loading...</h2> :
                    <div className="contact-container">
                        {
                            filteredContact.map(contact => <SingleContact
                                key={contact._id}
                                contact={contact}
                                setIsOpenTwo={setIsOpenTwo}
                                setIsOpenThree={setIsOpenThree}
                                setSelectContact={setSelectContact}
                            />)
                        }
                    </div>
            }
            <AddModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
                refetch={refetch}
            />
            <EditModal
                customStyles={customStyles}
                modalIsOpenThree={modalIsOpenThree}
                setIsOpenThree={setIsOpenThree}
                selectContact={selectContact}
                refetch={refetch}
            />
            <DeleteModal
                customStyles={customStyles}
                modalIsOpenTwo={modalIsOpenTwo}
                setIsOpenTwo={setIsOpenTwo}
                selectContact={selectContact}
                refetch={refetch}
            />
        </div>
    );
}

export default App;
