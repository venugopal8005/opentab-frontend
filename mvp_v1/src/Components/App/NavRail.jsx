import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, label }) => {
  const isImage =
    typeof icon === "string" &&
    (icon.startsWith("/") || /\.(png|jpe?g|svg|webp)$/i.test(icon));
  const isElement = React.isValidElement(icon);

  return (
    <NavLink
      to={to}
      className={({ isActive }) => // directly checks with the current route 
        `flex flex-col items-center  text-[12px] transition 
         ${isActive ? "text-blue-500" : "text-white hover:text-gray-200"}`
      }
    >
      <div className="w-10 h-10 flex items-center justify-center bg-[] rounded-lg">
        {isElement ? (
          icon
        ) : isImage ? (
          <img src={icon} alt={label} className="w-8 h-8 object-contain" />
        ) : (
          <div className="text-[45px]">{icon}</div>
        )}
      </div>
      <span>{label}</span>
    </NavLink>
  );
};

const NavRail = () => {
  return (
    <div className="w-20 h-full flex flex-col items-center py-[58px] gap-6 bg-[#000000] text-white">
      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10 "
      >
        <path
          d="M6.89761 18.1618C8.28247 19.3099 10.0607 20 12.0001 20C16.4184 20 20.0001 16.4183 20.0001 12C20.0001 11.431 19.9407 10.8758 19.8278 10.3404M6.89761 18.1618C5.12756 16.6944 4.00014 14.4789 4.00014 12C4.00014 7.58172 7.58186 4 12.0001 4C15.8494 4 19.0637 6.71853 19.8278 10.3404M6.89761 18.1618C8.85314 17.7147 11.1796 16.7828 13.526 15.4281C16.2564 13.8517 18.4773 12.0125 19.8278 10.3404M6.89761 18.1618C4.46844 18.7171 2.61159 18.5243 1.99965 17.4644C1.36934 16.3726 2.19631 14.5969 3.99999 12.709M19.8278 10.3404C21.0796 8.79041 21.5836 7.38405 21.0522 6.46374C20.5134 5.53051 19.0095 5.26939 16.9997 5.59929"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg> */}

      <NavItem
        to="/app/myspace"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-9 h-9 text-current stroke-current"
          >
            <path
              d="M15 20H9M4 13.8002V8.2002C4 7.08009 4 6.51962 4.21799 6.0918C4.40973 5.71547 4.71547 5.40973 5.0918 5.21799C5.51962 5 6.08009 5 7.2002 5H16.8002C17.9203 5 18.4796 5 18.9074 5.21799C19.2837 5.40973 19.5905 5.71547 19.7822 6.0918C20 6.5192 20 7.07899 20 8.19691V13.8031C20 14.921 20 15.48 19.7822 15.9074C19.5905 16.2837 19.2837 16.5905 18.9074 16.7822C18.48 17 17.921 17 16.8031 17H7.19691C6.07899 17 5.5192 17 5.0918 16.7822C4.71547 16.5905 4.40973 16.2837 4.21799 15.9074C4 15.4796 4 14.9203 4 13.8002Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        label="MyDesk"
      />
      <NavItem
        to="/app/connections"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-9 h-9 text-current stroke-current"
          >
            <path
              d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        label="Peers"
      />
      <NavItem
        to="/app/workspaces"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-9 h-9 text-current stroke-current"
          >
            <path
              d="M4 6H20M16 16H13M8 12L10 14L8 16M3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.921 21 18.48 20.7822 18.9074C20.5905 19.2837 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20L6.19694 20C5.079 20 4.51921 20 4.0918 19.7822C3.71547 19.5905 3.40973 19.2837 3.21799 18.9074C3 18.4796 3 17.9203 3 16.8002Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        label="Spaces"
      />
      <NavItem
        to="/app/feed"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-9 h-9 text-current stroke-current"
          >
            <path
              d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 10.5L16 8L13.5 13.5L8 16L10.5 10.5Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        label="Explore"
      />
    </div>
  );
};

export default NavRail;
