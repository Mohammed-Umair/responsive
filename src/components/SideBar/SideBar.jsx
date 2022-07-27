import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
import FormatAlignJustifyTwoToneIcon from "@mui/icons-material/FormatAlignJustifyTwoTone";
import TableViewTwoToneIcon from "@mui/icons-material/TableViewTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import { Avatar, Divider } from "@mui/material";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function SideBar() {
  const [openUser, setOpenUser] = React.useState(false);
  const [openComponent, setOpenComponent] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [openTable, setOpenTable] = React.useState(false);
  const [openMap, setOpenMap] = React.useState(false);
  const [openPage, setOpenPage] = React.useState(false);

  const navigate = useNavigate();

  const handleUser = () => {
    setOpenUser(!openUser);
  };
  const handleDashboard = () => {
    navigate("/");
  };
  const handleComp = () => {
    setOpenComponent(!openComponent);
    // navigate("/componentsPages");
  };
  const handleMap = () => {
    setOpenMap(!openMap);
    // navigate("/maps");
  };
  const handleForm = () => {
    setOpenForm(!openForm);
    // navigate("/formPage");
  };
  const handleTables = () => {
    setOpenTable(!openTable);
    // navigate("/tables");
  };

  const handleCharts = () => {
    // navigate("/charts");
  };

  const handleCalendar = () => {
    // navigate("/calendar");
  };

  const handlePage = () => {
    setOpenPage(!openPage);
    // navigate("/pages");
  };

  //// User Nested list

  const userData = [
    {
      i: "MP",
      text: "My Profile",
      path: "user/MyProfile",
    },
    {
      i: "EP",
      text: "Edit Profile",
      path: "user/Edit",
    },
    {
      i: "S",
      text: "Settings",
      path: "user/setting",
    },
  ];

  /////
  ////// Components nested list
  const compData = [
    {
      i: "B",
      text: "Button",
      path: "components/button",
    },
    {
      i: "GS",
      text: "Grid System",
      path: "components/gridSystem",
    },
    {
      i: "P",
      text: "Panels",
      path: "components/panels",
    },
    {
      i: "SA",
      text: "Sweet Alert",
      path: "components/sweetAlert",
    },
    {
      i: "N",
      text: "Notification",
      path: "components/notification",
    },
    {
      i: "I",
      text: "Icons",
      path: "components/icons",
    },
    {
      i: "T",
      text: "Typography",
      path: "components/typography",
    },
  ];

  //////

  ///// Forms nested list

  const formData = [
    {
      i: "RS",
      text: "Regular Forms",
      path: "form/regular",
    },
    {
      i: "EF",
      text: "Extended Forms",
      path: "form/extended",
    },
    {
      i: "VF",
      text: "Validation Forms",
      path: "form/validation",
    },
    {
      i: "W",
      text: "Wizard ",
      path: "form/wizard",
    },
  ];
  /////

  //// tables nested list
  const tableData = [
    {
      i: "RT",
      text: "Regular Tables",
      path: "table/regular",
    },
    {
      i: "ET",
      text: "Extended Tables",
      path: "table/extended",
    },
    {
      i: "RT",
      text: "React Tables",
      path: "table/react",
    },
  ];
  ////

  ///// map nented list
  const mapsData = [
    {
      i: "GM",
      text: "Google Maps",
      path: "map/google",
    },
    {
      i: "FSM",
      text: "Full Screen Maps ",
      path: "map/fullscreen",
    },
    {
      i: "VR",
      text: "Vector Maps",
      path: "map/vector",
    },
  ];

  ////

  //// pages nested list

  const pageData = [
    {
      i: "UP",
      text: "User Pages",
      path: "page/user",
    },
    {
      i: "LP",
      text: "Login Pages",
      path: "page/login",
    },
    {
      i: "RP",
      text: "Register Pages ",
      path: "page/register",
    },
    {
      i: "LCP",
      text: "lOCK Screen Pages ",
      path: "page/lockscreen",
    },
  ];

  ////

  return (
    <List
      sx={{ width: "100%", maxWidth: "240px", bgcolor: "" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          height: "55px",
        }}
      >
        <ListItemIcon>
          <Avatar alt="logo" src="/logo192.png" />
        </ListItemIcon>
        <ListItemText primary="Creative Tim" />
      </ListItemButton>
      <Divider
        sx={{
          bgcolor: "gray",
        }}
      />
      <ListItemButton
        onClick={handleUser}
        sx={{
          height: "70px",
        }}
      >
        <ListItemIcon>
          <Avatar alt="logo" src="/assests/logo.webp" />
        </ListItemIcon>
        <ListItemText primary="Zarnain Alam" />
        {openUser ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openUser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {userData.map((elm) => {
            return (
              <ListItemButton>
                <ListItemText primary={elm.i} />
                <ListItemText primary={elm.text} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <Divider
        sx={{
          bgcolor: "gray",
        }}
      />
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <ListItemButton
          sx={{
            height: "55px",
            background: "#1f2020",

            "&:hover": {
              background: "gray",
              width: "240px",
              ml: 0.5,
              opacity: 1,
              color: "white",
              borderRadius: "10px",
            },
          }}
          onClick={handleDashboard}
        >
          <ListItemIcon>
            <GridViewTwoToneIcon
              sx={{
                color: "white",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </NavLink>

      <ListItemButton
        onClick={handleComp}
        sx={{
          height: "55px",
          background: "#1f2020",
          "&:hover": {
            background: "gray",

            width: "240px",
            ml: 0.5,

            opacity: 1,
            color: "white",
            borderRadius: "10px",
          },
        }}
      >
        <ListItemIcon>
          <ViewInArTwoToneIcon
            sx={{
              color: "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Components" />
        {openComponent ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openComponent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {compData.map((elm) => {
            return (
              <>
                <NavLink
                  to={elm.path}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <ListItemButton
                    sx={{
                      background: "#1f2020",
                      "&:hover": {
                        background: "gray",
                        width: "230px",
                        ml: 0.5,
                        opacity: 1,
                        color: "white",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    <ListItemText primary={elm.i} />
                    <ListItemText primary={elm.text} />
                  </ListItemButton>
                </NavLink>
                <Outlet />
              </>
            );
          })}
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          height: "55px",
          background: "#1f2020",
          "&:hover": {
            background: "gray",
            width: "240px",
            ml: 0.5,
            opacity: 1,
            color: "white",
            borderRadius: "10px",
          },
        }}
        onClick={handleForm}
      >
        <ListItemIcon>
          <FormatAlignJustifyTwoToneIcon
            sx={{
              color: "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Forms" />
        {openForm ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openForm} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {formData.map((elm) => {
            return (
              <NavLink
                to={elm.path}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <ListItemButton
                  sx={{
                    background: "#1f2020",
                    "&:hover": {
                      background: "gray",
                      width: "230px",
                      ml: 0.5,
                      opacity: 1,
                      color: "white",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <ListItemText primary={elm.i} />
                  <ListItemText primary={elm.text} />
                </ListItemButton>
              </NavLink>
            );
          })}
        </List>
      </Collapse>
      <ListItemButton
        sx={{
          height: "55px",
          background: "#1f2020",
          "&:hover": {
            background: "gray",
            width: "240px",
            ml: 0.5,
            opacity: 1,
            color: "white",
            borderRadius: "10px",
          },
        }}
        onClick={handleTables}
      >
        <ListItemIcon>
          <TableViewTwoToneIcon
            sx={{
              color: "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Tables" />
        {openTable ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openTable} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {tableData.map((elm) => {
            return (
              <NavLink
                to={elm.path}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <ListItemButton
                  sx={{
                    background: "#1f2020",
                    "&:hover": {
                      background: "gray",
                      width: "230px",
                      ml: 0.5,
                      opacity: 1,
                      color: "white",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <ListItemText primary={elm.i} />
                  <ListItemText primary={elm.text} />
                </ListItemButton>
              </NavLink>
            );
          })}
        </List>
      </Collapse>
      <ListItemButton
        sx={{
          height: "55px",
          background: "#1f2020",
          "&:hover": {
            background: "gray",
            width: "240px",
            ml: 0.5,
            opacity: 1,
            color: "white",
            borderRadius: "10px",
          },
        }}
        onClick={handleMap}
      >
        <ListItemIcon>
          <AddLocationAltTwoToneIcon
            sx={{
              color: "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Maps" />
        {openMap ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMap} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {mapsData.map((elm) => {
            return (
              <NavLink
                to={elm.path}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <ListItemButton
                  sx={{
                    background: "#1f2020",
                    "&:hover": {
                      background: "gray",
                      width: "230px",
                      ml: 0.5,
                      opacity: 1,
                      color: "white",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <ListItemText primary={elm.i} />
                  <ListItemText primary={elm.text} />
                </ListItemButton>
              </NavLink>
            );
          })}
        </List>
      </Collapse>

      <NavLink
        to="/charts"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <ListItemButton
          sx={{
            height: "55px",
            background: "#1f2020",
            "&:hover": {
              background: "gray",
              width: "240px",
              ml: 0.5,
              opacity: 1,
              color: "white",
              borderRadius: "10px",
            },
          }}
          onClick={handleCharts}
        >
          <ListItemIcon>
            <BarChartTwoToneIcon
              sx={{
                color: "white",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/calendar"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <ListItemButton
          sx={{
            height: "55px",
            background: "#1f2020",
            "&:hover": {
              background: "gray",
              width: "240px",
              ml: 0.5,
              opacity: 1,
              color: "white",
              borderRadius: "10px",
            },
          }}
          onClick={handleCalendar}
        >
          <ListItemIcon>
            <CalendarMonthTwoToneIcon
              sx={{
                color: "white",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemButton>
      </NavLink>

      <ListItemButton
        sx={{
          height: "55px",
          background: "#1f2020",
          "&:hover": {
            background: "gray",
            width: "240px",
            ml: 0.5,
            opacity: 1,
            color: "white",
            borderRadius: "10px",
          },
        }}
        onClick={handlePage}
      >
        <ListItemIcon>
          <ContactPageTwoToneIcon
            sx={{
              color: "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Pages" />
        {openPage ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPage} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {pageData.map((elm) => {
            return (
              <NavLink
                to={elm.path}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <ListItemButton
                  sx={{
                    background: "#1f2020",
                    "&:hover": {
                      background: "gray",
                      width: "230px",
                      ml: 0.5,
                      opacity: 1,
                      color: "white",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <ListItemText primary={elm.i} />
                  <ListItemText primary={elm.text} />
                </ListItemButton>
              </NavLink>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
