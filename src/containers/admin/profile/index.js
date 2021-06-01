import { Typography } from "@material-ui/core";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <Typography variant="h2">
        {isAuthenticated && <> Welcome {user.name} !</>}
      </Typography>
    </div>
  );
};

export default Profile;
