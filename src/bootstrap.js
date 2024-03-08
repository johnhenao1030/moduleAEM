import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";

import "./index.css";
 
const App = () => (
  <div className="container">
    <Header />
    <Button />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
