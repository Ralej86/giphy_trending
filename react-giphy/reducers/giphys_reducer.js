import { merge } from 'lodash';
import { RECEIVE_SEARCH_GIPHYS, RECEIVE_TRENDING_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (state = [], action) => {
  console.log("the action");
  console.log(action.giphys);
  const uniqueGiphys = {};
  if (action.giphys) {
    action.giphys.forEach(giphyObj => {
      uniqueGiphys[giphyObj.id] = giphyObj
    });
  }
  switch(action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      // return merge({}, state, {[action.giphys.id]: action.giphys});
      return action.giphys
    case RECEIVE_TRENDING_GIPHYS:
      // return merge({}, state, {[action.giphys.id]: action.giphys});
      return merge({}, state, uniqueGiphys);
    default:
      return state;
  }
};

export default giphysReducer;
