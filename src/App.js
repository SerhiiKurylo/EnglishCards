import React, { Component } from "react";
import CardsList from "./english-cards";
import CardsGallery from "./cards-gallery";
import Header from "./header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardsGallery cards={CardsList} />
      </div>
    );
  }
}

export default App;
