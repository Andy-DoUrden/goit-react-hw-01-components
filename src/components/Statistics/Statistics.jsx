import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsContainer>
      {isTitle(title)}

      <StatList>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} type={label}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function isTitle(title) {
  if (title) {
    return <Title>{title}</Title>;
  }
}
