import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/friendListItem';
import { FriendList } from './FriendList.styled';
export default function Friends({ dataFriends }) {
  return (
    <FriendList>
      {dataFriends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendList>
  );
}

Friends.propTypes = {
  dataFriends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
