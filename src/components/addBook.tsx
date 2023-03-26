import * as React from "react";
import { useState } from "react";

import axios from "axios";
import TextField from "@mui/material/TextField";
import { InfoDialog } from "./infoDialog";
import {
  BookInformation,
  SearchForm,
  SearchFormContainer,
  StyledButton,
} from "./addBook.styles";
import { Calendar } from "react-calendar";

interface IAddBookPage {}

export const AddBook = (props: IAddBookPage) => {
  const [title, setTitle] = useState<string>("");
  const [titleValidation, setTitleValidation] = useState<string>();

  const [numPages, setNumPages] = useState<number>();
  const [numPagesValidation, setNumPagesValidation] = useState<string>();

  const [date, setDate] = useState<Date[]>([new Date()]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const pushToBE = (title: string, numPages: number) => {
    axios.post("http://localhost:3001/newbook", {
      title: title,
      numberofPages: numPages,
    });
  };

  const validateInputFields = () => {
    setTitleValidation("");
    setNumPagesValidation("");

    if (!title) setTitleValidation("Required field");
    if (!numPages) setNumPagesValidation("Required field");
    if (numPages && numPages < 1) setNumPagesValidation("Min value is 1");
  };

  const onSubmitClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    validateInputFields();
    if (title && numPages) {
      setOpenDialog(true);
      pushToBE(title, numPages);
    }
  };

  return (
    <>
      <SearchFormContainer>
        <SearchForm>
          <BookInformation>
            <label>Book Title:</label>
            <TextField
              id="standard-required"
              variant="standard"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              size="small"
              helperText={titleValidation}
              autoComplete="off"
            />
            <label>Number of pages:</label>
            <TextField
              id="standard-number"
              variant="standard"
              type="number"
              value={numPages}
              onChange={(e) => {
                setNumPages(Number(e.target.value));
              }}
              size="small"
              helperText={numPagesValidation}
            />
          </BookInformation>

          <div className="calendar">
            <Calendar
              onChange={setDate}
              selectRange={true}
              minDate={new Date()}
            />
          </div>

          <StyledButton
            variant="contained"
            type="submit"
            color="inherit"
            onClick={onSubmitClickHandle}>
            Submit
          </StyledButton>
        </SearchForm>
      </SearchFormContainer>
      {title && numPages && date.length > 2 && (
        <InfoDialog
          isOpen={openDialog}
          title={title}
          pages={numPages}
          dates={date}
          onBackClick={() => setOpenDialog(false)}
        />
      )}
    </>
  );
};
