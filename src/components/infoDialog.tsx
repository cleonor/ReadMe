import * as React from "react";

import { Button, Dialog } from "@mui/material";
import { DialogBody, DialogActions, DialogContent } from "./infoDialog.styles";
import { NumberOfDays } from "./numOfDays";

interface IInfoDialog {
  isOpen: boolean;
  title: string;
  pages: number;
  dates: Date[];
  onBackClick: () => void;
}

export const InfoDialog = (props: IInfoDialog) => {
  return (
    <Dialog open={props.isOpen} fullWidth maxWidth="xs">
      <DialogBody style={{ margin: "15px" }}>
        <DialogContent style={{ height: "150px" }}>
          <h2 style={{ marginBottom: "10px" }}>Book Information</h2>
          <p>Book Title: {props.title}</p>
          <p>Number of Pages: {props.pages}</p>
          <p>Starting Date: {props.dates[0].toDateString()}</p>
          <p>End Date: {props.dates[1].toDateString()}</p>
          <NumberOfDays
            startDate={props.dates[0]}
            endDate={props.dates[1]}
            numPages={props.pages}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onBackClick} variant="outlined">
            Back
          </Button>
          <Button variant="contained">Next</Button>
        </DialogActions>
      </DialogBody>
    </Dialog>
  );
};
