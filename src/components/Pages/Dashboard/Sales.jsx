import {
  Grid,
  Paper,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import WorldMap from "react-svg-worldmap";
const tableData = [
  {
    image: "/assests/usa.png",
    text: "Usa",
    sales: "2.920",
    percent: "53.23",
  },
  {
    image: "/assests/germany.png",
    text: "Germany",
    sales: "2.920",
    percent: "53.23",
  },
  {
    image: "/assests/Uk.png",
    text: "United Kingdom",
    sales: "690",
    percent: "7.87",
  },
  {
    image: "/assests/Austerila.png",
    text: "Australia",
    sales: "760",
    percent: "10.35",
  },
  {
    image: "/assests/Romania.png",
    text: "Romania",
    sales: "600",
    percent: "5.94",
  },
  {
    image: "/assests/brazil.png",
    text: "Brasil",
    sales: "550",
    percent: "4.34",
  },
];

export const Sales = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const data = [
    { country: "us", value: "Usa" }, // united states
    { country: "in", value: "india" }, // united states
    { country: "ru", value: "Russia" }, // united states

    { country: "br", value: "bar" }, // brazil
    { country: "au", value: "austerilia" }, // Austreilia
    { country: "de", value: "germany" }, // germany
    { country: "uk", value: "united kindom" }, // united Kindom
    { country: "ro", value: "Romaina" }, // Romania
  ];
  return (
    <>
      <Grid container mt={3}>
        <Grid item xs={0.3}></Grid>
        <Grid item xs={11.2} component={Paper}>
          <Box
            sx={{
              m: "15px",
            }}
          >
            <Typography variant="h6">Global Sales by Top Locations</Typography>
            <Typography variant="subtitle1" color="gray">
              All products that were shipped
            </Typography>
          </Box>
          {isMatch ? (
            <Box
              display="block"
              justifyContent="center  "
              alignItems="center"
            >
              <Box width="auto">
                <TableContainer>
                  <Table
                    // sx={{ width: "auto" }}
                    aria-label="simple table"
                  >
                    <TableBody>
                      {tableData.map((item) => {
                        return (
                          <TableRow
                            key={item.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <img src={item.image} alt="" />
                            </TableCell>
                            <TableCell align="left">{item.text}</TableCell>
                            <TableCell align="right">{item.sales}</TableCell>
                            <TableCell align="right">{item.percent}%</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box 
              sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
              >
                <WorldMap
                  color="gray"
                  tooltipBgColor="blue"
                  size="md"
                  data={data}
                />
              </Box>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box width="auto">
                <TableContainer>
                  <Table
                    // sx={{ width: "auto" }}
                    aria-label="simple table"
                  >
                    <TableBody>
                      {tableData.map((item) => {
                        return (
                          <TableRow
                            key={item.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <img src={item.image} alt="" />
                            </TableCell>
                            <TableCell align="left">{item.text}</TableCell>
                            <TableCell align="right">{item.sales}</TableCell>
                            <TableCell align="right">{item.percent}%</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box>
                <WorldMap
                  color="gray"
                  tooltipBgColor="blue"
                  size="md"
                  data={data}
                />
              </Box>
            </Box>
          )}
        </Grid>
        <Grid item xs={0.5}></Grid>
      </Grid>
    </>
  );
};
