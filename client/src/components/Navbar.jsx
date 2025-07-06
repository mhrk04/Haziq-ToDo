import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { isAuthenticated, login, getUsername, logout } from "../utils/auth";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const [currentUser, setCurrentUser] = useState(getUsername());

  const location = useLocation();

  useEffect(() => {
    setLoggedIn(isAuthenticated());
    setCurrentUser(getUsername());
  }, [location]);

  console.log("currentUser from localStorage:", getUsername());

  const logoutHandler = () => {
    logout(); //removes token from the localstorage
    setLoggedIn(false);
    setCurrentUser(null);
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          Haziq ToDo (:
        </Typography>
        <Box>
          {loggedIn ? (
            <>
              <Button component={Link} to="/home" color="inherit">
                {currentUser}👋
              </Button>
              <Button color="inherit" onClick={logoutHandler}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
