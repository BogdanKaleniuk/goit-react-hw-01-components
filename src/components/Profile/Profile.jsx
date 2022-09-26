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
<Prof className="profile">
  <Description className="description">
    <Avatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName className="name">{username}</UserName>
    <Tag className="tag">@{tag}</Tag>
    <Location className="location">{location}</Location>
  </Description>

  <Stats className="stats">
    <StatsItem>
      <Label className="label">Followers</Label>
      <Text className="quantity">{followers}</Text>
    </StatsItem>
    <StatsItem>
      <Label className="label">Views</Label>
      <Text className="quantity">{views}</Text>
    </StatsItem>
    <StatsItem>
      <Label className="label">Likes</Label>
      <Text className="quantity">{likes}</Text>
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