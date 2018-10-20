import React from 'react'
import { Link } from 'react-router-dom'

class GiphysIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.parentNode.children[1].style.display === 'none') {
      e.target.parentNode.children[1].style.display = 'inline-block';
    } else {
      e.target.parentNode.children[1].style.display = 'none';
    }
  }

  render() {
    let username;
    let trendingTime;

    if (this.props.giphy.user) {
      username = this.props.giphy.user.username;
    } else {
      username = "unknown user";
    }
    if (this.props) {
      trendingTime = this.props.giphy.trending_datetime;
    } else {
      trendingTime = "unknown time";
    }

    return (
      <li className="giphy-li" onClick={this.handleClick} >
        <img src={this.props.giphy.images.fixed_height.url} />
        <div className="giphy-detail" style={{display: "none"}}>
          <ul>
            <li>Title: {this.props.giphy.title}</li>
            <li>User: {username}</li>
            <li>Trending: {trendingTime}</li>
          </ul>
        </div>
      </li>
    );
  }
}

export default GiphysIndexItem;


//         <img src={giphy.images.fixed_height.url} />
