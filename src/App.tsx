import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link as RouterLink,
  Redirect
} from "react-router-dom";

import routes from "./pages/routes";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Button, CircularProgress } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./App.css";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuSection1 = [
  {
    text: "Order",
    icon: RestaurantMenuIcon,
    link: "/order",
  },
  {
    text: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    text: "Membership manager",
    icon: PeopleAltIcon,
    link: "/membership",
  },
];

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [logInfo, setLogInfo] = React.useState("Login");
  const [redirect, setRedirect] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogClick = () => {
    if (localStorage.isAuth === 'true') {
      localStorage.setItem("isAuth", "false");
      setLogInfo("Logout");
    } else {
      setLogInfo("Login");
    }
  };

  const handleLogin = (e: any) =>{
    e.preventDefault();
    localStorage.isAuth = true
    setRedirect(true);
    setLogInfo("Logout")
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Coffee Manager
            </Typography>
            <Button
              color="inherit"
              sx={{ ml: "auto" }}
              onClick={handleLogClick}
              href='/login'
            >
              {logInfo}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {menuSection1.map((data, index) => (
              <ListItem
                button
                component={RouterLink}
                to={data.link}
                key={data.text}
              >
                <ListItemIcon>
                  <data.icon />
                </ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Routes section */}
        <Box component="main" sx={{ flexGrow: 1, pt: 8, height: "100vh" }}>
          <Switch>
            {routes.map(({ component: Component, path, ...rest }) => {
              return (
                <Route
                  render={(props) => {
                    return (<React.Suspense
                      fallback={
                        <CircularProgress
                          size={80}
                          sx={{ position: "fixed", top: "50%", left: "50%" }}
                        />
                      }
                    >
                      {rest.public || localStorage.isAuth === 'true' ? (
                        props.location.pathname === '/login'? <Component handleLogin={handleLogin} redirect={redirect} {...props}/> : <Component {...props} /> 
                      ) : (
                        <Redirect to="/login" />
                      )}
                    </React.Suspense>)
                  }}
                  key={path}
                  path={path}
                  {...rest}
                />
              );
            })}
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
