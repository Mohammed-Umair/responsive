import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Avatar,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerPage from "./DrawerPage";
import PublicIcon from "@mui/icons-material/Public";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import { NavDrawer } from "./NavDrawer";

const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <Grid container component={Paper} height="60px">
          <Grid item xs={0.3}></Grid>
          <Grid item xs={5.2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "#002448",
                  borderRadius: "50%",
                  mt: 0.5,
                }}
              >
                <DrawerPage />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontSize: "18px",
                  // lineHeight: "40px",
                  ml: 1,
                  color: "grey",
                }}
              >
                Buttons
              </Typography>
              <SearchIcon sx={{ color: "gray", ml: 1 }} />
              <TextField placeholder="Search..." variant="standard" />
            </Box>
          </Grid>
          <Grid item xs={5.5}></Grid>
          <Grid item xs={1}>
            <NavDrawer/>
          </Grid>
         
        </Grid>
      ) : (
        <Grid container component={Paper} height="60px">
          <Grid item xs={0.3}></Grid>
          <Grid item xs={5.2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "#002448",
                  borderRadius: "50%",
                  mt: 0.5,
                }}
              >
                <DrawerPage />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontSize: "18px",
                  // lineHeight: "40px",
                  ml: 1,
                  color: "grey",
                }}
              >
                Buttons
              </Typography>
              <SearchIcon sx={{ color: "gray", ml: 1 }} />
              <TextField placeholder="Search..." variant="standard" />
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
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
              </Box>
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
              </Box>
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
              </Box>
            </Box>
          </Grid>
          <Grid item xs={0.5}></Grid>
        </Grid>
      )}
    </>
  );
};

export default NavBar;
