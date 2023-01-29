import { Dialog } from "@mui/material";
import React from "react";
import { StyledDialog } from "./infoDialog.styles";



function InfoDialog({ isOpen, title, pages, dates }) {
    return (
        <Dialog open={isOpen}>
            <button
                className="backButton"
                onClick={() => { }}
            >
                Back
            </button>
            <button className="continueButton">Continue</button>
            <h3>Title of the Book: {title}</h3>
            <p>Number of Pages: {pages}</p>
            <p>Starting Date: {dates[0].toDateString()}</p>
            <p>End Date: {dates[1].toDateString()}</p>
        </Dialog>
    );
}

export default InfoDialog