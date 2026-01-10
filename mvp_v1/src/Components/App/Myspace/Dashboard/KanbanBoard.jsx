import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moveTask,
  toggleSubtask,
  deleteTask,
} from "@/Features/Myspace/Dashboard/Kanban/taskSlice"; //case reducer
// import AddTaskComposer from "./AddTaskComposer";
import AddTaskOverlay from "./AddTaskOverlay";

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="h-full gap-3 w-[70%] rounded-xl text-white relative flex">
      <KanbanColumn
        title="To-Do"
        status="todo"
        tasks={tasks}
        color="#0E0A12"
        onAddTask={() => setShowAddTask(true)}
      />
      <KanbanColumn
        title="Doing"
        status="doing"
        tasks={tasks}
        color="#100A12"
      />
      <KanbanColumn title="Done" status="done" tasks={tasks} color="#0B110F" />
      {showAddTask && <AddTaskOverlay onClose={() => setShowAddTask(false)} />}
    </div>
  );
};
const KanbanColumn = ({ title, color, status, tasks, onAddTask }) => {
  const columnTasks = tasks.filter((task) => task.status === status);

  return (
    <div
      className="flex-1 rounded-xl  p-3 flex flex-col border border-[#29292D] "
      style={{ backgroundColor: color }}
    >
      {/* Header */}
      <div className="text-lg font-Medium mb-3 flex justify-between">
        <span>{title}</span>
        <span className="text-xs text-gray-400">{columnTasks.length}</span>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-2 flex-1 overfLow-y-auto">
        {columnTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {status === "todo" && (
          <button
            onClick={onAddTask}
            className="mt-1 border border-dashed border-[#3a3a3f] rounded-xl py-3 text-xs text-gray-400 hover:text-gray-200"
          >
            + Add Task
          </button>
        )}
      </div>

      {/* Add task */}
      {status === "todo" && (
        <button
          onClick={onAddTask}
          className="sticky bottom-2 mt-2 text-xs text-gray-400 hover:text-gray-200 text-left"
        >
          + Add Task
        </button>
      )}
    </div>
  );
};

const TaskCard = ({ task }) => {
  // const tasks = useSelector((state) => state.tasks.items);

  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const changeStatus = (status) => {
    dispatch(moveTask({ id: task.id, status }));
  };

  const completed = task.subtasks.filter((s) => s.done).length;
  const LowPill =
    "px-2 py-1  rounded-lg border border-[#2e5e3d] text-xs bg-[#172D1E] text-[#6ab381] w-fit cursor-pointer";
  const MediumPill =
    "px-2 py-1  rounded-lg border border-[#854c30] text-xs bg-[#322017] text-[#d4a791] w-fit cursor-pointer";
  const HighPill =
    "px-2 py-0.5  rounded-lg border border-[#4C141C] text-xs bg-[#31171B] text-red-400 w-fit cursor-pointer";

  const priorityClassMap = {
    Low: LowPill,
    Medium: MediumPill,
    High: HighPill,
  };

  const handleToggleSubtask = (subtaskId) => {
    dispatch(
      toggleSubtask({
        taskId: task.id,
        subtaskId,
      })
    );
  };
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`rounded-2xl bg-[#1A1A1A] p-4 text-sm flex flex-col gap-3 cursor-pointer 
        transition border ${
          expanded
            ? "border-[#565660]"
            : "border-[#29292D] hover:border-[#565660]"
        }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="text-white font-Medium pl-1">{task.title}</div>
        {expanded && (
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-gray-400 hover:text-red-500"
              onClick={() => handleDeleteTask(task.id)}
            >
              <path
                d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 "
          >
            <path
              d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
              stroke="#959AA8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>
            {completed}/{task.subtasks.length} subtasks completed
          </span>
        </div>

        <span className="flex items-center gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 "
          >
            <path
              d="M4 8H20M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8036C17.9215 20 18.4805 20 18.9079 19.7822C19.2842 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H8M20 8V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2842 4.40973 18.9079 4.21799C18.4801 4 17.9203 4 16.8002 4H16M8 4H16M8 4V2M16 4V2M14 16L12 14M12 14L10 12M12 14L14 12M12 14L10 16"
              stroke="#959AA8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {task.dueDate /* renamed to camelCase `dueDate` */}
        </span>
      </div>

      {/* Expanded subtasks */}
      {expanded && (
        <div className="flex flex-col gap-2 pt-2">
          {task.subtasks.map((subtask) => (
            <label
              key={subtask.id}
              className="flex items-center gap-2 text-xs text-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                checked={subtask.done}
                onChange={() => handleToggleSubtask(subtask.id)}
                onClick={(e) => e.stopPropagation()}
                // readOnly

                className="accent-purple-500"
              />
              <span
                className={subtask.done ? "line-through text-gray-500" : ""}
              >
                {subtask.title}
              </span>
            </label>
          ))}
        </div>
      )}

      {/* Priority */}
      <div className="flex gap-2 pt-2 relative ">
        <span className={priorityClassMap[task.priority]}>{task.priority}</span>
        {expanded && (<>
          <div className="flex gap-2 right-0 absolute mr-10  ">
            {task.status != "todo" && (
              <span
                className="px-2 py-1  rounded-lg border border-[#818656] text-xs bg-[#515625] text-[#cad46e] w-fit cursor-pointer"
                onClick={() => changeStatus("todo")}
              >
                To-Do
              </span>
            )}

            {task.status != "doing" && (
              <span
                onClick={() => changeStatus("doing")}
                className="px-2 py-1  rounded-lg border border-[#4c2950] text-xs bg-[#110812] text-[#ab7bb0] w-fit cursor-pointer"
              >
                Doing
              </span>
            )}
            {task.status != "done" && (
              <span className={LowPill} onClick={() => changeStatus("done")}>
                Done
              </span>
            )}

          
          </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-0 bottom-0 w-5 h-5 text-gray-400 hover:text-blue-600"
              
            >
              <path
                d="M10.0002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V14M16 5L10 11V14H13L19 8M16 5L19 2L22 5L19 8M16 5L19 8"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg></>
        )}
      </div>
    </div>
  );
};

export default KanbanBoard;
