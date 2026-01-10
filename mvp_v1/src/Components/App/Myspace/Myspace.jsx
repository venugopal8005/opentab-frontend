import { Outlet } from "react-router-dom";
import MyDeskSidebar from "./MyDeskSidebar";

const Myspace = () => {
  return (
    <div className="flex h-full gap-2">
      {/* Local sidebar that stays */}
      <MyDeskSidebar />

      {/* Inner MyDesk views change here */}
      <div className="flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Myspace;
