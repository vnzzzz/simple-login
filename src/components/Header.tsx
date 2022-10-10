import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = (): JSX.Element => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Simple Login Example</Typography>
          <Button color="inherit">
            <Link to={"/"}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/login"}>Login</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/dashboard"}>Dashboard</Link>{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
