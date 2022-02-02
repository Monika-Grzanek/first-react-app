import styles from './Card.module.scss';
import {cardFavorite} from '../../redux/store.js';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(cardFavorite({ isFavorite: props.isFavorite, id: props.id }));
    };
    return (
        <li className={styles.card} key={props.id}>
            {props.title}
            <button onClick={handleToggleFavorite}><span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)} /></button>
        </li>
    );
};

export default Card;