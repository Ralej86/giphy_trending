import React from 'react';

import GiphysIndexItem from './giphys_index_item';

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
    console.log(window.innerHeight);
    console.log(window.scrollY);
    console.log(document.body.offsetHeight);
  }

  render() {
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
