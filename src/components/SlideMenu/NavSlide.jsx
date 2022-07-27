import React, { useRef, useState } from "react";
import NavBarr from "../NavBar/NavBarr";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { Button, Grid, Typography, Box } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export const NavSlide = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const navBar = useRef(null);
  const main = useRef(null);


  const handleOpenBottom = () => {
    setIsOpen(true);
    navBar.current.style.height = "250px";
    main.current.style.marginBottom = "250px";
  };
  const handleCloseBottom = () => {
    setIsOpen(false);
    navBar.current.style.height = "0px";
    main.current.style.marginBottom = "0px";
  };

  return (
    <>
      <Grid container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            item
            ref={navBar}

            sx={{
              height: "0px",
              width: "100%",
              // position: "fixed",
              // top: 0,
              // left: 0,
              // color:"white",
              // backgroundColor: "#1f2020",
              // overflowY: "hidden",
              transition: "0.5s",
              // zIndex: 1000,
            }}
          >
            <Box>
              <Button>
                {!isOpen ? (
                  <MoreVertIcon
                    sx={{
                      color: "black",
                    }}
                    onClick={handleOpenBottom}
                  />
                ) : (
                  <MenuIcon
                    sx={{
                      color: "black",
                    }}
                    onClick={handleCloseBottom}
                  />
                )}
              </Button>
              {/* <Typography>llll</Typography>
              <Typography>llll</Typography>
              <Typography>llll</Typography>
              <Typography>llll</Typography> */}
              
                <List
                
                  sx={{
                    width: "100vw",
                    // maxWidth:"100%",
                    // maxHeight: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              
            </Box>
          </Box>
        </Box>
        <Grid item ref={main}
        
        >
          <Dashboard />
        </Grid>
      </Grid>
    </>
  );
};
