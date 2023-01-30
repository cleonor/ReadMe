import React, { useState } from "react";

import Calendar from 'react-calendar';
import axios from "axios";
import TextField from '@mui/material/TextField';
import InfoDialog from "./infoDialog";
import { BookInformation, SearchForm, SearchFormContainer, StyledButton } from "./mainPage.styles";



const pushToBE = (title, numPages) => {
    axios.post('http://localhost:3001/newbook', {
        title: title,
        numberofPages: numPages
    });
}

const MainPage = () => {

    const [title, setTitle] = useState();
    const [titleValidation, setTitleValidation] = useState();

    const [numPages, setNumPages] = useState();
    const [numPagesValidation, setNumPagesValidation] = useState();

    const [date, setDate] = useState([new Date()]);
    const [openDialog, setOpenDialog] = useState(false);

    const validateInputFields = () => {
        setTitleValidation();
        setNumPagesValidation();

        if (!title) setTitleValidation("Required field");
        if (!numPages) setNumPagesValidation("Required field");
        if (numPages < 1) setNumPagesValidation("Min value is 1");
    }

    return (
        <>
            <SearchFormContainer>
                <SearchForm>
                    <BookInformation>
                        <label>
                            Book Title:
                        </label>
                        <TextField
                            id="standard-required"
                            variant="standard" type="text"
                            value={title}
                            onInput={e => setTitle(e.target.value)}
                            size="small"
                            helperText={titleValidation}
                        />
                        <label>
                            Number of pages:
                        </label>
                        <TextField
                            id="standard-number"
                            variant="standard"
                            type="number"
                            value={numPages}
                            onInput={e => setNumPages(e.target.value)}
                            size="small"
                            helperText={numPagesValidation}
                        />
                    </BookInformation>

                    <div className="calendar">
                        <Calendar
                            type="text"
                            onChange={setDate}
                            selectRange={true}
                            minDate={new Date()}
                        />
                    </div>

                    <StyledButton variant="contained"
                        type="submit"
                        color="inherit"
                        onClick={(e) => {
                            e.preventDefault()
                            validateInputFields();
                            setOpenDialog(true);
                            pushToBE(title, numPages);
                        }}
                    >Submit</StyledButton>

                </SearchForm>
            </SearchFormContainer>
            {
                date.length > 1 && (<InfoDialog
                    isOpen={openDialog}
                    title={title}
                    pages={numPages}
                    dates={date}
                    onBackClick={() => setOpenDialog(false)}
                />
                )
            }
        </>
    );
};
export default MainPage;