import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DriverPage from "./pages/DriverPage";
import DeliveryDetailsPage from "./pages/DeliveryDetailsPage";
import Users from "./pages/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <DriverPage />
      </>
    ),
  },
  {
    path: "/delivery/:deliveryIndex",
    element: (
      <>
        <Navbar />
        <DeliveryDetailsPage />
      </>
    ),
  },
  {
    path: "/users",
    element: (
      <>
        <Navbar />
        <Users />
      </>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
