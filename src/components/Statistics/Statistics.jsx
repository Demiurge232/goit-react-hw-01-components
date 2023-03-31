import PropTypes from 'prop-types';
import {
  StatList,
  Item,
  Label,
  Percentage,
  StatisticsBox,
  Title,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsBox>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
