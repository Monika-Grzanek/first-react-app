import styles from './Favorite.module.scss';
import PageTitle from './../PageTitle/PageTitle.js';
import { getFilteredFavoriteCards } from './../../redux/store';
import { useSelector } from 'react-redux';
import Card from './../Card/Card.js';

const Favorite = () => {
    const favoriteCards = useSelector((state) => getFilteredFavoriteCards(state));
    return (
        <article className={styles.column}>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cards}>
                {favoriteCards.map(card => <Card key={card.id} {...card} />)}
            </ul> 
        </article>
    )
}

export default Favorite; 