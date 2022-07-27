import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import HistoryIcon from "@mui/icons-material/History";
import ReactApexChart from "react-apexcharts";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

//////

// const taskData = [
//   {
//     id: 1,
//     task: "Sign contract for What are conference organizers afraid of?",
//   },
//   {
//     id: 2,
//     task: " Lines From Great Russian Literature? Or E-mails From My Boss?",
//   },
//   {
//     id: 3,
//     task: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
//   },
//   { id: 4, task: " Create 4 Invisible User Experiences you Never Knew Abou" },
//   { id: 5, task: " Read Following makes Medium better" },
//   { id: 6, task: "Unfollow 5 enemies from twitter" },
// ];

////
export const BarChartAndTask = ({
  setOpen,
  allData,
  setAllData,
  setInput,
  setEditTask,
}) => {
  // const [allData, setAllData] = useState(taskData);
  // console.log("Alldata", allData);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const data = {
    series: [
      {
        name: "Tesla Model S",
        data: [500, 455, 300, 780, 560, 480, 320, 420, 550],
        // data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "BMW 5 Series",
        data: [350, 250, 310, 590, 440, 390, 300, 380, 395],
        // data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      yaxis: {
        title: {
          //   text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(allData));
  }, [allData]);

  // const localData = JSON.parse(localStorage.getItem("task"));

  // console.log("localData", localData);

  const handleDelete = (index) => {
    console.log("id.....", index);
    const updatedTask = allData.filter((item) => {
      return index !== item.id;
    });
    setAllData(updatedTask);
  };

  const handleEdit = (id) => {
    localStorage.setItem("taskid", id);
    let newEditTask = allData.find((elem) => {
      return elem.id === id;
    });
    console.log("newEditTask", newEditTask);
    setOpen(true);
    // setAllData(newEditTask)
    setInput(newEditTask.task);
    setEditTask(id);
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <>
      <>
        {isMatch ? (
          <>
            <Grid container mt={3}>
              <Grid item xs={0.3}></Grid>
              <Grid item xs={11.2} component={Paper} height="">
                <Box
                  sx={{
                    m: "15px",
                  }}
                >
                  <Typography variant="h6">2017 Sales</Typography>
                  <Typography variant="subtitle1" color="gray">
                    All products including Taxes
                  </Typography>
                </Box>
                <ReactApexChart
                  options={data.options}
                  series={data.series}
                  type="bar"
                  height={350}
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
                  <DoneIcon
                    sx={{
                      color: "gray",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "gray",
                    }}
                  >
                    Data information certified
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
                  }}
                >
                  <Typography variant="h6">Tasks</Typography>
                  <Typography variant="subtitle1" color="gray">
                    Backend development
                  </Typography>
                </Box>
                <Divider />
                {/*  */}
                <Box width="auto">
                  <TableContainer>
                    <Table
                      // sx={{ width: "auto" }}
                      aria-label="simple table"
                    >
                      <TableBody>
                        {allData.map((item, index) => {
                          return (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                <Checkbox
                                  size="small"
                                  sx={{
                                    color: "#23ccef",
                                  }}
                                  {...label}
                                  defaultChecked
                                />
                              </TableCell>
                              <TableCell align="left">{item.task}</TableCell>
                              <TableCell align="right">
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                  }}
                                >
                                  <BootstrapTooltip
                                    placement="top"
                                    title="Edit Task..."
                                  >
                                    <ModeEditOutlineRoundedIcon
                                      onClick={() => handleEdit(item.id)}
                                      sx={{
                                        color: "#23ccef",
                                        fontSize: "20px",
                                      }}
                                    />
                                  </BootstrapTooltip>
                                  <BootstrapTooltip
                                    placement="top"
                                    title="Edit Task..."
                                  >
                                    <ClearIcon
                                      onClick={() => handleDelete(item.id)}
                                      sx={{ color: "red", fontSize: "20px" }}
                                    />
                                  </BootstrapTooltip>
                                </Box>{" "}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                {/*  */}
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
          </>
        ) : (
          <Grid container mt={3}>
            <Grid item xs={0.3}></Grid>
            <Grid item xs={5.35} component={Paper} height="">
              <Box
                sx={{
                  m: "15px",
                }}
              >
                <Typography variant="h6">2017 Sales</Typography>
                <Typography variant="subtitle1" color="gray">
                  All products including Taxes
                </Typography>
              </Box>
              <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
                height={350}
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
                <DoneIcon
                  sx={{
                    color: "gray",
                  }}
                />
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  Data information certified
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={0.5}></Grid>

            <Grid item xs={5.35} component={Paper}>
              <Box
                sx={{
                  m: "15px",
                }}
              >
                <Typography variant="h6">Tasks</Typography>
                <Typography variant="subtitle1" color="gray">
                  Backend development
                </Typography>
              </Box>
              <Divider />
              {/*  */}
              <Box width="auto">
                <TableContainer>
                  <Table
                    // sx={{ width: "auto" }}
                    aria-label="simple table"
                  >
                    <TableBody>
                      {allData.map((item, index) => {
                        return (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <Checkbox
                                size="small"
                                sx={{
                                  color: "#23ccef",
                                }}
                                {...label}
                                defaultChecked
                              />
                            </TableCell>
                            <TableCell align="left">{item.task}</TableCell>
                            <TableCell align="right">
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                  alignItems: "center",
                                }}
                              >
                                <BootstrapTooltip
                                  placement="top"
                                  title="Edit Task..."
                                  
                                >
                                  <ModeEditOutlineRoundedIcon
                                    onClick={() => handleEdit(item.id)}
                                    sx={{ color: "#23ccef", fontSize: "20px" }}
                                  />
                                </BootstrapTooltip>
                                <BootstrapTooltip
                                  placement="top"
                                  title="Remove... "
                                >
                                  <ClearIcon
                                    onClick={() => handleDelete(item.id)}
                                    sx={{ color: "red", fontSize: "20px" }}
                                  />
                                </BootstrapTooltip>
                              </Box>{" "}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {/*  */}
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
    </>
  );
};
