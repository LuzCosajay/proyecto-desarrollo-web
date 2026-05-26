const API_URL = 'http://localhost:3000/tasks';

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/getTasks`, {
    headers: {
      Authorization: '123456',
    },
  });

  return await response.json();
};

export const addTaskAPI = async (task: {
  name: string;
  description: string;
  duedate: string;
}) => {
  const response = await fetch(`${API_URL}/addTask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '123456',
    },
    body: JSON.stringify(task),
  });

  return await response.json();
};

export const removeTaskAPI = async (_id: string) => {
  const response = await fetch(`${API_URL}/removeTask/${_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: '123456',
    },
  });

  return await response.json();
};