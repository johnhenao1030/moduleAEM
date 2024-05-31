import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import FormTwo from "./components/FormTwo";
import "./index.css";

// Utiliza createRoot en lugar de render
const root = createRoot(document.getElementById("app"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/form-two" element={<FormTwo />} />
    </Routes>
  </BrowserRouter>
);

// Renderiza dentro del root creado con createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
