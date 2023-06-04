import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 20px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
`;

const ProfileDescription = styled.div`
  text-align: center;
`;

const ProfileAvatar = styled.img`
  background-color: #d0d0d0;
  border-radius: 100%;
  width: 40%;
  margin: 0 auto;
`;

const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: black;
  margin-top: 30px;
`;

const ProfileInfo = styled.p`
  color: grey;
  margin-top: 15px;
`;

const ProfileStats = styled.ul`
  display: flex;
  list-style: none;
  background-color: #f3f6f9;
  margin-top: 20px;
`;

const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  height: 100px;
  gap: 10px;
  border: 1px solid #e7ebf2;
`;

const StatLabel = styled.span`
  color: grey;
`;

const StatCount = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export {
  ProfileContainer,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileInfo,
  ProfileStats,
  ProfileStatsItem,
  StatLabel,
  StatCount,
};
