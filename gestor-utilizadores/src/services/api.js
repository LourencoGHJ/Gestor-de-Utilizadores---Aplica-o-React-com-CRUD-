import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Função para obter todos os utilizadores
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Retorna os dados da resposta
  } catch (error) {
    console.error('Erro ao buscar utilizadores:', error);
    throw error; // Lança erro caso ocorra algum problema
  }
};

// Função para adicionar um novo utilizador
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar utilizador:', error);
    throw error;
  }
};

// Função para atualizar um utilizador existente
export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar utilizador:', error);
    throw error;
  }
};

// Função para eliminar um utilizador
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao eliminar utilizador:', error);
    throw error;
  }
};
