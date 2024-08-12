// src/MyForm.tsx
import React, { useState } from 'react';

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name) newErrors.name = 'O nome é obrigatório';
    if (!formData.email) newErrors.email = 'O email é obrigatório';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Manuseio do envio do formulário, como enviar os dados para uma API
      console.log('Formulário enviado:', formData);
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h2>Meu Formulário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MyForm;
