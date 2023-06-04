import styled from '@emotion/styled';

const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: grey;
  margin: 30px auto 0 auto;
`;

const StatList = styled.ul`
  display: flex;
  margin-top: 30px;
  list-style: none;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  height: 80px;
  gap: 10px;

  background-color: ${props => {
    switch (props.type) {
      case '.docx':
        return '#4fc4f7';
      case '.pdf':
        return '#a13ef0';
      case '.mp3':
        return '#e64c66';
      case '.psd':
        return '#4ce6cc';
      default:
        return 'black';
    }
  }};
`;

const Label = styled.span`
  color: white;
`;

const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export { StatisticsContainer, Title, StatList, StatItem, Label, Percentage };
