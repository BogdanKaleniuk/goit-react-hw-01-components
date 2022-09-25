import PropTypes from 'prop-types';


export default function Statistics({ title, stats }) {
    return (
<section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
    {stats.map(stat => {

    
    <li class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </li>
    })}
    {/* <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li> */}
  </ul>
</section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};