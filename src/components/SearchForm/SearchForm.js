import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearching } from '../../redux/store';
import { useEffect } from 'react';


const SearchForm = () => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateSearching(title));
        }, []);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearching( title ));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)} />
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
};

export default SearchForm;