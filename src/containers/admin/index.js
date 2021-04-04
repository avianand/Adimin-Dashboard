import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { connect } from "react-redux";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

function Admin() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  console.log({ user });
  console.log({ isAuthenticated });
  return (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </Button>
      </div>
    </>
  );
}

export default connect(null)(Admin);
