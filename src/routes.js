import { Navigate } from "react-router-dom";
import AdminRoute from "./utils/adminRouteWrapper";
import AdminPage from "./containers/admin";
import DashboardLayout from "./components/DashboardLayout";
import MainLayout from "./components/MainLayout";
const routes = [
  {
    path: "admin",
    element: <DashboardLayout />,
    children: [
      { path: "s", element: <AdminRoute component={AdminPage} /> },
      //   { path: "account", element: <Account /> },
      //   { path: "customers", element: <CustomerList /> },
      //   { path: "dashboard", element: <Dashboard /> },
      //   { path: "products", element: <ProductList /> },
      //   { path: "settings", element: <Settings /> },
      // { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      //   { path: "login", element: <Login /> },
      //   { path: "register", element: <Register /> },
      //   { path: "404", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
