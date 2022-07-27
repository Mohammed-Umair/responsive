import {
  Drawer,
  FormControl,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
export const NavDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer anchor="right"  open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton divider>
            <ListItemIcon>
              <TextField placeholder="Search..." variant="standard" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
              <PublicIcon sx={{ color: "gray" }} />
              <FormControl
                variant="standard"
                sx={{
                  width: "20px",
                  height: "20px",
                }}  
              >
                <Select
                  sx={{
                    color: "blue",
                  }}
                >
                  <MenuItem value={10}>Create New Post</MenuItem>
                  <MenuItem value={20}>Manage Something</MenuItem>
                  <MenuItem value={30}>Do Nothing</MenuItem>
                  <MenuItem value={40}>Submit to Live</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem value={50}> Another Action</MenuItem>
                </Select>
              </FormControl>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
              <NotificationsNoneIcon sx={{ color: "gray" }} />

              <FormControl
                variant="standard"
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Notification 1 </MenuItem>
                  <MenuItem value={20}>Notification 2</MenuItem>
                  <MenuItem value={30}>Notification 3</MenuItem>
                  <MenuItem value={40}>Notification 4</MenuItem>
                  <MenuItem value={50}>Notification 5</MenuItem>
                </Select>
              </FormControl>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
            <ListIcon sx={{ color: "gray"}} />
            <FormControl
              variant="standard"
              sx={{
                width: "20px",
                height: "20px",
              }}
            >
              <Select id="demo-simple-select">
                <MenuItem value={10}>Messages</MenuItem>
                <MenuItem value={20}>Help Center</MenuItem>
                <MenuItem value={30}>Settings</MenuItem>
                <MenuItem divider></MenuItem>
                <MenuItem value={40}>Lock Screen</MenuItem>
                <MenuItem value={50}>Log Out</MenuItem>
              </Select>
            </FormControl>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ borderColor: "#DF201F" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
