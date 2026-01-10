import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import NavRail from "./NavRail";
//just he comment

const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen bg-[#000000]">
      {/* Left global navigation */}
      <NavRail />

      {/* Right side */}
      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="flex-1 overfLow-y-auto border-l border-t rounded-tl-xl r border-[#29292D] p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
