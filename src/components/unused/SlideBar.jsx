// import {
//   Box,
//   Grid,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   Typography,
//   Avatar,
// } from "@mui/material";
// import React from "react";
// import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
// import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
// import FormatAlignJustifyTwoToneIcon from "@mui/icons-material/FormatAlignJustifyTwoTone";
// import TableViewTwoToneIcon from "@mui/icons-material/TableViewTwoTone";
// import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
// import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
// import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
// import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
// // import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// const SlideBar = () => {
//   // const navigate = useNavigate();

//   return (
//     // <Grid container
//     // sx={{
//     //   backgroundColor:"#1f2020",
//     //   height:"100vh",
//     //   position:"fixed",
//     //   zIndex:100,
//     //   overflowX:"hidden",
//     //   width:"6%","&:hover":{
//     //     width:"18%",

//     //   }

//     // }}
//     // >
//     //   <Grid item xs={2}></Grid>
//     <Grid
//       item
//       sx={{
//         width: "0px",
//         "&hover": {
//           width: "250px",
//           zIndex: 4000,
//         },
//         // width: `calc(0px + 16%)`
//       }}
//     >
//       <List>
//         <ListItemButton divider>
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 width: "190px",

//                 // ml: .5,
//               }}
//             >
//               <Box
//                 component="img"
//                 sx={{
//                   width: 40,
//                   //   maxHeight: { xs: 233, md: 167 },
//                   //   maxWidth: { xs: 350, md: 250 },
//                 }}
//                 alt="React Logo."
//                 src="logo192.png"
//               />
//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   ml: 2,
//                   textTransform: "uppercase",
//                   color: "white",
//                 }}
//               >
//                 Creative Tim
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton divider color="white">
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 //   background: "yellow",
//                 width: "220px",
//                 // ml: 1,
//                 //   height:"50px"
//               }}
//             >
//               <Avatar alt="logo" src="/assests/logo.webp" />

//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "50px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 2,
//                 }}
//               >
//                 Zarnain alam
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 1,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/")}
//             >
//               <GridViewTwoToneIcon sx={{ color: "white" }} />
//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Dashboard
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//           <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 4,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/formPage")}
//             >
//               <FormatAlignJustifyTwoToneIcon sx={{ color: "white" }} />
//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Forms
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
          
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 4,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/formPage")}
//             >
//               <FormatAlignJustifyTwoToneIcon sx={{ color: "white" }} />
//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Forms
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 4,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/tables")}
//             >
//               <TableViewTwoToneIcon sx={{ color: "white" }} />
//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Tables
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 4,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/maps")}
//             >
//               <AddLocationAltTwoToneIcon sx={{ color: "white" }} />

//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Maps
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 4,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/charts")}
//             >
//               <BarChartTwoToneIcon sx={{ color: "white" }} />
//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Charts
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 4,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/calendar")}
//             >
//               <CalendarMonthTwoToneIcon sx={{ color: "white" }} />

//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Calender
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 ml: 1,
//                 width: "180px",
//                 background: "#1f2020",
//                 "&:hover": {
//                   background: "gray",
//                   opacity: 4,
//                   color: "white",
//                   borderRadius: "10px",
//                 },
//               }}
//               // onClick={() => navigate("/pages")}
//             >
//               <ContactPageTwoToneIcon sx={{ color: "white" }} />

//               <Typography
//                 variant="h6"
//                 component="h2"
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   lineHeight: "40px",
//                   textTransform: "uppercase",
//                   color: "white",
//                   ml: 3.5,
//                 }}
//               >
//                 Pages
//               </Typography>
//             </Box>
//           </ListItemIcon>
//         </ListItemButton>
//       </List>
//     </Grid>
//     // </Grid>
//   );
// };

// export default SlideBar;
