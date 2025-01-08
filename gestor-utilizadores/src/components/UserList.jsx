import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = ({ onEdit, refresh }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para armazenar a pesquisa

  useEffect(() => {
    // Recuperar os utilizadores do localStorage 
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, [refresh]); // Quando "refresh" mudar, Atualiza os utilizadores

  const handleEdit = (user) => {
    const confirmEdit = window.confirm(`Queres editar o nome de ${user.name}?`);
    if (confirmEdit) {
      onEdit(user); // Chama a função onEdit para iniciar a edição
    }
  };

  const handleDelete = (id, user) => {
    const confirmDelete = window.confirm('Tem a certeza que deseja eliminar?');
    if (confirmDelete) {
      const updatedUsers = users.filter((user) => user.id !== id);
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // Atualizar no localStorage
      setUsers(updatedUsers); // Atualizar estado local
    }
  };

  // Função para filtrar os usuários com base na pesquisa
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <h2>Lista de Utilizadores</h2>

      {/* Barra de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar por nome ou email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Atualizar a pesquisa
        className="search-input"
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-details">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>
              <div className="user-actions">
                <button onClick={() => handleEdit(user)} className="edit-btn">
                  <i className="fas fa-edit"></i> Editar
                </button>
                <button onClick={() => handleDelete(user.id)} className="delete-btn">
                  <i className="fas fa-trash-alt"></i> Eliminar
                </button>
              </div>
            </li>
          ))
        ) : (
          <li>Nenhum utilizador encontrado.</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;
