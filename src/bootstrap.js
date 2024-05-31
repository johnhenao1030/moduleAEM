import React from "react";
import { createRoot } from "react-dom/client";
import Form from "./components/Form";
import FormTwo from "./components/FormTwo";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Utiliza createRoot en lugar de render
const root = createRoot(document.getElementById("app"));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/form-two" element={<FormTwo />} />
    </Routes>
  </Router>
);


// Renderiza dentro del root creado con createRoot 
root.render(<App />);
