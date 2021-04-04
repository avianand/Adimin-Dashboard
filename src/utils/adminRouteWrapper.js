import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CheckAuthorization, checkAdmin } from "./helpers";
import ErrorBoundary from "../components/ErrorComponent/admin";
import { useAuth0 } from "@auth0/auth0-react";

const AdminRoute = ({ Component: Component, redirect: pathname, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  const check = CheckAuthorization();
  console.log({ check });
  const Routes = (props) => {
    console.log({ isAuthenticated });
    if (CheckAuthorization()) {
      return (
        <Route
          {...rest}
          render={(props) => {
            return (
              <ErrorBoundary>
                <Component {...rest} {...props} />
              </ErrorBoundary>
            );
          }}
        />
      );
    }
    return <Navigate to="/login" />;
  };
  return <Routes />;
};

AdminRoute.defaultProps = { redirect: "/admin/login" };

AdminRoute.propTypes = {
  element: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default AdminRoute;
