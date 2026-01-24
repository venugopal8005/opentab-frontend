import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import NavRail from "./NavRail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "@/Features/Myspace/Dashboard/Kanban/taskThunk";
//just he comment

const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className="flex h-screen w-screen bg-[#000000] relative">
      {/* Left global navigation */}
      <NavRail />

      {/* Right side */}
      <div className="flex flex-col flex-1 h-full">
        <Topbar />

        <main className="border-l border-t rounded-tl-xl  flex-1 border-[#29292D] p-2 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
