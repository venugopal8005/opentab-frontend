import { useLocation } from "react-router-dom";

const getSectionTitle = (pathname) => {
  if (pathname.includes("/myspace")) return "MyDesk";
  if (pathname.includes("/feed")) return "Feed";
  if (pathname.includes("/workspaces")) return "Workspaces";
  if (pathname.includes("/connections")) return "Connections";
  return "";
};

const Topbar = () => {
  const { pathname } = useLocation();
  const title = getSectionTitle(pathname);

  return (
    <div className="h-12 pl-9 pr-5 flex items-center justify-between  text-white">
      {/* Section title */}
      <span className="text-xl font-Medium">{title}</span>
<p className="text-2xl">Opentab</p>
      {/* Utilities */}
      <div className="flex items-center gap-4">
        <button className="text-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17.0001M15 17L9 17.0001M15 17H19C19.5523 17 20 16.5523 20 16V15.4141C20 15.1489 19.8945 14.8946 19.707 14.707L19.1963 14.1963C19.0706 14.0706 19 13.9 19 13.7222V10C19 9.82357 18.9936 9.64855 18.9805 9.4761M9 17.0001L5 17.0001C4.44772 17.0001 4 16.5521 4 15.9998V15.4141C4 15.1489 4.10544 14.8949 4.29297 14.7073L4.80371 14.1958C4.92939 14.0701 5 13.9002 5 13.7224V9.99998C5 6.13401 8.134 3 12 3C12.7116 3 13.3984 3.10618 14.0454 3.30357M18.9805 9.4761C20.1868 8.7873 21 7.48861 21 6C21 3.79086 19.2091 2 17 2C15.8298 2 14.7769 2.50253 14.0454 3.30357M18.9805 9.4761C18.3966 9.80949 17.7205 10 17 10C14.7909 10 13 8.20914 13 6C13 4.9611 13.3961 4.0147 14.0454 3.30357M18.9805 9.4761C18.9805 9.47609 18.9805 9.4761 18.9805 9.4761ZM14.0454 3.30357C14.0459 3.30371 14.0464 3.30385 14.0468 3.304"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="text-sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          
          >
            <path
              d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
