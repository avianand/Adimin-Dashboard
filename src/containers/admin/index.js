
import React, { useState } from "react";
import clsx from "clsx"
import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  IconButton,
  makeStyles,
  List,
  Hidden,
  WithWidth,
  Link,
  Box,
  Badge,
  Input,
} from "@material-ui/core";
import PropTypes from "prop-types";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
  Home,
  Notifications,
  NotificationsOutlined,
} from "@material-ui/icons";

import {mainListItems, secondaryListItems} from '../../components/SideBar/sideBarNavlistItems'
import Copyright from '../../components/Copyright'
import DashboardLayout from "./dashBoard";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    zIndex: "9999",
    color: "#0000",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    marginTop: theme.spacing(8),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  toolbarIconLeft: {
    color: "#0000",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
}));

const AdminPages = ({width}) => {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);
  const [notifications] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <Link to="/">
            <Home />
          </Link>
        </Toolbar>
      </AppBar> */}
      <DashboardLayout>fshvbj</DashboardLayout>
    </div>
  );
};

AdminPages.propTypes = {};

export default AdminPages;
