import React, { useState } from "react";
import ReactDOM from 'react-dom';

const App = () => {

    const [numPages, setNumPages] = useState();
    const [title, setTitle] = useState();

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
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));