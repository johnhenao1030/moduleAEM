import React, { useState } from 'react';
import '../styles/form.css';
import image from '../assets/icon-form.png';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    ocupacion: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    genero: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log(formData);
  };

  return (
    <div className="container-microfrontend">
      <form id="formulario" onSubmit={handleSubmit}>
        <div className='container-title-img'>
        {/*   <img className='image-form' src={image} alt="Imagen de ejemplo" /> */}
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
          <select id="ocupacion" name="ocupacion" value={formData.ocupacion} onChange={handleChange} required>
            <option value="">Selecciona tu ocupación</option>
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
            <option value="profesional">Profesional</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="genero">Género:</label>
          <select id="genero" name="genero" value={formData.genero} onChange={handleChange} required>
            <option value="">Selecciona tu género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
