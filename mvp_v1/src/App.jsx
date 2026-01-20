import Signup from "./Components/Auth/Signup";
import Signin from "./Components/Auth/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/App/Myspace/Dashboard/Dashboard";
import AppLayout from "./Components/App/AppLayout";
import Myspace from "./Components/App/Myspace/Myspace";
import Matrix from "./Components/App/Myspace/Matrix/Matrix";
import ProtectedRoute from "./ProtectedRoute";

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
          { path: "matrix" , element:<Matrix/>}
          // { path: "personality", element: <PersonalityMatrix /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
