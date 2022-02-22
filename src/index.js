import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import { useForm } from "react-hook-form";
import 'react-calendar/dist/Calendar.css';
import NumberOfDays from "./numOfDays";

const App = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)

    const [numPages, setNumPages] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState([new Date()]);

    return (
        <div><h1>Welcome to ReadMe</h1>
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
                                value: 4,
                                message: "Min value is 0"
                            }
                        })}
                        value={numPages}
                        onInput={e => setNumPages(e.target.value)}
                    />
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
                <input type="submit" />

                {/* <div>
                    <button
                        type="button"
                        onClick={() => console.log(numPages)}
                    >
                        Add
                    </button>
                </div> */}
            </form>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));