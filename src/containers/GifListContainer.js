import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    let url =
      "https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g";
    fetch(url)
      .then((response) => response.json())
      .then((gifData) => this.setState({ gifs: gifData.data }));
    // debugger
  }

  fetchGifs = (keyword = "dog") => {
    // query the API with the text the user has entered
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((response) => response.json())
      .then((gifData) => this.setState({ gifs: gifData.data }));
  };

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch searchGifs={this.fetchGifs} />
      </div>
    );
  }
}
