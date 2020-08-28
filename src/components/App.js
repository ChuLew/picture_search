import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "../SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    //allows u to use async wait syntax  await waits for things that need time to render such as a quuery and allows you to assign it to avariable you can use later
    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
