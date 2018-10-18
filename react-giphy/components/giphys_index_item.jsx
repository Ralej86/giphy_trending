import React from 'react'

class GiphysIndexItem extends React.Component {
  render() {
    console.log(this);
    return (
      <li className="giphy-li">
        <img src={this.props.giphy.images.fixed_height.url} />
      </li>
    );
  }
}

export default GiphysIndexItem;


//         <img src={giphy.images.fixed_height.url} />
