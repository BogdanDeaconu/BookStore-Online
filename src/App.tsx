import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage, { loader as booksLoader } from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import ShoopingCartPage from "./pages/ShoopingCartPage";
import CheckOutPage from "./pages/CheckOutPage";
import OrdersPage from "./pages/OrdersPage";
import LogInPage from "./pages/LogInPage";
import React from "react";
import EditOrderDetailsPage from "./pages/EditOrderDetailsPafe";
import RegisterPage from "./pages/RegisterPage";
import UsersRoutePaths from "./helpers/users-route-paths";

let router: any;


if (typeof window !== "undefined") {
  router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: booksLoader },
        { path: "/book/:id", element: <BookDetailPage />, loader: booksLoader },
        { path: "/cart", element: <ShoopingCartPage /> },
        { path: "/checkout", element: <CheckOutPage /> },
        { path: "/orders", element: <UsersRoutePaths/> },
        { path: "/orders/:id", element: <EditOrderDetailsPage /> },
        { path: "/login", element: <LogInPage /> },
        { path: "/register", element: <RegisterPage /> },
      ],
    },
  ]);
}

function App() {
  return router ? <RouterProvider router={router} /> : null;
}

export default App;
