import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from './components/header/index.jsx';
import Main from './components/main/index.jsx';
import Footer from './components/footer/index.jsx';

import './App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;