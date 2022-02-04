import styles from './Favorite.module.scss';
import PageTitle from './../PageTitle/PageTitle.js';
import { getFilteredFavoriteCards } from './../../redux/cardsReducer';
import { useSelector } from 'react-redux';
import Card from './../Card/Card.js';

const Favorite = () => {
    const favoriteCards = useSelector((state) => getFilteredFavoriteCards(state));

    return (
        <article>
            <div className={styles.favorite}>
                <PageTitle>Favorite</PageTitle>
            </div>
            <div className={styles.wrapper} >
                <div className={styles.column}>
                    <ul className={styles.cards}>
                        {favoriteCards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
                    </ul> 
                </div>
            </div>
        </article>
    )
}

export default Favorite; 