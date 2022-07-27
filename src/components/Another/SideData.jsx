import React from "react";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
import FormatAlignJustifyTwoToneIcon from "@mui/icons-material/FormatAlignJustifyTwoTone";
import TableViewTwoToneIcon from "@mui/icons-material/TableViewTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";

import { SideMenuBar } from "./SideMenuBar";



// function onClick(e, item) {
//   window.alert(JSON.stringify(item, null, 2));
// }
// console.log("onClick",onClick);

 export const items = [
  { name: "Creative Tim", img: "/logo192.png" },

  {
    name: "Zarnain Alam",
    img: "/assests/logo.webp",
    items: [
      { i: "MP", name: "My Profile" },
      { i: "EP", name: "Edit Profile" },
      { i: "S", name: "Settings" },
    ],
  },

  { name: "Dashboard", Icon: GridViewTwoToneIcon,path:"/" },
  {
    name: "Components",
    Icon: ViewInArTwoToneIcon,
    // path:"/componentsPages",
    items: [
      { name: "Buttons", i: "B",path:"/button" },
      { name: "Grid System", i: "GS",path:"/gridSystem" },
      { name: "Panels", i: "P",path:"/panels" },
      { name: "Sweet Alert", i: "SA",path:"/sweetAlert" },
      { name: "Notification", i: "N",path:"/notification" },
      { name: "Icons", i: "I",path:"/icons" },
      { name: "Typography", i: "T",path:"/typography" },
    ],
  },
  {
    name: "Forms",
    Icon: FormatAlignJustifyTwoToneIcon,
    // path:"/forms",
    items: [
      { name: "Regular Forms", i: "RF",path:"/regularForms" },
      { name: "Extended Froms", i: "EF",path:"/extendedForms" },
      { name: "Validation Froms", i: "VF",path:"/validationForms" },
      { name: "Wizard", i: "W",path:"/wizardForm" },
    ],
  },
  {
    name: "Tables",
    Icon: TableViewTwoToneIcon,
    items: [
      { name: "Regular Tables", i: "RT" ,path:"/regularTable" },
      { name: "Extended Tables", i: "ET",path:"/extendedTable" },
      { name: "React Tables", i: "RT",path:"/reactTable" },
    ],
  },
  {
    name: "Maps",
    Icon: AddLocationAltTwoToneIcon,
    items: [
      { name: "Google Maps", i: "GM" ,path:"/googleMap"},
      { name: "Full Screen Maps", i: "FSM",path:"/fullScreenMap" },
      { name: "Vector Maps", i: "VM",path:"/vectorMap" },
    ],
  },
  { name: "Charts", Icon: BarChartTwoToneIcon,path:"/charts" },
  { name: "Calendar", Icon: CalendarMonthTwoToneIcon,path:"/calendar" },

  {
    name: "Pages",
    Icon: ContactPageTwoToneIcon,
    items: [
      { name: "User Pages", i: "UP",path:"/userPage" },
      { name: "Login Pages", i: "LP" ,path:"/loginPage"},
      { name: "Register Page", i: "RP",path:"/registerPage" },
      { name: "Lock Screen Page", i: "LSP",path:"/lockScreenPage" },
    ],
  },
];

export function SideData() {
  return (
    <div>
     <SideMenuBar items={items}/>
    </div>
  );
}

export default SideData;
