import React from 'react';
import './UserItem.css'; // Estilos para o item do utilizador

const UserItem = ({ user, onEdit }) => {
  const handleEdit = () => {
    onEdit(user); // Chama a função `onEdit` para editar o utilizador
  };

  return (
    <li className="user-item">
      <div className="user-details">
        <strong>{user.name}</strong>
        <span>{user.email}</span>
      </div>
      <div className="user-actions">
        <button onClick={handleEdit} className="edit-btn">
          <i className="fas fa-edit"></i> Editar
        </button>
      </div>
    </li>
  );
};

export default UserItem;
