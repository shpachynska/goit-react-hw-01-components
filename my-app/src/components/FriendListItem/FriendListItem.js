import PropTypes from 'prop-types'
import styles from './FriendListItem.module.css'
import noAvatarImg from '../../no-avatar.png'

function FriendListItem({ avatar = noAvatarImg, name, isOnline }) {
    return (
        <div>
            {isOnline ? (<span className={styles.online}></span>) : (<span className={styles.offline}></span>)}
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{ name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,    
};

export default FriendListItem