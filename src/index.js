import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import { useForm } from "react-hook-form";
import 'react-calendar/dist/Calendar.css';
import NumberOfDays from "./components/numOfDays";
import PopUp from "./components/popUp";
import "./index.css";
import Navbar from "./components/navBar";

const App = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [numPages, setNumPages] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState([new Date()]);
    const [istrigged, setTrigged] = useState(false);

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <div>
                    <label>
                        Name of the book:
                    </label>
                    <input
                        type="text"
                        {...register("bookName", { required: "This is required." })}
                        value={title}
                        onInput={e => setTitle(e.target.value)}
                    />
                    <p>{errors.bookName?.message}</p>
                </div>
                <div>
                    <label>
                        Number of pages:
                    </label>
                    <input
                        type="number"
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
                <input
                    type="submit"
                    onClick={() => setTrigged(true)}
                />

            </form>

            {date.length > 1 && (<PopUp
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

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));