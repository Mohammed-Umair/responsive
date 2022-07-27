import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

export default function AlertDialog({
  open,
  setOpen,
  allData,
  setAllData,
  input,
  setInput,

  editTask
}) {


  let id = localStorage.getItem("taskid");

  const handleUpdate = () => {
    setOpen(false);
    setAllData(
      allData.map((item)=>{
        if (item.id===editTask){
          return{
            ...item,task:input
          }
        }
        return item
      })
    )
  };

  return (
    <div>
      <Dialog open={open} onClose={handleUpdate}>
        <DialogTitle id="alert-dialog-title" maxWidth="lg">
          {"Edit Task"}
        </DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={4}
            fullWidth
            placeholder="task..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdate}>Update Task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
