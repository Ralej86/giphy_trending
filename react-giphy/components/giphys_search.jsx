import React from 'react';

class GiphysSearch extends React.Component {
  constructor() {
    super();
    this.state = {searchTerm: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({searchTerm: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm);
  }

  render() {
    return (
      <div>
        <form className="search">
          <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    )
  }
}

export default GiphysSearch;
