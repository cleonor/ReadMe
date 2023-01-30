import { Button, Dialog } from "@mui/material";
import React from "react";
import { DialogBody, DialogActions, DialogContent } from "./infoDialog.styles";
import { NumberOfDays } from "./numOfDays"



function InfoDialog({ isOpen, title, pages, dates, onBackClick }) {

    return (
        <Dialog open={isOpen} fullHeight fullWidth maxHeight="xs" maxWidth="xs">
            <DialogBody style={{ margin: '15px' }}>
                <DialogContent
                    style={{ height: '150px' }}>
                    <h2 style={{ marginBottom: '10px' }}>Book Information</h2>
                    <p>Book Title: {title}</p>
                    <p>Number of Pages: {pages}</p>
                    <p>Starting Date: {dates[0].toDateString()}</p>
                    <p>End Date: {dates[1].toDateString()}</p>
                    <NumberOfDays startDate={dates[0]} endDate={dates[1]} numPages={pages} />

                </DialogContent>
                <DialogActions>
                    <Button onClick={onBackClick} variant="outlined" >Back</Button>
                    <Button variant="contained" >
                        Next
                    </Button>
                </DialogActions>
            </DialogBody>
        </Dialog >
    );
}

export default InfoDialog;