import styles from './Card.module.scss';
import {cardFavorite, removeCard} from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(cardFavorite({ id: props.id }));
    };

    const handleRemoveCard = e => {
        e.preventDefault();
        dispatch(removeCard({id: props.id}));
    }
    return (
        <li className={styles.card} key={props.id}>
            {props.title}
            <div className={styles.btn}>
                <button onClick={handleToggleFavorite}><span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)} /></button>
                <button onClick={handleRemoveCard}><span className='fa fa-trash' /></button>
            </div>
        </li>
    );
};

export default Card;