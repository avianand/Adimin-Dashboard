import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Button variant="contained" onClick={handleClick}>
            Login
          </Button>
        </div>
      )}
    </>
  );
};

export default Profile;
