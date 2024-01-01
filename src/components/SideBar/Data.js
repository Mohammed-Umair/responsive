import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
import FormatAlignJustifyTwoToneIcon from "@mui/icons-material/FormatAlignJustifyTwoTone";
import TableViewTwoToneIcon from "@mui/icons-material/TableViewTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import { Divider } from "@mui/material";

// function onClick(e, item) {
//   window.alert(JSON.stringify(item, null, 2));
// }

export const data = [
  {
    name: "Creative Tim",
    img: "/logo192.png",
  },
  {
    name: "Mohammed Umair",
    img: "/assests/logo.webp",
    onClick:"onClickProp",
    
    subMenu: [
      {
        i: "MP",
        name: "My Profile",
      },
      {
        i: "EP",
        name: "Edit Profile",
      },
      {
        i: "S",
        name: "Settings",
      },
    ],
    divider: <Divider />,
  },
  {
    name: "dashboard",
    icon: <GridViewTwoToneIcon />,
    path: "/",
  },
  {
    name: "components",
    icon: <ViewInArTwoToneIcon />,
    path: "/componentsPages",
    onClick:"onClickProp",
    subMenu: [
      {
        name: "buttons",
        i: "B",
        path: "components/button",
        
      },
      {
        i: "GS",
        name: "Grid System",
        path: "components/gridSystem",
        
      },
      {
        i: "P",
        name: "Panels",
        path: "components/panels",
        
      },
      {
        i: "SA",
        name: "Sweet Alert",
        path: "components/sweetAlert",
        
      },
      {
        i: "N",
        name: "Notification",
        path: "components/notification",
        
      },
      {
        i: "I",
        name: "Icons",
        path: "components/icons",
        
      },
      {
        i: "T",
        name: "Typography",
        path: "components/typography",
        
      },
    ],
  },
  {
    name: "Forms",
    icon: <FormatAlignJustifyTwoToneIcon />,
    path: "/formPage",
    onClick:"onClickProp",
    subMenu: [
      {
        i: "RS",
        name: "Regular Forms",
        path: "form/regular",
        
      },
      {
        i: "EF",
        name: "Extended Forms",
        path: "form/extended",
        
      },
      {
        i: "VF",
        name: "Validation Forms",
        path: "form/validation",
        
      },
      {
        i: "W",
        name: "Wizard ",
        path: "form/wizard",
        
      },
    ],
  },
  {
    name: "Tables",
    icon: <TableViewTwoToneIcon />,
    path: "/tables",
    onClick:"onClickProp",
    subMenu: [
      {
        i: "RT",
        name: "Regular Tables",
        path: "table/regular",
        
      },
      {
        i: "ET",
        name: "Extended Tables",
        path: "table/extended",
        
      },
      {
        i: "RT",
        name: "React Tables",
        path: "table/react",
        
      },
    ],
  },

  {
    name: "Maps",
    icon: <AddLocationAltTwoToneIcon />,
    path: "/maps",
    onClick:"onClickProp",
    subMenu: [
      {
        i: "GM",
        name: "Google Maps",
        path: "map/google",
        
      },
      {
        i: "FSM",
        name: "Full Screen Maps ",
        path: "map/fullscreen",
        
      },
      {
        i: "VR",
        name: "Vector Maps",
        path: "map/vector",
        
      },
    ],
  },

  {
    name: "Charts",
    icon: <BarChartTwoToneIcon />,
    path: "/charts",
    
  },
  {
    name: "Calendar",
    icon: <CalendarMonthTwoToneIcon />,
    path: "/calendar",
    
  },

  {
    name: "Pages",
    icon: <ContactPageTwoToneIcon />,
    path: "/pages",
    onClick:"onClickProp",
    subMenu: [
      {
        i: "UP",
        name: "User Pages",
        path: "page/user",
        
      },
      {
        i: "LP",
        name: "Login Pages",
        path: "page/login",
        
      },
      {
        i: "RP",
        name: "Register Pages ",
        path: "page/register",
        
      },
      {
        i: "LCP",
        name: "lOCK Screen Pages ",
        path: "page/lockscreen",
        
      },
    ],
  },
];

