import css from './friend.module.css'

const FriendList = ({ ListFrends }) => {
    return (
        <ul className={css.ListFrend}>
            {ListFrends.map((frnd) => {
                return (
                    <li className={css.ListItem} key={frnd.id}>
                        <div>
                            <img src={frnd.avatar} alt="Avatar" width="48" />
                            <p>{frnd.name}</p>
                            {frnd.isOnline == true ? (<p className={css.online}>Online</p>) : (<p className={css.offline}>Offline</p>)
                            }
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}

export default FriendList

