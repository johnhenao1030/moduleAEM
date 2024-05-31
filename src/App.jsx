/* import React, { useState } from "react";
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

export default App; */


import React, { useState } from "react";
import Form from "./components/Form";
import FormTwo from "./components/FormTwo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-two" element={<FormTwo />} />
      </Routes>
    </Router>
  );
};

export default App;