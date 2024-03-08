import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />

    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
