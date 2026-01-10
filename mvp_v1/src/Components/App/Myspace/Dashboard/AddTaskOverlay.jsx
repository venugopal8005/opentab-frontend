import { useEffect, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/Features/Myspace/Dashboard/Kanban/taskSlice";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddTaskOverlay = ({ onClose }) => {
  const [calenderclick, setclanderclick] = useState(false);

  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(""); // use camelCase `dueDate`
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [subtasks, setSubtasks] = useState("");
  useEffect(() => {
    setDueDate(
      new Date(date)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/ /g, "-")
    ); // update camelCase `dueDate` when `date` changes
  }, [date]);
  const handleSubmit = () => {
    if (!title.trim()) return;

    dispatch(
      addTask({
        title,
        priority,
        subtasks: subtasks ? subtasks.split(",").map((s) => s.trim()) : [],
        dueDate, // include camelCase `dueDate` in payload
      })
    );

    onClose();
  };

  console.log(calenderclick);
  console.log(date);
  return (
    <div className="absolute inset-0 z-50 bg-[#0000007b]  flex items-center justify-center">
      <div className="w-[500px] rounded-xl bg-[#131416] relative p-6 flex flex-col gap-3" onKeyDown={(e)=>{
            if (e.key === "Enter") {
              handleSubmit();
            }
            if (e.key === "Escape") {
              onClose();
            }
          }}>
        <h3 className="text-lg font-Medium">New Task</h3>
        <input
          autoFocus
          className="bg-transparent border  p-2 rounded-xl   border-[#2c2c31] text-lg outline-none w-full"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
        <div className="flex w-full gap-2">
          <div className=" border p-1 rounded-xl flex-2 flex items-center border-[#2c2c31] text-lg outline-none w-full">
            <input
              type="text"
              value={dueDate} // use camelCase `dueDate` for binding
              className=" bg-transparent flex flex-1 w-32 px-1 text-sm focus:outline-none focus:border-none focus:ring-0 "
              placeholder="Due Date - DD/MM/YYYY"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 flex-3 cursor-pointer"
              onClick={() => setclanderclick((prev) => !prev)}
            >
              <path
                d="M4 8H20M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H8M20 8V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H16M16 2V4M16 4H8M8 2V4"
                stroke="#959AA8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          {calenderclick && (
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setclanderclick(false);
              }}
              className="rounded-lg bg-[#131416] z-20 scale-[0.8] border-[#3c3b3b] border absolute top-[150px] left-32"
            />
          )}
          {/* 
          <select
            className="bg-transparent text-xs w-[40%] border rounded-xl  border-[#2c2c31] p-2  text-gray-300"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low" className="bg-black rounded-sm">
              Low
            </option>
            <option value="Medium" className="bg-black">
              Medium
            </option>
            <option
              value="High"
              className="px-2 py-0.5 rounded-lg border border-[#4C141C] text-xs bg-[#31171B] text-red-400"
            >
              High
            </option>
          </select> */}
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger className="w-[40%] bg-transparent py-6 border-[#2c2c31] text-sm text-gray-300 rounded-xl">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>

            <SelectContent className=" border-[#2c2c31] bg-[#131416] ">
              <SelectItem
                value="Low"
                className="px-2 py-1 m-2 rounded-lg border border-[#2e5e3d] text-xs bg-[#172D1E] text-[#6ab381] w-14 cursor-pointer"
              >
                <span>Low</span>
              </SelectItem>
              <SelectItem
                value="Medium"
                className="px-2 py-1 m-2 rounded-lg border border-[#854c30] text-xs bg-[#322017] text-[#d4a791] w-24 cursor-pointer"
              >
                Medium
              </SelectItem>
              <SelectItem
                value="High"
                className="px-2 py-0.5 m-2 rounded-lg border border-[#4C141C] text-xs bg-[#31171B] text-red-400 w-16 cursor-pointer"
              >
                High
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex items-center py-2 pt-6 text-sm gap-1 relative">
          <div className="text-[#959AA8]  absolute top-0">Sub-tasks</div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6"
          >
            <path
              d="M3 6.2002V17.8002C3 18.9203 3 19.4796 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2837 20.7822 19.9074C21 19.48 21 18.921 21 17.8031V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
              stroke="#959AA8"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            className="bg-transparent  flex-1 p-1 border-[#2c2c31] text-sm outline-none"
            placeholder="To-Do"
            value={subtasks}
            onChange={(e) => setSubtasks(e.target.value)}
          />
        </div>

        <div className="flex gap-2  items-center justify-center">
          <button
            onClick={onClose}
            className="px-3 py-3 flex-2 rounded-lg border border-[#3d3d3d] text-sm text-[#7c7c7c]"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-3  flex-1 rounded-lg bg-[#2F76ED] text-sm text-white"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskOverlay;
