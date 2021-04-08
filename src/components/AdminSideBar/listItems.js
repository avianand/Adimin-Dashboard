import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Divider } from "@material-ui/core";
import {
  AllInboxOutlined,
  AssignmentOutlined,
  BarChartOutlined,
  ErrorOutlineOutlined,
  LockOutlined,
  PeopleAltOutlined,
  PeopleOutlined,
  PersonAddOutlined,
  SettingsOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const firstList = [
  {
    href: "/app/dashboard",
    icon: <BarChartOutlined />,
    title: "Dashboard",
  },
  {
    href: "/app/customers",
    icon: <PeopleAltOutlined />,
    title: "Customers",
  },
  {
    href: "/app/products",
    icon: <ShoppingBasketOutlined />,
    title: "Products",
  },
  {
    href: "/app/account",
    icon: <PeopleOutlined />,
    title: "Account",
  },
  {
    href: "/app/settings",
    icon: <SettingsOutlined />,
    title: "Settings",
  },
  {
    href: "/login",
    icon: <LockOutlined />,
    title: "Login",
  },
  {
    href: "/register",
    icon: <PersonAddOutlined />,
    title: "Register",
  },
  {
    href: "/404",
    icon: <ErrorOutlineOutlined />,
    title: "Error",
  },
];

const secondList = [
  {
    href: "/app/dashboard",
    icon: <AssignmentOutlined />,
    title: "Dashboard",
  },
  {
    href: "/app/customers",
    icon: <AssignmentOutlined />,
    title: "Customers",
  },
  {
    href: "/app/products",
    icon: <AssignmentOutlined />,
    title: "Products",
  },
];

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const NestedLists = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {firstList.map((item) => {
          return (
            <>
              <ListItemLink
                icon={item.icon}
                primary={item.title}
                to={item.href}
              />
            </>
          );
        })}

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AllInboxOutlined />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>

        <Divider />

        <ListSubheader inset>Saved reports</ListSubheader>
        {secondList.map((item) => {
          return (
            <>
              <ListItemLink
                icon={item.icon}
                primary={item.title}
                to={item.href}
              />
            </>
          );
        })}
      </List>
    </div>
  );
};

export default NestedLists;
