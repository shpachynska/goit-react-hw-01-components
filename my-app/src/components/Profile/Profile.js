import styles from './Profile.module.css'
import PropTypes from 'prop-types'
import noAvatarImg from './no-avatar.png'




function Profile({
    name,
    tag,
    location,
    avatar = noAvatarImg,
    stats
})
{
    return (<div className={styles.card}>
        <div className={styles.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>       

        <ul className={styles.stats}>
            <li className={styles.listitem}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.listitem}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.listitem}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>);
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}

export default Profile