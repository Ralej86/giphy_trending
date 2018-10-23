import React from 'react'
import { Link } from 'react-router-dom'

class GiphysIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const target = e.target;
    const targetDiv = target.parentNode.children[1];
    const targetHeight = target.offsetHeight + target.offsetTop + 5;
    const targetLeft = target.offsetLeft + 10;
    if (targetDiv.style.display === 'none') {
      targetDiv.setAttribute("style",
      `display: inline-block;
      position: absolute;
      top: ${targetHeight}px;
      left: ${targetLeft}px`);
    } else {
      targetDiv.style.display = 'none';
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
      <li className="giphy-li">
        <img src={this.props.giphy.images.fixed_height.url} onClick={this.handleClick}/>
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
