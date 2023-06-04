import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileInfo,
  ProfileStats,
  ProfileStatsItem,
  StatLabel,
  StatCount,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDescription>

      <ProfileStats>
        <ProfileStatsItem>
          <StatLabel>Followers</StatLabel>
          <StatCount>{stats.followers}</StatCount>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <StatLabel>Views</StatLabel>
          <StatCount>{stats.views}</StatCount>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <StatLabel>Likes</StatLabel>
          <StatCount>{stats.likes}</StatCount>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
