import React from "react";
import { createRoot } from "react-dom/client";
import Form from "./components/Form";

import "./index.css";

// Utiliza createRoot en lugar de render
const root = createRoot(document.getElementById("app"));

const App = () => (
  <div className="container">
    <Form Pais="Colombia - App"/>
  </div>
);

// Renderiza dentro del root creado con createRoot
root.render(<App />);
