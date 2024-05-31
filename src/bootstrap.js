// App.jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Form from "./components/Form";
import FormTwo from "./components/FormTwo";
import "./index.css";

const root = createRoot(document.getElementById("app"));

const App = () => {
  const [showFormTwo, setShowFormTwo] = useState(false);

  const handleFormSubmit = () => {
    setShowFormTwo(true);
  };

  return (
    <div>
      {!showFormTwo ? (
        <Form onSubmit={handleFormSubmit} /> // Pasar la función como prop onSubmit
      ) : (
        <FormTwo />
      )}
    </div>
  );
};

root.render(<App />);
