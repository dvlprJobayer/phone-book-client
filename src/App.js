import { useState } from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import PageModal from './components/PageModal/PageModal';

function App() {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div className="container">
            <PageHeader openModal={setIsOpen} />
            <PageModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default App;
