import {
  Grid,
  Paper,
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HistoryIcon from "@mui/icons-material/History";

export const ChartsComPage = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const data = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        categories: [
          "9:00AM",
          "12:00AM",
          "3:00PM",
          "6:00PM",
          "12:00PM",
          "3:00AM",
          "6:00AM",
        ],
      },
    },
    series: [
      {
        name: "open",
        data: [100, 200, 300, 400, 500, 600, 700],
      },
      {
        name: "click",
        // data: [100, 200, 300, 400, 500, 600, 700],
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: "Click Second Time",
        // data: [100, 200, 300, 400, 500, 600, 700],
        data: [50, 70, 15, 10, 59, 30, 70, 21, 25],
      },
    ],
  };
  ///

  const pdata = {
    series: [40, 20, 40],
    options: {
      chart: {
        width: 360,
        type: "pie",
      },
      labels: ["open", "Bounce", "unsubscribe"],
      responsive: [
        {
          breakpoint: 360,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "top",
            },
          },
        },
      ],
    },
  };
  ///

  return (
    <>
      {isMatch ? (
        <>
          <Grid container mt={3} sx={{}}>
            <Grid item xs={0.3}></Grid>
            <Grid item xs={11.2} component={Paper}>
              <Box
                sx={{
                  m: "15px",
                }}
              >
                <Typography variant="h6">Email Statistics</Typography>
                <Typography variant="subtitle1" color="gray">
                  Last Campaign Performance
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Chart
                  options={pdata.options}
                  series={pdata.series}
                  type="pie"
                  width={400}
                />
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon
                  sx={{
                    color: "gray",
                  }}
                />
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  Campaign sent 2 days ago
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={0.5}></Grid>
          </Grid>
          <Grid container mt={3}>
            <Grid item xs={0.3}></Grid>

            <Grid item xs={11.2} component={Paper}>
              <Box
                sx={{
                  m: "15px",
                  width: "auto",
                }}
              >
                <Typography variant="h6">Users Behavior</Typography>
                <Typography variant="subtitle1" color="gray">
                  24 Hours performance
                </Typography>
              </Box>
              <Chart
                options={data.options}
                series={data.series}
                type="line"
                width={500}
                height={300}
              />
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <HistoryIcon
                  sx={{
                    color: "gray",
                  }}
                />
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  Updated 3 minutes ago
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={0.5}></Grid>
          </Grid>
        </>
      ) : (
        <Grid container mt={3}>
          <Grid item xs={0.3}></Grid>
          <Grid item xs={4} component={Paper} height="">
            <Box
              sx={{
                m: "15px",
              }}
            >
              <Typography variant="h6">Email Statistics</Typography>
              <Typography variant="subtitle1" color="gray">
                Last Campaign Performance
              </Typography>
            </Box>

            <Chart
              options={pdata.options}
              series={pdata.series}
              type="pie"
              width={400}
            />
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                m: "15px",
              }}
            >
              <AccessTimeIcon
                sx={{
                  color: "gray",
                }}
              />
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                Campaign sent 2 days ago
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={6.7} component={Paper}>
            <Box
              sx={{
                m: "15px",
                width: "auto",
              }}
            >
              <Typography variant="h6">Users Behavior</Typography>
              <Typography variant="subtitle1" color="gray">
                24 Hours performance
              </Typography>
            </Box>
            <Chart
              options={data.options}
              series={data.series}
              type="line"
              width={550}
              height={300}
            />
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                m: "15px",
              }}
            >
              <HistoryIcon
                sx={{
                  color: "gray",
                }}
              />
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                Updated 3 minutes ago
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={0.5}></Grid>
        </Grid>
      )}
    </>
  );
};
