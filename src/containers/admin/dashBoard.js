import { useState } from "react";
import { Outlet } from "react-router-dom";
import { experimentalStyled, makeStyles } from "@material-ui/core";
import DashboardNavbar from "../../components/AdminNavBar";
import DashboardSidebar from "../../components/AdminSideBar";

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
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
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
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.dashBoardWrapper}>
        <div className={classes.dashBoardContainer}>
          <div className={classes.dashBoardContent}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
