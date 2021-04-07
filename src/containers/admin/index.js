
import React from "react";
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
} from "@material-ui/core";
import PropTypes from "prop-types";
import {
  Menu as MenuIcon, 
  ChevronLeft as ChevronLeftIcon, 
  Notifications as NotificationsIcon} from '@material-ui/icons';

import {mainListItems, secondaryListItems} from '../../components/SideBar/sideBarNavlistItems'
import Copyright from '../../components/Copyright'

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    zIndex: "9999",
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} position="relative">
      <div className={classes.toolbarIconLeft}>
            <Toolbar color="inherit">
              <IconButton onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
              dgkj
            </Toolbar>
       </div>
      </AppBar>
      <Container>
        <Grid>
          <Typography variant="h1">Hello!</Typography>
          current width is : {width}{console.log(width)}
        </Grid>
      </Container>
      <Hidden smUp>
      <Drawer
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        onClose={handleDrawerClose}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      </Hidden>
      <Hidden xsDown>
      <Drawer
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={true}
        onClose={handleDrawerClose}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      </Hidden>
    </div>
  );
};

AdminPages.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default AdminPages;
