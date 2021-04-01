import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { checkAuthorization, checkAdmin } from "./helpers";
import ErrorBoundary from "../components/ErrorComponent/admin";

const AdminRoute = ({ component: Component, redirect: pathname, ...rest }) => {
  const Routes = (props) => {
    if (true) {
      console.log("dfhvbj");
      return (
        <Route
          {...rest}
          render={(props) => {
            console.log("fsdvb");
            return (
              <ErrorBoundary>
                {console.log("fsdvb")}
                <Component {...rest} {...props} />
              </ErrorBoundary>
            );
          }}
        />
      );
    }
    return (
      <Navigate
        to={{
          pathname,
          state: { from: props.location },
        }}
      />
    );
  };
  return <Routes />;
};

AdminRoute.defaultProps = { redirect: "/admin/login" };

AdminRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default AdminRoute;
