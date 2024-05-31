import React, { useState } from "react";
import Form from "./components/Form";
import FormTwo from "./components/FormTwo";

const App = () => {
  const [showFormTwo, setShowFormTwo] = useState(false);

  const handleFormSubmit = () => {
    setShowFormTwo(true);
  };

  return (
    <div>
      {!showFormTwo ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <FormTwo />
      )}
    </div>
  );
};

export default App;
