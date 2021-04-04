import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </div>
  );
};

export default Login;
