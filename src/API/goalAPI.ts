const API_URL = 'http://localhost:3000/goals';

export const getGoals = async () => {
  const response = await fetch(`${API_URL}/getGoals`, {
    headers: {
      Authorization: '123456',
    },
  });

  return await response.json();
};

export const addGoalAPI = async (goal: {
  name: string;
  description: string;
  duedate: string;
}) => {
  const response = await fetch(`${API_URL}/addGoal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '123456',
    },
    body: JSON.stringify(goal),
  });

  return await response.json();
};

export const removeGoalAPI = async (_id: string) => {
  const response = await fetch(`${API_URL}/removeGoal/${_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: '123456',
    },
  });

  return await response.json();
};