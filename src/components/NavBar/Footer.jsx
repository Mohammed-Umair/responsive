import {
  Grid,
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

export const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <Grid container component={Paper} mt={5}>
          {/* <Grid item xs={0.3}></Grid> */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "block",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Home
                </Typography>
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Company
                </Typography>
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Portfilio
                </Typography>
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Blog
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "gray",
                  }}
                >
                  © <span style={{ color: "#23ccef" }}>Creative tim </span>{" "}
                  ,made with love for a better web
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* <Grid item xs={0.5}></Grid> */}
        </Grid>
      ) : (
        <Grid container component={Paper} >
          {/* <Grid item xs={0.3}></Grid> */}
          {/* <Grid item xs={12}> */}
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
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Home
                </Typography>
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Company
                </Typography>
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Portfilio
                </Typography>
                <Typography variant="subtitle2" sx={{ p: 3, color: "gray" }}>
                  Blog
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "gray",
                  }}
                >
                  © <span style={{ color: "#23ccef" }}>Creative Tim </span>{" "}
                  ,made with love for a better web
                </Typography>
              </Box>
            </Box>
          {/* </Grid> */}
          {/* <Grid item xs={0.5}></Grid> */}
        </Grid>
      )}
    </>
  );
};
