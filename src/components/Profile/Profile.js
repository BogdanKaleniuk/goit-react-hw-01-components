import PropTypes from 'prop-types';
import {
  Prof,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Text,
} from './profile.styled';


export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
    return (
<Prof class="profile">
  <Description class="description">
    <Avatar
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <UserName class="name">{username}</UserName>
    <Tag class="tag">@{tag}</Tag>
    <Location class="location">{location}</Location>
  </Description>

  <Stats class="stats">
    <StatsItem>
      <Label class="label">Followers</Label>
      <Text class="quantity">{followers}</Text>
    </StatsItem>
    <StatsItem>
      <Label class="label">Views</Label>
      <Text class="quantity">{views}</Text>
    </StatsItem>
    <StatsItem>
      <Label class="label">Likes</Label>
      <Text class="quantity">{likes}</Text>
    </StatsItem>
  </Stats>
</Prof>
);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};