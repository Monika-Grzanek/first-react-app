import styles from './Card.module.scss';
import {cardFavorite} from '../../redux/store';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(cardFavorite({ isFavorite: props.isFavorite, cardId: props.id }));
    };
    return (
        <li className={styles.card}>
            {props.title}
            <button onClick={handleSubmit}><span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)} /></button>
        </li>
    );
};

export default Card;