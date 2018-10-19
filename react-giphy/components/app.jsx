import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import GiphysSearchContainer from './giphys_search_container';
import GiphysIndexContainer from './giphys_index_container';
import GiphyDetailContainer from './giphys_detail_container';

const App = () => (
  <div className="root-div">
    <GiphysSearchContainer />

    <Switch>
      <Route exact path="/" component={ GiphysIndexContainer }/>
      <Route exact path="/giphy/:" component={ GiphyDetailContainer } />
    </Switch>
  </div>
);

export default App;
