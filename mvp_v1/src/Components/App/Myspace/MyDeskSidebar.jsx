import { NavLink } from "react-router-dom";

const Item = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md text-lg
         ${isActive ? "bg-[#2F76ED] text-white" : "text-gray-400 hover:bg-[#121213]"}`
      }
    >
      {label}
    </NavLink>
  );
};

const MyDeskSidebar = () => {
  return (
    <div className="w-72 h-full h-max-[90svh] rounded-xl bg-[#070709] p-4 flex flex-col gap-6 border-[#29292D] border">
      {/* Header */}
      {/* <div className="text-sm font-semibold">MyDesk</div> */}

      {/* Primary */}
      <div className="flex flex-col gap-1">
        <Item to="/app/myspace/dashboard" label="Dashboard" />
        {/* <Item to="/app/myspace/matrix" label="Personality Matrix" /> */}
      </div>

      {/* Boards */}
      {/* <div className="flex flex-col gap-1">
        <div className="text-xs text-gray-500 mt-2">Boards</div>
        <Item to="/app/myspace/boards/roadmap" label="Product Roadmap" />
        <Item to="/app/myspace/boards/design" label="Design Sprint" />
        <Item to="/app/myspace/boards/weekly" label="Weekly Goals" />
        <div className="mt-1 text-xs text-gray-400 cursor-pointer">
          + New board
        </div>
      </div> */}
    </div>
  );
};

export default MyDeskSidebar;
