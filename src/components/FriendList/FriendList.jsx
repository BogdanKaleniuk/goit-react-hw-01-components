import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import { FriendListBox } from './friendlist.styled';

export default function FriendList({ friends }) {
  return (
<FriendListBox>
  {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
</FriendListBox>
  );
}

  FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};