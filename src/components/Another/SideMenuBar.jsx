import React from "react";

import {
  Avatar,
  Collapse,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function SidebarItem({ item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { name, items, Icon, i, img, path } = item;

  const navigate = useNavigate();
  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    navigate(path)
    // if (onClickProp) {
    //   onClickProp(e, item);
    // }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: "240px", bgcolor: "" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          className="sidebar-item"
          onClick={onClick}
          {...rest}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            height: "42px",
          }}
        >
          {/* <div
          style={{ paddingLeft:  *  }}
          className="sidebar-item-content             "
        > */}

          {img ? (
            <>
              <ListItemAvatar>
                <Avatar alt="logo" src={img} />
              </ListItemAvatar>
              <ListItemText>{name}</ListItemText>
              <Divider
                sx={{
                  bgcolor: "white",
                }}
              />
            </>
          ) : (
            <>
              {Icon ? (
                <ListItemIcon
                  sx={{
                    color: "white",
                  }}
                >
                  {Icon && <Icon />}
                </ListItemIcon>
              ) : null}
              {i ? <ListItemText>{i}</ListItemText> : null}
              <ListItemText>{name}</ListItemText>
            </>
          )}
          {expandIcon}
        </ListItemButton>

        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {Array.isArray(items) ? (
            <List disablePadding>
              {items.map((subItem, index) => (
                <>
                  <React.Fragment key={`${subItem.name}${index}`}>
                    <SidebarItem item={subItem} />
                  </React.Fragment>
                </>
              ))}
            </List>
          ) : null}
        </Collapse>
      </List>
    </>
  );
}

export function SideMenuBar({ items }) {
  return (
    <List disablePadding>
      {items.map((sidebarItem, index) => (
        <React.Fragment key={`${sidebarItem.name}${index}`}>
          <SidebarItem item={sidebarItem} />
        </React.Fragment>
      ))}
    </List>
  );
}

// export default Sideeee;
