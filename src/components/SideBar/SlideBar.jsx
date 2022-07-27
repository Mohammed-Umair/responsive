import React from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {
  ListItemButton,
  ListItemIcon,
  ListItemname,
  List,
  Collapse,
  ListItemText,
} from "@mui/material";
import { useEffect } from "react";
import { data } from "./Data";

export const SlideBar = () => {
  const [openComponent, setOpenComponent] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(null);
  console.log("subMenu=========>", subMenu);

  const handleComp = () => {
    setOpenComponent(!openComponent);
    // navigate("/componentsPages");
  };
  console.log("Data", data);

  // const filtered = data.filter((item) => item.subMenu);
  // console.log("filtered", filtered);

  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: "240px", bgcolor: "" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {data.map((item) => {
          return (
            <>
              <ListItemButton onClick={handleComp}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
                {!openComponent ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>
              {item.subMenu.map((item) => {
                return (
                  <Collapse in={openComponent} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <>
                          <ListItemText primary={item.i} />
                          <ListItemText primary={item.name} />
                        </>
                      </ListItemButton>
                    </List>
                  </Collapse>
                );
              })}
            </>
          );
        })}
      </List>
    </div>
  );
};
