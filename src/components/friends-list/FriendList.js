import PropTypes from 'prop-types';
import '../friends-list/friends.css';

export default function FriendList({ friends }) {
  return (
    <section>
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className="item" key={id}>
            <span className={isOnline ? 'status' : 'status offline'}></span>

            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
