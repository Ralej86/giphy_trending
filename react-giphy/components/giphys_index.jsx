import React from 'react';

import GiphysIndexItem from './giphys_index_item';
import GiphysSearch from './giphys_search';

class GiphysIndex extends React.Component {
  constructor(props) {
    super(props)

    this.loadMoreGiphys = this.loadMoreGiphys.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll',this.loadMoreGiphys);
    if (this.props.fetchTrendingGiphys) {
      this.props.fetchTrendingGiphys();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadMoreGiphys);
  }

  loadMoreGiphys() {
    const currentPosition = window.innerHeight + window.scrollY;
    if (currentPosition >= document.body.offsetHeight - 100) {
      this.props.fetchTrendingGiphys();
    }
  }

  render() {
    if (this.props.giphys.length === 0 ) {
      return (
        <div className="main">
          <GiphysSearch fetchSearchGiphys={this.props.fetchSearchGiphys} />

          <div> Loading... </div>
        </div>
      )
    } else {
      return (
        <div className="main">
          <GiphysSearch fetchSearchGiphys={this.props.fetchSearchGiphys} />

          <ul className="giphy-content">
            { this.props.giphys.map(giphy =>
              <GiphysIndexItem key={giphy.id} giphy={giphy} onClick/> )}
              </ul>
          </div>
        )
      }
  }
}

export default GiphysIndex
