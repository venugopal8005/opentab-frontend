import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [], // all tasks
  currentTaskId: null, // for Focus Mode later
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // --------------------
    // TASKS
    // --------------------

    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ title, priority = "Medium", subtasks = [], dueDate = null }) {
        // include `dueDate` in payload; accept camelCase `dueDate` from caller
        return {
          payload: {
            id: nanoid(),
            title,
            status: "todo",
            priority,
            subtasks: subtasks.map((s) => ({
              id: nanoid(),
              title: s,
              done: false,
            })),
            createdAt: new Date().toISOString(),
            dueDate: dueDate || null, // attach dueDate to task object
          },
        };
      },
    },

    updateTask(state, action) {
      const { id, updates } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },

    moveTask(state, action) {
      const { id, status } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) {
        task.status = status;
      }
    },

    deleteTask(state, action) {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },

    setCurrentTask(state, action) {
      state.currentTaskId = action.payload;
    },

    // --------------------
    // SUBTASKS
    // --------------------

    addSubtask: {
      reducer(state, action) {
        const { taskId, subtask } = action.payload;
        const task = state.items.find((t) => t.id === taskId);
        if (task) {
          task.subtasks.push(subtask);
        }
      },
      prepare({ taskId, title }) {
        return {
          payload: {
            taskId,
            subtask: {
              id: nanoid(),
              title,
              done: false,
            },
          },
        };
      },
    },
    moveTask(state, action) {
      const { id, status } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) {
        task.status = status;
      }
    },

    
    toggleSubtask(state, action) {
      const { taskId, subtaskId } = action.payload;
      const task = state.items.find((t) => t.id === taskId);
      if (task) {
        const subtask = task.subtasks.find((s) => s.id === subtaskId);
        if (subtask) {
          subtask.done = !subtask.done;
        }
      }
    },

    deleteSubtask(state, action) {
      const { taskId, subtaskId } = action.payload;
      const task = state.items.find((t) => t.id === taskId);
      if (task) {
        task.subtasks = task.subtasks.filter((s) => s.id !== subtaskId);
      }
    },
  },
});

export const {
  addTask,
  updateTask,
  moveTask,
  deleteTask,
  setCurrentTask,
  addSubtask,
  toggleSubtask,
  deleteSubtask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
