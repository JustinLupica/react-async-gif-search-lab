import React from "react";

export default class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let search = this.state.search;
    this.props.searchGifs(search);
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            <h2>Search for images</h2>
            <input
              name="search"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="myButton">
            Search!
          </button>
        </form>
      </div>
    );
  }
}
