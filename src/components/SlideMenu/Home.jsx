import {
  Grid,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  Paper,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BarChartAndTask } from "../Pages/Dashboard/BarChartAndTask";
import { Sales } from "../Pages/Dashboard/Sales";
import { ChartsComPage } from "../Pages/Dashboard/ChartsComPage";
import DashboardCard from "../Pages/Dashboard/DashboardCard";
import DrawerPage from "../unused/DrawerPage";
import { Footer } from "../NavBar/Footer";
import SlideBar from "../unused/SlideBar";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListIcon from "@mui/icons-material/List";
import { Routing } from "../Routing/Routing";
import { NavDrawer } from "../unused/NavDrawer";
import NavBarr from "../NavBar/NavBarr";
import DemoList from "../SideBar/SideBar";
import SideBar from "../SideBar/SideBar";
import { NavSlide } from "./NavSlide";

export const Home = () => {
  const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  //   const [menuOpen, setMenuOpen] = useState(false);

  const slideBar = useRef(null);
  console.log(slideBar.current);
  const menu = useRef(null);
  console.log(menu.current);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isMatch) {
      slideBar.current.style.width = "0px";
      menu.current.style.marginLeft = "0px";
    } else {
      slideBar.current.style.width = "250px";
      menu.current.style.marginLeft = "250px";
    }
  }, [isMatch]);

  const handleOpen = () => {
    // setMenuOpen(true)
    setOpen(true);
    slideBar.current.style.width = "250px";
    menu.current.style.marginLeft = "250px";
  };

  const handleClose = () => {
    // setMenuOpen(false)
    setOpen(false);
    slideBar.current.style.width = "72px";
    menu.current.style.marginLeft = "72px";
  };

  const handleOpenRight = () => {
    setOpen(true);
    slideBar.current.style.width = "220px";
    menu.current.style.marginLeft = "220px";
  };
  const handleOpenLeft = () => {
    setOpen(false);
    slideBar.current.style.width = "0px";
    menu.current.style.marginLeft = "0px";
  };

  /////

  const navBar = useRef(null);
  const main = useRef(null);
  const handleOpenBottom = () => {
    // setMenuOpen(true)
    setIsOpen(true);
    navBar.current.style.height = "250px";
    main.current.style.marginBottom = "250px";
  };

  const handleCloseBottom = () => {
    // setMenuOpen(false)
    setIsOpen(false);
    navBar.current.style.height = "0px";
    main.current.style.marginbottom = "0px";
  };

  /////

  return (
    <>
      {isMatch ? (
        <Grid container>
          <Grid
            ref={slideBar}
            item
            sx={{
              height: "100%",
              width: "0px",
              "&:hover": {
                width: "250px",
              },
              position: "fixed",
              color: "#fff",
              top: 0,
              left: 0,
              backgroundColor: "#1f2020",
              overflowX: "hidden",
              transition: "0.5s",
              // paddingTop: "60px",
              zIndex: 10,
            }}
          >
            <Box>
              <SideBar />
            </Box>
          </Grid>
          <Grid
            ref={menu}
            item
            sx={{
              padding: "16px",
              transition: "marginLeft .5s",
              background: "#f8f9fa",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                 
                }}
              >
                
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "40px",
                      height: "40px",
                      background: "#1f2020",
                      borderRadius: "50%",
                      ml: 1,
                      // position:"fixed",
                      // top:"20px",
                    }}
                  >
                    <Button>
                      {open ? (
                        <MoreVertIcon
                          sx={{
                            color: "white",
                          }}
                          onClick={handleOpenLeft}
                        />
                      ) : (
                        <MenuIcon
                          sx={{
                            color: "white",
                          }}
                          onClick={handleOpenRight}
                        />
                      )}
                    </Button>
                  </Box>
               
                <Box ref={navBar}
                sx={{
                 
                 
                }}
                >
               
                  <Button>
                    {isOpen ? (
                      <MoreVertIcon
                        sx={{
                          color: "black",
                        }}
                        onClick={handleCloseBottom}
                      />
                    ) : (
                      <MenuIcon
                        sx={{
                          color: "black",
                        }}
                        onClick={handleOpenBottom}
                      />
                    )}
                  </Button>
                 <Typography>zoya</Typography>
                 <Typography>zoya</Typography>
                 <Typography>zoya</Typography>
                 <Typography>zoya</Typography>
                 <Typography>zoya</Typography>
                </Box>
                </Box>
            </Grid>
            <Grid item xs={12} ref={main}>
              <Routing />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid
            ref={slideBar}
            item
            sx={{
              height: "100%",
              width: 0,
              "&:hover": {
                width: "250px",
              },
              position: "fixed",
              color: "#fff",
              top: 0,
              left: 0,
              backgroundColor: "#1f2020",
              overflowX: "hidden",
              transition: "0.5s",
              // paddingTop: "60px",
              zIndex: 10,
            }}
          >
            <Box>
              <SideBar />
            </Box>
          </Grid>
          <Grid
            ref={menu}
            item
            sx={{
              padding: "16px",
              transition: ".5s",
              background: "#f8f9fa",
            }}
            xs={12}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "40px",
                      height: "40px",
                      background: "#1f2020",
                      borderRadius: "50%",
                      ml: 1,
                    }}
                  >
                    <Button>
                      {open ? (
                        <MoreVertIcon
                          sx={{
                            color: "white",
                          }}
                          onClick={handleClose}
                        />
                      ) : (
                        <MenuIcon
                          sx={{
                            color: "white",
                          }}
                          onClick={handleOpen}
                        />
                      )}
                    </Button>
                  </Box>
                  <Typography variant="h6" color="gray" ml={1}>
                    Buttons
                  </Typography>
                  <SearchIcon sx={{ color: "gray", ml: 1 }} />
                  <TextField placeholder="Search..." variant="standard" />
                </Box>
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
              </Box>
            </Grid>
            <Divider />
            <Grid item xs={12}>
              {/* <DashboardCard />
              <Sales />
              <ChartsComPage />
              <BarChartAndTask /> */}

              <Routing />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
