import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormControl, Select, TextField, Box, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const options = [
  <Box>
    <SearchIcon sx={{ color: "gray" }} />
    <TextField variant="standard" placeholder="Search..." />
  </Box>,

  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <PublicIcon sx={{ color: "gray", mt: 2 }} />
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
  </Box>,
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <NotificationsNoneIcon sx={{ color: "gray", mt: 2 }} />

    <FormControl
      variant="standard"
      sx={{
        width: "20px",
        height: "20px",
      }}
    >
      <Select labelId="demo-simple-select-label" id="demo-simple-select">
        <MenuItem value={10}>Notification 1 </MenuItem>
        <MenuItem value={20}>Notification 2</MenuItem>
        <MenuItem value={30}>Notification 3</MenuItem>
        <MenuItem value={40}>Notification 4</MenuItem>
        <MenuItem value={50}>Notification 5</MenuItem>
      </Select>
    </FormControl>
    <Box
      sx={{
        position: "relative",
        right: "47px",
        top: "-4px",
        width: "20px",
        height: "20px",
        background: "red",
        borderRadius: "50%",
        color: "whitesmoke",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "16px",
      }}
    >
      5
    </Box>
  </Box>,
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <ListIcon sx={{ color: "gray", mt: 2 }} />
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
  </Box>,

  
];

const ITEM_HEIGHT = 50;

export default function NavBarr() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "100%",
           marginTop:"15px",
          },
        }}
      >
        {/* <MenuItem   onClick={handleClose}>

        </MenuItem> */}
        {options.map((option) => (
          <MenuItem key={option} >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
