import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import axios from "axios";
import { LoginFormContainer, LoginForm, UserInformation } from "./login.styles";
import { useCookies } from 'react-cookie';


function LogIn() {

    const authenticate = (username, password) => {
        axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then(() => {
            setCookie("username", username, { path: '/' })
            window.location.href = '/'
        });
    }
    const [, setCookie] = useCookies(["username"]);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    return (
        <>
            <LoginFormContainer>
                <LoginForm>
                    <UserInformation>
                        <label>
                            Username:
                        </label>
                        <TextField
                            id="standard-required"
                            variant="standard" type="text"
                            value={username}
                            onInput={e => setUsername(e.target.value)}
                            size="small"
                            autoComplete='off'
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
                    </UserInformation>

                    <Button variant="contained"
                        type="submit"
                        color="inherit"
                        onClick={(e) => {
                            e.preventDefault()
                            authenticate(username, password)
                        }}
                    >LogIn</Button>
                </LoginForm>
            </LoginFormContainer>
        </>
    );
}

export default LogIn;