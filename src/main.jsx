import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DriverPage from "./pages/DriverPage";
import DeliveryDetailsPage from "./pages/DeliveryDetailsPage";
import Users from "./pages/Users.jsx";
import DispatchPage from "./pages/DispatchPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import LocationsPage from "./pages/LocationsPage";
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
  {
    path: "/dispatch",
    element: (
      <>
        <Navbar />
        <DispatchPage />
      </>
    ),
  },
  {
    path: "/order-status",
    element: (
      <>
        <Navbar />
        <OrderStatusPage />
      </>
    ),
  },
  {
    path: "/locations",
    element: (
      <>
        <Navbar />
        <LocationsPage />
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
