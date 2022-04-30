import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import { useForm } from "react-hook-form";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'
import NumberOfDays from "./components/numOfDays";
import PopUp from "./components/popUp";
import "./index.css";
import Navbar from "./components/navBar";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const pushToBE = (title, numPages) => {
    axios.post('http://localhost:3001/newbook', {
        title: title,
        numberofPages: numPages
    });
}

const App = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [numPages, setNumPages] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState([new Date()]);
    const [istrigged, setTrigged] = useState(false);

    return (
        <div>
            <Navbar></Navbar>
            <div className="searchFormContainer">
                <form
                    className="searchForm"
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                    <div className="bookInformation">
                        <label>
                            Title of the book:
                        </label>
                        <TextField
                            required
                            id="standard-required"
                            variant="standard" type="text"
                            {...register("bookName", { required: "This is required." })}
                            value={title}
                            onInput={e => setTitle(e.target.value)}
                        />
                        <p>{errors.bookName?.message}</p>
                        <label>
                            Number of pages:
                        </label>
                        <TextField
                            id="standard-number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            {...register("numberPages", {
                                required: "This is required.",
                                min: {
                                    value: 1,
                                    message: "Min value is 1"
                                }
                            })}
                            value={numPages}
                            onInput={e => setNumPages(e.target.value)}
                        />
                        <p>{errors.numberPages?.message}</p>

                    </div>
                    <div>
                        <Calendar
                            type="text"
                            onChange={setDate}
                            selectRange={true}
                            minDate={new Date()}
                        />
                    </div>

                    {date.length > 1 ? (
                        <div>
                            <span>Start:</span>{' '}
                            {date[0].toDateString()}
                            &nbsp;|&nbsp;
                            <span>End:</span> {date[1].toDateString()}

                            <NumberOfDays
                                startDate={date[0]}
                                endDate={date[1]}
                                numPages={numPages}
                            />

                        </div>

                    ) : (
                        <div>
                            <span>Date:</span>{' '}
                            {date[0].toDateString()}
                        </div>
                    )}
                    <Button variant="contained"
                        type="submit"
                        color="inherit"
                        onClick={() => {
                            setTrigged(true);
                            pushToBE(title, numPages);
                        }}
                    >Submit</Button>

                </form>
            </div>
            {
                date.length > 1 && (<PopUp
                    trigger={istrigged}
                    setTrigged={setTrigged}
                >
                    <h3>Title of the Book: {title}</h3>
                    <p>Number of Pages: {numPages}</p>
                    <p>Starting Date: {date[0].toDateString()}</p>
                    <p>End Date: {date[1].toDateString()}</p>
                </PopUp>
                )
            }

        </div >
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));