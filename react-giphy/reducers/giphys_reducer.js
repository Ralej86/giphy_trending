// import { merge } from 'lodash';
import { RECEIVE_SEARCH_GIPHYS, RECEIVE_TRENDING_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys;
    case RECEIVE_TRENDING_GIPHYS:
      return action.giphys;
    default:
      return state;
  }
};

export default giphysReducer;
      // return merge({}, state, action.giphys);
      // return merge({}, state, action.giphys)
