import css from  './profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
      <div className={css.content}>
        <div>
          <img src={image} alt="User avatar" className={css.imageProfile} />
          <h2>{name}</h2>
          <p className={css.profilP}>@{tag}</p>
          <p className={css.profilP}>{location}</p>
        </div>
        <ul className={css.list}>
          <li className={css.ProfileLi}>
            <span>Followers</span>
            <span className={css.textbold}>{stats.followers}</span>
          </li>
          <li className={css.ProfileLi}>
            <span>Views</span>
            <span className={css.textbold}>{stats.views}</span>
          </li>
          <li className={css.ProfileLi}>
            <span>Likes</span>
            <span className={css.textbold}>{stats.likes}</span>
          </li>
        </ul>
      </div>
  );
};

export default Profile;
