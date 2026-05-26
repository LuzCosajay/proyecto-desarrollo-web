import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getGoals, addGoalAPI, removeGoalAPI } from '../API/goalAPI';

export type Goal = {
  _id: string;
  name: string;
  description: string;
  duedate: string;
};

type GoalState = {
  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
  fetchGoals: () => void;
  addGoal: (goal: Omit<Goal, '_id'>) => void;
  removeGoal: (goal: Goal) => void;
};

export const useGoalStore = create<GoalState>()(
  devtools(
    (set, get) => ({
      goals: [],

      setGoals: (goals) => set({ goals }, false, 'setGoals'),

      fetchGoals: async () => {
        const goals = await getGoals();
        set({ goals }, false, 'fetchGoals');
      },

      addGoal: async (goal) => {
        await addGoalAPI(goal);
        get().fetchGoals();
      },

      removeGoal: async (goal) => {
        await removeGoalAPI(goal._id);
        get().fetchGoals();
      },
    }),
    { name: 'goal-store' }
  )
);