import { Card, CardContent, Grid, Typography, Divider,Paper } from "@mui/material";
import React, { useState } from "react";
import MemoryIcon from "@mui/icons-material/Memory";
import RefreshIcon from "@mui/icons-material/Refresh";
import HighlightIcon from "@mui/icons-material/Highlight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const DashboardCard = () => {
  return (
    <>
      <Grid container mt={3}>
        <Grid item xs={0.3}></Grid>
        <Grid item xs={11.2} >
          <Grid
            container
            spacing={{
              xs: 2,
              sm: 2,
              md: 2,
              lg: 2,
            }}
            columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
          >
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Card
                sx={{
                  minWidth: 200,
                  height: 150,
                  borderRadius: "4px",
                  mt: 2.5,
                }}
              >
                <CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mt: -2.5,
                      }}
                    >
                      <MemoryIcon
                        sx={{ color: "orangered", fontSize: "4em" }}
                      />
                    </Typography>

                    <Typography sx={{ mb: 1.5 }}>
                      {" "}
                      <span
                        style={{
                          position: "relative",
                          top: "-20px",
                          left: "50px",
                          fontSize: "12px",
                        }}
                      >
                        Number
                      </span>
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                        }}
                      >
                        150GB
                      </span>{" "}
                    </Typography>
                  </CardContent>

                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      <RefreshIcon />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ml: 1,
                        mt: -1,

                        textTransform: "capitalize",
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "gray",
                      }}
                    >
                      update Now
                    </Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Card
                sx={{
                  minWidth: 200,
                  height: 150,
                  borderRadius: "4px",
                  mt: 2.5,
                }}
              >
                <CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mt: -2.5,
                      }}
                    >
                      <HighlightIcon sx={{ color: "green", fontSize: "4em" }} />
                    </Typography>

                    <Typography sx={{ mb: 1.5 }}>
                      {" "}
                      <span
                        style={{
                          position: "relative",
                          top: "-20px",
                          left: "50px",
                          fontSize: "12px",
                        }}
                      >
                        Revenue
                      </span>
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                        }}
                      >
                        $1345
                      </span>{" "}
                    </Typography>
                  </CardContent>

                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      <CalendarMonthIcon />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ml: 1,
                        mt: -1,

                        textTransform: "capitalize",
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "gray",
                      }}
                    >
                      Last Day
                    </Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Card
                sx={{
                  minWidth: 200,
                  height: 150,
                  borderRadius: "4px",
                  mt: 2.5,
                }}
              >
                <CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mt: -2.5,
                      }}
                    >
                      <ErrorOutlineIcon
                        sx={{ color: "red", fontSize: "4em" }}
                      />
                    </Typography>

                    <Typography sx={{ mb: 1.5 }}>
                      {" "}
                      <span
                        style={{
                          position: "relative",
                          top: "-20px",
                          left: "30px",
                          fontSize: "12px",
                        }}
                      >
                        Errors
                      </span>
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                        }}
                      >
                        23
                      </span>{" "}
                    </Typography>
                  </CardContent>

                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      <AccessTimeIcon />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ml: 1,
                        mt: -1,

                        textTransform: "capitalize",
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "gray",
                      }}
                    >
                      in the last Hour
                    </Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Card
                sx={{
                  minWidth: 200,
                  height: 150,
                  borderRadius: "4px",
                  mt: 2.5,
                }}
              >
                <CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mt: -2.5,
                      }}
                    >
                      <FavoriteBorderIcon
                        sx={{ color: "blue", fontSize: "4em" }}
                      />
                    </Typography>

                    <Typography sx={{ mb: 1.5 }}>
                      {" "}
                      <span
                        style={{
                          position: "relative",
                          top: "-20px",
                          left: "50px",
                          fontSize: "12px",
                        }}
                      >
                        Followers
                      </span>
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                        }}
                      >
                        +45k
                      </span>{" "}
                    </Typography>
                  </CardContent>

                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      <RefreshIcon />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ml: 1,
                        mt: -1,

                        textTransform: "capitalize",
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "gray",
                      }}
                    >
                      Update Now
                    </Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0.5}></Grid>
      </Grid>
    </>
  );
};

export default DashboardCard;
