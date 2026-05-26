import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getTasks, addTaskAPI, removeTaskAPI } from '../API/taskAPI';

export type Task = {
  _id: string;
  name: string;
  description: string;
  duedate: string;
};

type TaskState = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  fetchTasks: () => void;
  addTask: (task: Omit<Task, '_id'>) => void;
  removeTask: (task: Task) => void;
};

export const useTaskStore = create<TaskState>()(
  devtools(
    (set, get) => ({
      tasks: [],

      setTasks: (tasks) => set({ tasks }, false, 'setTasks'),

      fetchTasks: async () => {
        const tasks = await getTasks();
        set({ tasks }, false, 'fetchTasks');
      },

      addTask: async (task) => {
        await addTaskAPI(task);
        get().fetchTasks();
      },

      removeTask: async (task) => {
        await removeTaskAPI(task._id);
        get().fetchTasks();
      },
    }),
    { name: 'task-store' }
  )
);