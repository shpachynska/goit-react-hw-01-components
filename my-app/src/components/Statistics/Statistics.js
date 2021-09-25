import PropTypes from 'prop-types'
import styles from './Statistics.module.css'

 
function Statistics({ title, stats }) {
    const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statList}>
                {stats.map(item => {                    
                    const randomColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;                    
                    return <li key={item.id} className={styles.item} style={{ background: randomColor}}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}</span>
                    </li>
                }
                )}
            </ul>
        </section>);
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}

export default Statistics;