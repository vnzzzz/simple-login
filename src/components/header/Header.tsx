import React, { FC } from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Header: FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Simple Login</Typography>
          <Button color="inherit">
            <Link to={"/"}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/dashboard"}>Dashboard</Link>{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
