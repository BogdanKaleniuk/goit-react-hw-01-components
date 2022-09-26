import PropTypes from 'prop-types';

import { StatList, Title, Stat, Item } from './statistics.styled';

export default function Statistics({ title, stats }) {
    return (
<StatList class="statistics">
  <Title class="title">{title}</Title>
  <Stat class="stat-list">
    {stats.map(stat => (
    <Item key={stat.id} class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
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