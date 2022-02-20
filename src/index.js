import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NumberOfDays from "./numOfDays";

const App = () => {

    const [numPages, setNumPages] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState([new Date()]);

    return (
        <div><h1>Welcome to ReadMe</h1>
            <div>
                <div>
                    <label>
                        Name of the book:
                    </label>
                    <input
                        type="text"
                        value={title}
                        onInput={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Number of pages:
                    </label>
                    <input
                        type="text"
                        value={numPages}
                        onInput={e => setNumPages(e.target.value)}
                    />
                </div>
                <div>
                    <Calendar
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

                <div>
                    <button
                        type="button"
                        onClick={() => console.log(numPages)}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));