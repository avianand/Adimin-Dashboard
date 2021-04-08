
import React, { useState } from "react";
import {
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Copyright from '../../components/Copyright'
import DashboardLayout from "./dashBoard";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import Profile from "./profile";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

const AdminPages = ({width}) => {
  const classes = useStyles();
  const {path, url} = useRouteMatch()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardLayout>
        <Typography variant="h1">Hello!</Typography>
        <Switch>
          <Route path={`${path}/profile`}><Profile/></Route>
        </Switch>
        <Copyright />
      </DashboardLayout>
    </div>
  );
};

export default AdminPages;
