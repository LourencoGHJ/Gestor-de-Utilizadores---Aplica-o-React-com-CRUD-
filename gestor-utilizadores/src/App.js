import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { getUsers } from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);  // Estado para indicar carregamento

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        setLoading(false);  // Definir como falso após os dados serem carregados
      } catch (error) {
        console.error('Erro ao buscar utilizadores:', error);
        setLoading(false);  // Certificar-se de definir como falso em caso de erro também
      }
    };

    fetchUsers();
  }, [refresh]);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSave = () => {
    setRefresh(!refresh);
    setSelectedUser(null);
  };

  return (
    <div className="app-container">
      {loading ? <p>Carregando...</p> : (
        <>
          <UserForm selectedUser={selectedUser} onSave={handleSave} />
          <UserList users={users} onEdit={handleEdit} refresh={refresh} />
        </>
      )}
    </div>
  );
};

export default App;
