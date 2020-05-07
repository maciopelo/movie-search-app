import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

const API_URL = `https://www.omdbapi.com/`;
const API_KEY = `&apikey=12b411fc`;

class App extends Component {
  state = {
    currentTitle: "",
    results: [],
    modalInfo: [],
    isModal: false,
  };

  handleInputChange = (e) => {
    this.setState({ currentTitle: e.target.value });
  };

  search = (e) => {
    if (e.key === "Enter") {
      fetch(`${API_URL}?s=${this.state.currentTitle}${API_KEY}`)
        .then((resposne) => resposne.json())
        .then(({ Search }) => this.setState({ results: Search }));
    }
  };

  handleModal = (id) => {
    fetch(`${API_URL}?i=${id}${API_KEY}`)
      .then((resposne) => resposne.json())
      .then((data) => this.setState({ modalInfo: data }));
    this.setState((prevState) => ({ isModal: !prevState.isModal }));
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>
        <main>
          <SearchBar
            handleInputChange={this.handleInputChange}
            search={this.search}
            currentTitle={this.state.currentTitle}
          />
          <Results
            results={this.state.results}
            handleModal={this.handleModal}
            isModal={this.state.isModal}
            modalInfo={this.state.modalInfo}
          />
        </main>
      </div>
    );
  }
}

export default App;
