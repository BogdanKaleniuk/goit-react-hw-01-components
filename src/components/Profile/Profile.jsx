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
<Prof>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
      <Text>{followers}</Text>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Text>{views}</Text>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Text>{likes}</Text>
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