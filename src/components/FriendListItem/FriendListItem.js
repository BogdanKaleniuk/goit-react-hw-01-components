import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from './friendlistItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
<Item class="item">
  <Status class="status" isOnline={isOnline}>{isOnline}</Status>
  <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
  <Name class={name}></Name>
</Item>
    );
}

FriendListItem.protoType = {
  avatar: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired, 
};

