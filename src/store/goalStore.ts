import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Goal = {
  id: number;
  name: string;
  description: string;
  dueDate: string;
};

type GoalState = {
  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
  addGoal: (goal: Goal) => void;
  removeGoal: (goal: Goal) => void;
};

export const useGoalStore = create<GoalState>()(
  devtools(
    (set) => ({
      goals: [],
      setGoals: (goals) => set({ goals }, false, 'setGoals'),
      addGoal: (goal) =>
        set((state) => ({ goals: [...state.goals, goal] }), false, 'addGoal'),
      removeGoal: (goal) =>
        set(
          (state) => ({
            goals: state.goals.filter((item) => item.id !== goal.id),
          }),
          false,
          'removeGoal'
        ),
    }),
    { name: 'goal-store' }
  )
);