import api from "@/api/axios";
import { setTasks } from "./taskSlice";
import { addTask } from "./taskSlice";

export const fetchTasks = () => async (dispatch) => {
  try {
    const res = await api.get("/tasks", {
      withCredentials: true,
    });

    dispatch(setTasks(res.data.tasks));
  } catch (err) {
    console.error("Failed to fetch tasks", err);
  }
};

// for creating the task 

export const createTask = (taskData) => async (dispatch) => {
  try {
    console.log("task reached thunk");
    const res = await api.post("/tasks", taskData, {
      withCredentials: true,
    });

    // backend returns the REAL task
    dispatch(addTask(res.data.task));
  } catch (err) {
    console.error("Failed to create task", err);
  }
};
