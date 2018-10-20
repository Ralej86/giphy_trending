import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import GiphysSearchContainer from './giphys_search_container';
import GiphysIndexContainer from './giphys_index_container';
import GiphysDetail from './giphys_detail';

const App = () => (
  <div className="root-div">
    <GiphysSearchContainer />

    <Switch>
      // <Route exact path="/giphys/:giphyId" component={ GiphysDetail }/>
      <Route exact path="/" component={ GiphysIndexContainer }/>
    </Switch>
  </div>
);

export default App;
