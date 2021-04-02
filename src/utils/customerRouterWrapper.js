import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { checkAuthorization, checkAdmin } from "./helpers";
import ErrorBoundary from "../components/ErrorComponent/admin";

const CustomerRoute = ({
  Component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    if (true) {
      return (
        <Route
          {...rest}
          render={(props) => {
            return (
              <ErrorBoundary>
                {console.log("customer route")}
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

CustomerRoute.defaultProps = { redirect: "/admin/login" };

CustomerRoute.propTypes = {
  element: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default CustomerRoute;
