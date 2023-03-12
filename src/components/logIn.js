import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import axios from "axios";


function LogIn() {

    const authenticate = (username, password) => {
        axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        });
    }

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    return (
        <>
            <h1>LogIn Page</h1>
            <label>
                Username:
            </label>
            <TextField
                id="standard-required"
                variant="standard" type="text"
                value={username}
                onInput={e => setUsername(e.target.value)}
                size="small"
            />
            <label>
                Password:
            </label>
            <TextField
                id="standard-number"
                variant="standard"
                type="password"
                value={password}
                onInput={e => setPassword(e.target.value)}
                size="small"
            />
            <Button variant="contained"
                type="submit"
                color="inherit"
                onClick={(e) => {
                    e.preventDefault()
                    authenticate(username, password)
                }}
            >LogIn</Button>
        </>
    );
}

export default LogIn;