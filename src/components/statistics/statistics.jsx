import PropTypes from 'prop-types';

import { StatList, Title, Stat, Item } from './statistics.styled';

export default function Statistics({ title, stats }) {
    return (
<StatList className="statistics">
  <Title className="title">{title}</Title>
  <Stat className="stat-list">
    {stats.map(stat => (
    <Item key={stat.id} className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </Item>
    ))}
  </Stat>
</StatList>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};