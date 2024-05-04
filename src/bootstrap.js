import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Form from "./components/Form";

const App = () => {
  const [pais, setPais] = useState(null); // Estado para almacenar el valor de Pais

  // Función para recibir y mostrar la propiedad Pais
  const handleSetPais = (paisValue) => {
    console.log("Pais en App:", paisValue);
    setPais(paisValue);
  };

  return (
    <div className="container">
      <Form setPais={handleSetPais} />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);