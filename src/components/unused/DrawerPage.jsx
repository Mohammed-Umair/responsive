import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import {useNavigate} from "react-router-dom"
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
import FormatAlignJustifyTwoToneIcon from "@mui/icons-material/FormatAlignJustifyTwoTone";
import TableViewTwoToneIcon from "@mui/icons-material/TableViewTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DrawerPage = () => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()

  
  return (
    <>
      <Drawer
  
      open={open} onClose={() => setOpen(false)} >
        <List>
          <ListItemButton divider>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "220px",
                  ml: 2,
                  //   height:"50px"
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: 40,
                    //   maxHeight: { xs: 233, md: 167 },
                    //   maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="React Logo."
                  src="logo192.png"
                />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    ml: 2,
                    textTransform: "uppercase",
                    color: "black",
                  }}
                >
                  Creative Tim
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider color="black">
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  //   background: "yellow",
                  width: "220px",
                  ml: 2,
                  //   height:"50px"
                }}
              >
                <Avatar alt="logo" src="/assests/logo.webp" />

                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "50px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                >
                  Zarnain alam
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                  width: "220px",
                }}
              >
                <GridViewTwoToneIcon  />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                  onClick={()=>navigate("/dashboard")}
                >
                  Dashboard
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                  width: "220px",
                }}
              >
                <ViewInArTwoToneIcon />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                  onClick={()=>navigate("/componentsPages")}

                >
                  components
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                  width: "220px",
                }}
              >
                <FormatAlignJustifyTwoToneIcon />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                >
                  Forms
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                  width: "220px",
                }}
              >
                <TableViewTwoToneIcon />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                >
                  Tables
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                  width: "220px",
                }}
              >
                <AddLocationAltTwoToneIcon />

                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                >
                  Maps
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                  width: "220px",
                }}
              >
                <BarChartTwoToneIcon />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                >
                  Charts
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                  width: "220px",
                }}
              >
                <CalendarMonthTwoToneIcon />

                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                >
                  Calender
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "220px",
                  ml: 2,
                }}
              >
                <ContactPageTwoToneIcon />

                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    color: "black",
                    ml: 2,
                  }}
                >
                  Pages
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItemButton>
         
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open) }>
        {open?
        <MoreVertIcon sx={{color:"white",mt:.5,ml:.5,fontSize:"25px"}}/>
        :<MenuIcon sx={{color:"white",mt:.5,ml:.5,fontSize:"25px"}}  />}
      </IconButton>
    </>
  );
};

export default DrawerPage;
