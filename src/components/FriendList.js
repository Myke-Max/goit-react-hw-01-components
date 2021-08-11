import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
