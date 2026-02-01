import Signup from "./Components/Auth/Signup";
import Signin from "./Components/Auth/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/App/Myspace/Dashboard/Dashboard";
import AppLayout from "./Components/App/AppLayout";
import Myspace from "./Components/App/Myspace/Myspace";
import Matrix from "./Components/App/Myspace/Matrix/Matrix";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";
import { checkAuth } from "./Features/Auth/authThunks";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  // public routes
  { path: "/", element: <Signin /> },
  { path: "/signin", element: <Signin /> },

  { path: "/signup", element: <Signup /> },
  // protected app routes
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "myspace",
        element: <Myspace />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "matrix", element: <Matrix /> },
        ],
      },
    ],
  },
]);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}
