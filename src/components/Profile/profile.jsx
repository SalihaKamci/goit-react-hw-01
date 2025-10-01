import css from  './profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.content}>
        <div>
          <img src={image} alt="User avatar" className={css.imageProfile} />
          <h2>{name}</h2>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <ul className={css.list}>
          <li>
            <span>Followers</span>
            <span className={css.textbold}>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={css.textbold}>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={css.textbold}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
