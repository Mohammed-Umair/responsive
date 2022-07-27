import { Grid, Box, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import Nav from "../NavBar/Nav";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const TestingSideBar = () => {
  const [open, setOpen] = useState(true);

  const nav = useRef(null);
  const main = useRef(null);

  const handleOpen = () => {
    // setMenuOpen(true)
    setOpen(true);
    nav.current.style.width = "250px";
    main.current.style.marginLeft = "250px";
  };

  const handleClose = () => {
    // setMenuOpen(false)
    setOpen(false);
    nav.current.style.width = "72px";
    main.current.style.marginLeft = "72px";
  };

  return (
    <>
      <Grid container>
        <Grid item ref={nav}>
          <Box>
            <Typography>Umair</Typography>
            <Typography>Umair</Typography>
            <Typography>Umair</Typography>
            <Typography>Umair</Typography>
            <Typography>Umair</Typography>
          </Box>
        </Grid>
       
          <Grid item ref={main}>
          <Grid item>
            <Nav  open={open} handleClose={handleClose} handleOpen={handleOpen} />
          </Grid>
            <Dashboard />
          </Grid>
      
      </Grid>
    </>
  );
};
