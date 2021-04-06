
import React from "react";
import clsx from "clsx"
import { AppBar, Container, CssBaseline, Grid, Toolbar, Typography, Drawer, Divider, IconButton, Link, makeStyles, List } from "@material-ui/core";

import {
  Menu as MenuIcon, 
  ChevronLeft as ChevronLeftIcon, 
  Notifications as NotificationsIcon} from '@material-ui/icons';

import {mainListItems, secondaryListItems} from '../../components/SideBar/sideBarNavlistItems'
import Copyright from '../../components/Copyright'

const drawerWidth = 250;

const useStyles = makeStyles((theme)=>({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#0000",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },

}))

const AdminPages = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <CssBaseline/>
      <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon/>
          </IconButton>
          dgkj
        </Toolbar>
      </AppBar>
      <Container>
        <Grid>
          <Typography variant="h1">Hello!</Typography>
        </Grid>
      </Container>
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
      </div>
    )
};

export default AdminPages;
