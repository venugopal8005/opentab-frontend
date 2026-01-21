import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./css/Loader.css"

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, status } = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  // 🔒 HOLD THE LINE until auth resolves
  if (status === "loading") {
    return <div className="h-[100svh] w-full bg-[#070709] flex justify-center items-center"><span class="loader"></span></div>; // spinner later
 
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
