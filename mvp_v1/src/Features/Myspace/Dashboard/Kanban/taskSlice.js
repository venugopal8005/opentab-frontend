import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  currentTaskId: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // --------------------
    // TASKS
    // --------------------
    setTasks(state, action) {
      state.items = action.payload;
    },
    addTask(state, action) {
      state.items.push(action.payload);
    },

    updateTask(state, action) {
      const { id, updates } = action.payload;
      const task = state.items.find((t) => t._id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },

    moveTask(state, action) {
      const { id, status } = action.payload;
      const task = state.items.find((t) => t._id === id);
      if (task) {
        task.status = status;
      }
    },

    deleteTask(state, action) {
      state.items = state.items.filter((task) => task._id !== action.payload);
    },

    setCurrentTask(state, action) {
      state.currentTaskId = action.payload;
    },

    // --------------------
    // SUBTASKS (UI ONLY FOR NOW)
    // --------------------

    toggleSubtask(state, action) {
      const { taskId, subtaskId } = action.payload;
      const task = state.items.find((t) => t._id === taskId);
      if (task) {
        const subtask = task.subtasks.find((s) => s._id === subtaskId);
        if (subtask) {
          subtask.done = !subtask.done;
        }
      }
    },

    deleteSubtask(state, action) {
      const { taskId, subtaskId } = action.payload;
      const task = state.items.find((t) => t._id === taskId);
      if (task) {
        task.subtasks = task.subtasks.filter((s) => s._id !== subtaskId);
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
  toggleSubtask,
  deleteSubtask,
  setTasks
} = tasksSlice.actions;

export default tasksSlice.reducer;
