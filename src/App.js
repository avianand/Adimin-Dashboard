import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useRoutes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/globalStyles";
import theme from "./components/theme";

import AdminRoute from "./utils/adminRouteWrapper";
import CustomerRoute from './utils/customerRouterWrapper'
import DashboardLayout from "./components/DashboardLayout";
import MainLayout from './components/MainLayout'
import HomePage from './containers/customer'
import ProfilePage from "./containers/admin/profile";
import AdminPage from "./containers/admin";
import AdminLoginPage from "./containers/admin/login";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <AdminRoute path="admin" element={<DashboardLayout />}>
            <AdminRoute path="home" element={<AdminPage />} />
            <AdminRoute path="dashboard" element={<AdminPage />} />
            <AdminRoute path="profile" element={<ProfilePage />} />
            <AdminRoute path="orders" element={<AdminPage />} />
            <AdminRoute path="customers" element={<AdminPage />} />
            <AdminRoute path="products" element={<AdminPage />} />
            <AdminRoute path="staffs" element={<AdminPage />} />
            <AdminRoute path="settings" element={<AdminPage />} />
          </AdminRoute>
          
          <Route path="/admin/login" element={<AdminLoginPage />} />
          
          <Route path="/" element={<MainLayout />}>
            <Route path="login" element={<AdminLoginPage />} />
            <Navigate to="/admin/home" />
          </Route>
          <CustomerRoute path="/home" element={<MainLayout />}>
            <CustomerRoute path="/home" element={<HomePage />} />
          </CustomerRoute>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
