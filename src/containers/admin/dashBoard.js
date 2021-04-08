import { useState } from "react";
import clsx from 'clsx';
import {  makeStyles } from "@material-ui/core";
import DashboardSidebar from "../../components/AdminSideBar";

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  dashBoardWrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  dashBoardWrapperShift: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
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
  dashBoardContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  dashBoardContent: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const DashboardLayout = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <DashboardSidebar
        onMobileClose={() => setOpen(false)}
        open={open}
        setOpen={setOpen}
      />
      <div
          className={clsx(classes.dashBoardWrapper, open && classes.dashBoardWrapperShift)}
      >
        <div className={classes.dashBoardContainer}>
          <div className={classes.dashBoardContent}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
