import React, { Component } from "react";
import CardsList from "./english-cards";
import CardsGallery from "./cards-gallery";

import "./App.css";

class App extends Component {
  render() {
    return <CardsGallery cards={CardsList} />;
  }
}

export default App;
