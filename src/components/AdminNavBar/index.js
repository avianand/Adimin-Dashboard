import React, { useState } from "react";
import { Link, NavLink as RouterNavLink, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import { useAuth0 } from "@auth0/auth0-react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ExitToAppOutlined, PersonOutlined } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 25
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
      textDecoration: "none"
   },
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const DashboardNavbar = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  let history = useHistory();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  const handleClickOnProfilePicture = () => {
      history.push("/admin/profile");
     }
  return (
    <AppBar
      elevation={0}
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          <Link className={classes.link} to="/admin">Dashboard</Link>
        </Typography>
        
        {isAuthenticated && (
          <>
        <IconButton onClick={handleClickOnProfilePicture}>
          <Avatar className={classes.orange} src={user.picture} >
            {user.name.split("").splice(0,1).join("")}
          </Avatar>
        </IconButton>
        <IconButton color="inherit" className={classes.menuButton}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
      </IconButton>
        
        <IconButton color="inherit" className={classes.menuButton} onClick={() => logoutWithRedirect()}>
          <ExitToAppOutlined/>
        </IconButton></>
        )}
        
        
        {!isAuthenticated && (
          <IconButton color="inherit" onClick={() => loginWithRedirect({})}>
            <Badge badgeContent={0} color="secondary">
              <PersonOutlined />
            </Badge>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default DashboardNavbar;
