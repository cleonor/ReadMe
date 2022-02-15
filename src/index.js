import React, { useState } from "react";
import ReactDOM from 'react-dom';

const App = () => {

    const [numPages, setNumPages] = useState();

    return (
        <div><h1>Welcome to ReadMe</h1>
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
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));