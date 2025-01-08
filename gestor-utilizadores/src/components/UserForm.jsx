import React, { useState, useEffect } from 'react';
import './UserForm.css'; // Estilos para o formulário

const UserForm = ({ selectedUser, onSave }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) {
      setFormData({ name: selectedUser.name, email: selectedUser.email });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    // Recuperar utilizadores do localStorage
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Se for um utilizador existente, atualizar
    if (selectedUser) {
      const updatedUsers = savedUsers.map((user) =>
        user.id === selectedUser.id ? { ...user, ...formData } : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // Atualizar no localStorage
    } else {
      // Criar novo utilizador com ID único
      const newUser = {
        id: Date.now(), // ID único com base no timestamp
        ...formData,
      };
      const updatedUsers = [newUser, ...savedUsers]; // Adicionar o novo utilizador no topo
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // Atualizar no localStorage
    }

    // Chamar a função de callback do onSave (que provavelmente irá atualizar a lista)
    onSave();

    // Limpar formulário
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedUser ? 'Editar Utilizador' : 'Adicionar Utilizador'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default UserForm;
