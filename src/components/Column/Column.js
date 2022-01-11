import styles from './Column.module.scss';

const Column = prompt => {
    return (
    <article className={styles.column}>
        <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + prompt.icon}/> {prompt.title} </h2>  
    </article>
    );
};

export default Column;