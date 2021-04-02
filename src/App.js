import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/globalStyles";
import theme from "./components/theme";
import AdminPage from "./containers/admin";
import AdminRoute from "./utils/adminRouteWrapper";
import CustomerRoute from './utils/customerRouterWrapper'
import DashboardLayout from "./components/DashboardLayout";
import MainLayout from './components/MainLayout'
import HomePage from './containers/customer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <AdminRoute path="admin" element={<DashboardLayout />}>
            <AdminRoute path="home" element={<AdminPage />} />
            <AdminRoute path="dashboard" element={<AdminPage />} />
            <AdminRoute path="orders" element={<AdminPage  />}  />
            <AdminRoute path="customers" element={<AdminPage  />}  />
            <AdminRoute path="products" element={<AdminPage  />}  />
            <AdminRoute path="staffs" element={<AdminPage  />}  />
          </AdminRoute>
          <CustomerRoute path="/" element={<MainLayout />}>
            <CustomerRoute path="/" element={<HomePage />} />
          </CustomerRoute>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
