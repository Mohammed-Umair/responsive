import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Collapse,
  Divider,
  ImageList,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemIcon,
  ListItemButton,
  Box,
} from "@mui/material";
import React from "react";

export const SubMenuItems = ({ data }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const { subMenu } = data;
  // const handleClick = (e) => {
  //   setCollapsed();
  // };

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }

  function handleClick(e) {
    if (Array.isArray(subMenu)) {
      toggleCollapse();
    }
  }

  let expandIcon;

  if (Array.isArray(subMenu) && subMenu.length) {
    expandIcon = !collapsed ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <List
      sx={{ width: "100%", maxWidth: "240px", bgcolor: "" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {data.map(
        ({ icon, name, path, img, onClick, subMenu: subItems, ...rest }) => (
          
          <React.Fragment key={name}>
            <ListItemButton
              {...rest}
              onClick={subItems ? (e) => handleClick({ onClick }) : null}
              sx={{
                height: "56px",
                fontSize: "25px",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
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
                  <ListItemIcon
                    sx={{
                      color: "white",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </>
              )}

              {/* {subItems && !collapsed ? (
                <ExpandMore />
              ) : subItems ? (
                <ExpandLess />
              ) : null} */}
              {expandIcon}
            </ListItemButton>

            {Array.isArray(subItems) ? (
              <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {subItems.map((subItem) => {
                    return (
                      <ListItem key={subItem.name} button>
                        <ListItemText className="sidebar-item-text">
                          {subItem.i}
                        </ListItemText>
                        <ListItemText className="sidebar-item-text">
                          {subItem.name}
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            ) : null}
          </React.Fragment>
        )
      )}
    </List>
  );
};
