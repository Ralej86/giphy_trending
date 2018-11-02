import { connect } from 'react-redux';

import GiphysIndex from './giphys_index';
import { fetchTrendingGiphys, fetchSearchGiphys } from '../actions/giphy_actions';

// const mapStateToProps = state => ({
//   giphys: Object.values(state.giphys)
// });
const mapStateToProps = state => {
  console.log("the state");
  console.log(state);
  return ({
    giphys: Object.values(state.giphys)
  });
}

const mapDispatchToProps = dispatch => ({
  fetchTrendingGiphys: () => dispatch(fetchTrendingGiphys()),
  fetchSearchGiphys: searchTerm => dispatch(fetchSearchGiphys(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphysIndex);
