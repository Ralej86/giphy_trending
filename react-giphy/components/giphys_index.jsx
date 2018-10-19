import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {
  componentDidMount() {
    if (this.props.fetchTrendingGiphys) {
      this.props.fetchTrendingGiphys();
    }
  }
  render() {
    // console.log(this.props);
    if (this.props.giphys.length === 0 ) {
      return (
        <div> Loading... </div>
      )
    } else {
      return (
        <ul>
          { this.props.giphys.map(giphy =>
            <GiphysIndexItem key={giphy.id} giphy={giphy} onClick/> )}
            </ul>
          )
    }
  }
}

export default GiphysIndex
