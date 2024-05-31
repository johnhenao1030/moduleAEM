import React, { useState, useEffect } from 'react';
import '../styles/form.css';
import image from '../assets/icon-form.png';
import { useNavigate } from 'react-router-dom';

const Form = ({onSubmit}) => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    ocupacion: 'estudiante'
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(); 
  };
  



  return (
    <div className="container-microfrontend">
      <form id="formulario" onSubmit={handleSubmit}>
        <div className='container-title-img'>
          <img className='image-form' src={image} alt="Imagen de ejemplo" />
          <h2>Completa tus datos</h2>
        </div>
        <div className="input-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="ocupacion">Ocupación:</label>
          <select id="ocupacion" name="ocupacion" value={formData.ocupacion} onChange={handleChange}>
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
            <option value="profesional">Profesional</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
