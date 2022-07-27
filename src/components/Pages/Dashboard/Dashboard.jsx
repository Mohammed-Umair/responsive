import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { Footer } from "../../NavBar/Footer";
import { BarChartAndTask } from "./BarChartAndTask";
import { ChartsComPage } from "./ChartsComPage";

import DashboardCard from "./DashboardCard";
import AlertDialog from "./Modal";
import NavBar from "../../unused/NavBar";
import { Sales } from "./Sales";

const taskData = [
  {
    id: 1,
    task: "Sign contract for What are conference organizers afraid of?",
  },
  {
    id: 2,
    task: " Lines From Great Russian Literature? Or E-mails From My Boss?",
  },
  {
    id: 3,
    task: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  },
  { id: 4, task: " Create 4 Invisible User Experiences you Never Knew Abou" },
  { id: 5, task: " Read Following makes Medium better" },
  { id: 6, task: "Unfollow 5 enemies from twitter" },
];

const Dashboard = () => {
  const [allData, setAllData] = useState(taskData);

  const [input, setInput] = useState("");
  console.log("input",input);
  const [open, setOpen] = useState(false);
const [editTask, setEditTask] = useState(null)


  return (
    <Grid conatiner direction="row" sx={{ background: "#f8f9fa" }}>
      {/* <Grid item xs={12}>
        <NavBar />
      </Grid> */}
      <Grid item xs={12}>
        <DashboardCard />
      </Grid>
      <Grid item xs={12}>
        <Sales />
      </Grid>
      <Grid item xs={12}>
        <ChartsComPage />
      </Grid>
      <Grid item xs={12}>
        <BarChartAndTask
          open={open}
          setOpen={setOpen}
          allData={allData}
          setAllData={setAllData}
          input={input}
          setInput={setInput}
          editTask={editTask}
          setEditTask={setEditTask}
        />
        <AlertDialog
          open={open}
          setOpen={setOpen}
          allData={allData}
          setAllData={setAllData}
          input={input}
          setInput={setInput}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      </Grid>
      {/* <Grid item xs={12}>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;
