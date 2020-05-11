import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Logo from "./components/Logo";

const API_URL = `https://www.omdbapi.com/`;
const API_KEY = `&apikey=12b411fc`;

class App extends Component {
  state = {
    currentTitle: "",
    results: [],
    loaded: false,
    modalInfo: [],
    isModal: false,
  };

  handleClearPage = () => {
    this.setState((prevState) => ({ loaded: !prevState.loaded }));
  };

  handleInputChange = (e) => {
    this.setState({ currentTitle: e.target.value });
  };

  search = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        fetch(`${API_URL}?s=${this.state.currentTitle}${API_KEY}`)
          .then((resposne) => resposne.json())
          .then((data) => {
            const idList = data.Search.map((item) => item.imdbID);
            idList.forEach((element) => {
              fetch(`${API_URL}?i=${element}${API_KEY}`)
                .then((resposne) => resposne.json())
                .then((data) => {
                  return this.setState((prevState) => ({
                    modalInfo: [...prevState.modalInfo, data],
                  }));
                });
            });

            this.setState({
              results: data.Search,
              loaded: true,
            });
          });
      } else {
        alert("No title has been given !");
      }
    }
  };

  handleModal = (id) => {
    if (!this.state.isModal) {
      fetch(`${API_URL}?i=${id}${API_KEY}`)
        .then((resposne) => resposne.json())
        .then((data) => this.setState({ modalInfo: data }));
    }

    this.setState((prevState) => ({ isModal: !prevState.isModal }));
  };

  render() {
    return (
      <div className="App">
        <Logo handleClearPage={this.handleClearPage} />

        <main>
          <SearchBar
            handleInputChange={this.handleInputChange}
            search={this.search}
            currentTitle={this.state.currentTitle}
          />
          {this.state.loaded && (
            <Results
              results={this.state.results}
              handleModal={this.handleModal}
              isModal={this.state.isModal}
              modalInfo={this.state.modalInfo}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
