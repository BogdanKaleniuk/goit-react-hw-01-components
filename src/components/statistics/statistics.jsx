import PropTypes from 'prop-types';

import { StatList, Title, Stat, Item } from './statistics.styled';

export default function Statistics({ title, stats }) {
    return (
<StatList>
  <Title>{title}</Title>
  <Stat>
    {stats.map(stat => (
    <Item key={stat.id}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </Item>
    ))}
  </Stat>
</StatList>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};