import React from 'react'
import { Link } from 'react-router-dom'

class GiphysIndexItem extends React.Component {
  render() {
    console.log(this);
    return (
      <li className="giphy-li">
        <Link to={`giphy/${this.props.giphy.id}`}>
          <img src={this.props.giphy.images.fixed_height.url} />
        </Link>
      </li>
    );
  }
}

export default GiphysIndexItem;


//         <img src={giphy.images.fixed_height.url} />
