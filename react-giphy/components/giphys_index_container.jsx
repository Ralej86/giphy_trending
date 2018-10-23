import { connect } from 'react-redux';

import GiphysIndex from './giphys_index';
import { fetchTrendingGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
  giphys: Object.values(state.giphys)
});

const mapDispatchToProps = dispatch => ({
  fetchTrendingGiphys: () => dispatch(fetchTrendingGiphys()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphysIndex);
