import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Task = {
  id: number;
  name: string;
  description: string;
  dueDate: string;
};

type TaskState = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
};

export const useTaskStore = create<TaskState>()(
  devtools(
    (set) => ({
      tasks: [],
      setTasks: (tasks) => set({ tasks }, false, 'setTasks'),
      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] }), false, 'addTask'),
      removeTask: (task) =>
        set(
          (state) => ({
            tasks: state.tasks.filter((item) => item.id !== task.id),
          }),
          false,
          'removeTask'
        ),
    }),
    { name: 'task-store' }
  )
);